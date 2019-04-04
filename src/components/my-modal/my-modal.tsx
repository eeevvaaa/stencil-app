import { Component, Method, Element, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'my-modal',
    styleUrl: 'my-modal.scss'
})
export class MyModal {
    buttons = ['okay', 'cancel']
 
    // tell stencil to watch changes
    @State() showOptions = false;

    // declare a reference to host the element
    @Element() modalEl: HTMLElement;

    // exposed properties
    @Prop() modaltitle: string;
    @Prop() content: string;

    @Event() onClose: EventEmitter;

    // make it callable from outside, expose to public
    @Method()
    open() {
        this.modalEl.style.display = 'block'; 
    }

    closeModalHandler() {
        // this.modalEl.style.display = 'none'; // commented out after adding event emitter
        this.showOptions = false;
        this.onClose.emit()
        
    }

    showOptionsHandler() {
        this.showOptions = true;
    }

    render() {
        let options = null;
        if (this.showOptions) {
            options = (this.buttons.map(btn => (
                <button onClick = {() => this.closeModalHandler()}>{btn}</button>
            )));
        }
        console.log(this.modaltitle)
        return (
            <div>
                <h1>{this.modaltitle}</h1>
                <p>{this.content}</p>
                <hr />
                <button onClick= {() => this.showOptionsHandler()}>Show Options</button>
                <hr />
                {options}
            </div>
        )
    }
}


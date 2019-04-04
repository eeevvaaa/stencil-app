import { Component, Method, Element, Prop, State } from '@stencil/core';

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
    @Prop() title: string;
    @Prop() content: string;

    // make it callable from outside, expose to public
    @Method()
    open() {
        this.modalEl.style.display = 'block'; 
    }

    closeModalHandler() {
        this.modalEl.style.display = 'none';
        this.showOptions = false;
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
        return (
            <div>
                <h1>{this.title}</h1>
                <p>{this.content}</p>
                <br />
                <button onClick= {() => this.showOptionsHandler()}>Show Options</button>
                <br />
                {options}

            </div>
        )
    }
}


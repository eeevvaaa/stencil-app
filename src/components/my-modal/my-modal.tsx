import { Component, Method, Element, Prop } from '@stencil/core';

@Component({
    tag: 'my-modal',
    styleUrl: 'my-modal.scss'
})
export class MyModal {
    buttons = ['okay', 'cancel']
    showOptions = false;
    // declare a reference to host the element
    @Element() modalEl: HTMLElement;

    // exposed properties
    @Prop() title: string;
    @Prop() content: string;

    // make it callable from outside
    @Method()
    open() {
      this.modalEl.style.display = 'block'; 
    }

    showOptionsHandler() {
        this.showOptions = true;
    }

    render() {
        return (
            <div>
                <h1>{this.title}</h1>
                <p>{this.content}</p>
                <br />
                <button onClick={this.showOptionsHandler}>Show Options</button>
                <br />
                {this.buttons.map(btn => (
                    <button>{btn}</button>
                ))}

            </div>
        )
    }
}


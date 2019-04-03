import { Component, Method, Element, Prop } from '@stencil/core';

@Component({
    tag: 'my-modal',
    styleUrl: 'my-modal.scss'
})
export class MyModal {
    @Element() modalEl: HTMLElement;

    @Prop() title: string;
    @Prop() content: string;

    // make it callable from outside
    @Method()
    open() {
      this.modalEl.style.display = 'block'; 
    }

    render() {
        return (
            <div>
                <h1>{this.title}</h1>
                <p>{this.content}</p>
            </div>
        )
    }
}


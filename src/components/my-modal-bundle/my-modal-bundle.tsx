import { Component, Prop, Method, Element, State, Listen } from '@stencil/core';

@Component({
    tag: 'my-modal-bundle'
})
export class MyModalBundle {
    @Element() modalEL: HTMLElement;

    @State() show = false;

    @Prop() title: string;
    @Prop() content: string;

    @Method()
    open() {
        this.show = true; 
    }

    // with similar naming conventions, we can specify which component to listen to
    @Listen('my-modal: onClose')
    closeModalHandler() {
        this.show = false;
    }

    render() {
        let content = null;
        if (this.show) {
            content = [
                <my-backdrop></my-backdrop>,
                <my-modal title = {this.title} content = {this.content}></my-modal>
            ]
        }
        return content
    }
}


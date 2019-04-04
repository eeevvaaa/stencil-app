import { Component, Prop, Method, Element, State, Listen } from '@stencil/core';

@Component({
    tag: 'my-modal-bundle'
})
export class MyModalBundle {
    @Element() modalEL: HTMLElement;

    @State() show = false;

    @Prop() bundleTitle: string;
    @Prop() content: string;

    @Method()
    open() {
        this.show = true; 
    }

    // with similar naming conventions, we can specify which component to listen to
    // @Listen('my-modal:onClose') // this throws error, my-modal is not a valid prefix
    @Listen('onClose')
    closeModalHandler() {
        this.show = false;
    }

    render() {
        let content = null;
        if (this.show) {
            content = [
                <my-backdrop></my-backdrop>,
                <my-modal modaltitle = {this.bundleTitle} content = {this.content}></my-modal>
            ]
        }
        return content
    }
}


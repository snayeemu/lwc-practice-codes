import { LightningElement } from 'lwc';

export default class extends LightningElement {
    handleClick = () =>{
        let childComponent = this.template.querySelector('c-childone');
        if(childComponent) {
            childComponent.handleClick();
        }
    }

    handleChildEvent = (e) => {
        let detail = e.detail; 
        console.log(JSON.stringify(detail));
    }
}

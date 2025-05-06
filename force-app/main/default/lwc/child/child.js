import { LightningElement, api, track } from 'lwc';

export default class Child extends LightningElement {
    @track userList = [];
        name = 'LWC';
    
        @api
        get users(){
            return this.userList;
        }
    
        set users(value) {
            console.log(JSON.stringify(value));
            this.userList = value;
        }
    
        handleClick = (event) => {
            event.preventDefault();
            this.name = 'Galib';
            this.users = [{}];
        }

        @api
        handleValidate(value, value1) {
            console.log('Child Component Clicked');
            console.log(value);
            console.log(value1);

            const allValid = [
                ...this.template.querySelectorAll('lightning-input'),
            ].reduce((validSoFar, inputCmp) => {
                inputCmp.reportValidity();
                return validSoFar && inputCmp.checkValidity();
            }, true); 
            return allValid;
        }

        @api
        clickMe = () => {
            console.log('Child Method clicked');
        }
}
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
}
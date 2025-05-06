import { LightningElement, track } from 'lwc';

export default class Account extends LightningElement {
    // value = 'inProgress';
    contactRecord = {'completed__c': true};
    

    @track options = [
        { label: 'New', value: 'new' },
        { label: 'In Progress', value: 'inProgress' },
        { label: 'Finished', value: 'finished' },
    ];

    handleChange(event) {
        event.preventDefault();
        let element = event.target;
        let value = element.value;
        let name = element.name;
        if(name === 'completed__c')
            this.contactRecord[name] = element.checked;
        else
            this.contactRecord[name] = value;
        
    }

    handleCreateAccount = (e)  => {
        e.preventDefault();
        let button = e.target;
        console.log(JSON.stringify(this.contactRecord));

    }

    handleClick = (event) => {
        event.preventDefault();
    }
}
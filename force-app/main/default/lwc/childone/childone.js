import { LightningElement, api } from 'lwc';

export default class Childone extends LightningElement {
    @api
    handleClick() {
        let clickEvent = new CustomEvent('success', {
            detail: {
                accountName: 'Salesforce.com',
                accountId: '001abclazybrownfox',
                contacts: [
                    {name: 'Nayeem'},
                    {name: 'Rohit'},
                    {name: 'Hasan'},
                ]
            },
            bubbles: true,
            composed: false
        });
        this.dispatchEvent(clickEvent);
        // this.dispatchEvent(new CustomEvent('click'));
    } 
}
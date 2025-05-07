import getRecentAccounts from '@salesforce/apex/AccountController.getRecentAccounts';
import { LightningElement, track, wire } from 'lwc';

export default class AccountList extends LightningElement {
    @track recentAccounts = [];
    columns = [];


    @wire(getRecentAccounts)
    wiredRecentAccount(result){
        if(result.data)
        {
            this.recentAccounts = result.data;
            console.log(JSON.stringify(this.recentAccounts));
        }
        else if(result.error)
            console.error(result.error); 
    }

    handleEditButton(e) {
        e.preventDefault();

    }
}
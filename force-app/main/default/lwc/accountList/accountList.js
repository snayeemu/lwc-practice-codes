import getRecentAccounts from '@salesforce/apex/AccountController.getRecentAccounts';
import { LightningElement, track, wire } from 'lwc';
import { refreshApex } from '@salesforce/apex';

import getAccounts1 from '@salesforce/apex/AccountController.getRecentAccounts1';

const actions = [
    { label: 'Show details', name: 'show_details' },
    { label: 'Delete', name: 'delete' }
];



export default class AccountList extends LightningElement {
    @track recentAccounts = [];
    columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Type', fieldName: 'Type' },
        { label: 'Is Active?', fieldName: 'isActive__c', type: 'checkbox' },
        {
            type: "button", label: 'View', initialWidth: 100, typeAttributes: {
                label: 'edit',
                name: 'edit',
                title: 'edit',
                disabled: false,
                value: 'edit',
                iconPosition: 'left',
                iconName:'action:new_note',
                variant:'Brand'
            }
        },
    ];
    fields = ['Name',  'Type', 'isActive__c'];
    recordId = '';
    wiredAccountResult;


    // connectedCallback(){
    //     console.log('Inside Connected-----');
    //     getAccounts1()
    //     .then(res=>{
    //         console.log('Inside Success---',res);

    //     })
    //     .catch(error=>{
    //         console.log('Inside Error');

    //     })

    // }



    @wire(getRecentAccounts)
    wiredRecentAccount(result){
        this.wiredAccountResult = result;
        if(result.data)
        {
            console.log('result---',result);

            this.recentAccounts = result.data;
            console.log(JSON.stringify(this.recentAccounts));
        }
        else if(result.error)
            console.error(result.error);
    }

    handleRowAction(event) {
        const action = event.detail.action;
        const row = event.detail.row;
        switch (action.name) {
            case 'edit':
                this.recordId = row.Id;
                break;
        }
    }

    handleEditSuccess(){
        try {
            console.log('re',  JSON.stringify(this.recentAccounts));
            refreshApex(this.wiredAccountResult);
            this.recordId = '';
            console.log('this.recordId:', this.recordId);
            const evt = new ShowToastEvent({
                title: 'Account created',
                message: 'Record ID: ' + event.detail.id,
                variant: 'success',
            });
            this.dispatchEvent(evt);    
        } catch (error) {
            console.log('error:', error);
        }
    }


}
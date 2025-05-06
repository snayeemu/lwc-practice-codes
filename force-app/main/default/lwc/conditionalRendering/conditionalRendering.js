
import { LightningElement, track } from 'lwc';
import dogImage from '@salesforce/resourceUrl/dogImage';

export default class ConditionalRendering extends LightningElement {
    showTom = false; 
    showJerry = false;
    dogImage = dogImage;

    @track users = [
        {name: 'Nayeem', email: 'nayeem@gmail.com'},
        {name: 'Galib', email: 'galib@gmail.com'},
        {name: 'Hasan', email: 'hasan@gmail.com'},
    ]

    handleButtonClick = (e) => {
        this.showTom = true;
        this.users.push({name: 'Admin', email: "admin@gmail.com"});
        console.log(this.showTom,  this.users);
    }
}
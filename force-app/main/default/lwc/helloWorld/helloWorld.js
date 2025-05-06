import { LightningElement, api, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    welcomeMessage;
    message = 'Welcome to the world of lightning web component!';

    @api __message = '';
    @track users = [
        {name: "Good Boy", email: "good@boy.com"}
    ];
}
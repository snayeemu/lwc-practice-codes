import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    users = [
        {name: 'Nayeem Uddin'},
        {name: 'Galib Hasan'}
    ];

    handleClick = (event) => {
        event.preventDefault();
        let childElement = this.template.querySelector('c-child');
        if (childElement)
            {
                let allValid = childElement.handleValidate(2, 3);
                if(allValid)
                    console.log('All Valid');
            }
    }
}
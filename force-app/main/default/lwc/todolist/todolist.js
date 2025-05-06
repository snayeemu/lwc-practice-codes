import { LightningElement, track } from 'lwc';

export default class Todolist extends LightningElement {
    @track todos = [];
    todoId = 1;
    todo = {
        Id: this.todoId,
        Title: '',
        Description: '',
    }

    handleTitleChange = (event) => {
        event.preventDefault();
        let {value, name, label} = event.target;
        console.log('value:', value);
        console.log('name:', name);
        console.log('label:', label);
        this.todo.Title = value;
    }
    
    handleDescriptionChange = (event) => {
        event.preventDefault();
        let {value, name, label} = event.target;
        console.log('value:', value);
        console.log('name:', name);
        console.log('label:', label); 
        this.todo.Description = value;
    }

    handleClick = (event) => {
        event.preventDefault();
        this.todos.push(this.todo);
        this.todoId = this.tod + 1;
        // video 6; 50 minutes 
    }
}
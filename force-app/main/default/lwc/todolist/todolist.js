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
        this.todo.Title = value;
    }
    
    handleDescriptionChange = (event) => {
        event.preventDefault();
        let {value, name, label} = event.target;
        this.todo.Description = value;
    }

    handleClick = (event) => {
        event.preventDefault();
        try{
            this.todo.Id = this.todoId;
            this.todoId++;
            console.log('OUTPUT : ', JSON.stringify(this.todo), JSON.stringify(this.todos));
            // this.todos.push(
            //     Object.assign({}, this.todo)
            // );
            this.todos = [...this.todos, {...this.todo}];
            console.log(JSON.stringify(this.todos));
            // video 6; 50 minutes 
        }
        catch (e) {
            console.log('Error : ',e);
        }
    }

    handleTodoClick = (event) => {
        event.preventDefault();

    }
}
import { Todo } from "./todo.class";

export class TodoList {

    constructor () {
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo ( todo ) {

        this.todos.push( todo );
        this.guaradarLocalStorage();
    }

    eliminarTodo ( id ) {
        this.todos = this.todos.filter( todo  => todo.id != id )
        this.guaradarLocalStorage();
        // console.log(todo)
    }

    marcarCompletado ( id ) {
        for( const todo of this.todos ) {
            if ( id == todo.id ) {
                todo.completado = !todo.completado;
                this.guaradarLocalStorage();
                break;
            }
        }
    } 

    eliminarCompletados () {
        this.todos = this.todos.filter(todo => todo.completado != true);
        this.guaradarLocalStorage();
    }

    guaradarLocalStorage () {
        localStorage.setItem( 'todo', JSON.stringify(this.todos) )
    }

    cargarLocalStorage () {

        (localStorage.getItem('todo')) 
            ? this.todos = JSON.parse(localStorage.getItem('todo')) 
            : this.todos = [];
        
        this.todos = this.todos.map( obj => Todo.fromJson( obj ) ); 

    }
    

}


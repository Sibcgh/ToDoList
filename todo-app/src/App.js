import React from 'react';
import TodoList from './TodoList/todoList';
import AddTodo from './AddTodo/addTodo';

import './App.css';
// try to fix the issue in todoItem where the class doesnt work

class App extends React.Component {


  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  render() {
   return(
     <div>       
       <AddTodo addTodoFn= {this.addTodo}></AddTodo>
       <TodoList updateTodoFn ={this.updateTodo} todos = {this.state.todos}></TodoList> 
     </div>
   );
  }

  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    if(todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({todos: savedTodos});
      console.log('Has todos', todos);
    } else {
      console.log('No todos');
    }
  }

  // async function
    addTodo = async (todo) =>  {
      await this.setState({ todos: [...this.state.todos,{
        text: todo,
        completed: false
      }] });
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
      console.log(localStorage.getItem('todos'));
    }
 
    updateTodo = (todo) => {
      const newTodos = this.state.todos.map(_todo => {
        if(todo === _todo)
          return {
            text: todo.text,
            completed: !todo.completed
          }
        else 
          return _todo
      });
      this.setState({todo: newTodos});
      console.log(newTodos);
    }

  }

export default App;

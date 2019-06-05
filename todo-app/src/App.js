import React from 'react';
import TodoList from './TodoList/todoList';
import AddTodo from './AddTodo/addTodo';

import './App.css';

// https://www.youtube.com/watch?v=ZcD5rJKm3Lk @ 17:02

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
       <TodoList todos = {this.state.todos}></TodoList>
       
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
 
}
export default App;

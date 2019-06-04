import React from 'react';
import TodoList from './TodoList/todoList';
import TodoItem from './TodoItem/todoItem';
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
       {
         2+3
       }
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


}
export default App;

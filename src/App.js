import React, { Component } from "react";
import "./App.css";
import TodoItem from "./TodoItem";
import TodoData from "./TodoData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: TodoData,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    this.setState((prevState, props) => {
      const updateTodo = prevState.todos.map((todo) => {
        if (todo.id === id) {
          console.log("changes");
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updateTodo,
      };
    });
  }
  render() {
    const todoitems = this.state.todos.map((item) => (
      <TodoItem item={item} key={item.id} handleChange={this.handleChange} />
    ));
    return <div className="todo-list">{todoitems}</div>;
  }
}
export default App;

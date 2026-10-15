import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import TodoEditor from "./components/TodoEditor/TodoEditor";
import Filter from "./components/Filter/Filter";
import Info from "./components/Info/Info";
import initialTodos from "./todo.json";
import { nanoid } from "nanoid";
import { Component } from "react";

class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
  };

  handleDelete = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.filter((todo) => todo.id !== id),
    }));
  };

  handleAppSubmit = (text) => {
    const data = {
      id: nanoid,
      text: text,
      completed: false,
    };

    this.setState((prev) => ({
      todos: [...prev.todos, data],
    }));
  };

  handleFilter = (text) => {
    this.setState({
      filter: text,
    });
  };

  render() {
    const { todos, filter } = this.state;
    const filteredTodo = todos.filter((todo) =>
      todo.text.toLowerCase().includes(filter.toLowerCase()),
    );

    const count = todos.length;

    const done = todos.filter((todo) => todo.completed).length;
    return (
      <>
        <Info count={count} done={done} />
        <TodoEditor onForm={this.handleAppSubmit} />
        <Filter onFilter={this.handleFilter} />
        <TodoList todos={filteredTodo} onDelete={this.handleDelete} />
      </>
    );
  }
}
export default App;

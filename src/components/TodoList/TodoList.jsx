import { Component } from "react";
import { Btn, Input, Item } from "./TodoList.styled";

class TodoList extends Component {
  render() {
    const { todos, onDelete, onCompleted } = this.props;

    return (
      <ul>
        {todos.map(({ id, text, completed }) => {
          return (
            <Item>
              <Input
                type="checkbox"
                checked={completed}
                onChange={() => onCompleted(id)}
              />

              <p
                style={{
                  textDecoration: completed ? "line-through" : "none",
                }}
              >
                {text}
              </p>

              <Btn type="button" onClick={() => onDelete(id)}>
                Delete
              </Btn>
            </Item>
          );
        })}
      </ul>
    );
  }
}

export default TodoList;

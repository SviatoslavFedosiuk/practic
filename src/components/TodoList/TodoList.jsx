import { Component } from "react";
import { Btn, Input  } from "./TodoList.styled";

class TodoList extends Component {
 
  render() {
    const {todos, onDelete} = this.props
    return (
        <ul>{todos.map(({id, text, completed})=>{
            return (
                <li key={id} style={{display:"flex", gap:10, justifyContent:"center"}}>
                    <Input type="checkbox" checked={completed} readOnly/>
                    <p>{text}</p>
                    <Btn type="button" onClick={()=>onDelete(id)}>Delete</Btn>
                </li>
            )
        })}</ul>
    )
  }
}
export default TodoList;

// TodoList - для відображення списку завдань,
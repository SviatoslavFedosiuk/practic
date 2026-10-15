import { Component } from "react";
import {  Input  } from "./Filter.styled";

class Filter extends Component {
 
  render() {
    const {onFilter} = this.props
    return (
        <Input type="text" onChange={(evt)=>onFilter(evt.target.value)}/>
    )
  }
}
export default Filter;


// Filter - інпут для фільтрування завдань 
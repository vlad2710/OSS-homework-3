import React, { Component } from "react";
import "./TodoListItem.css";

export default class TodoListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li
        className="todo-list__item"
        onClick={() => this.props.deleteItem(this.props.id)}
      >
        {this.props.title}
      </li>
    );
  }
}

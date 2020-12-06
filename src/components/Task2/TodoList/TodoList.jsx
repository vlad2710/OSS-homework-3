import React, { Component } from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.css";

export default class TodoList extends Component {
  constructor() {
    super();

    this.maxId = 1;

    this.state = {
      items: [],
      inputValue: "",
    };

    this.addItem = (text) => {
      const newItem = {
        id: this.maxId++,
        title: text,
        completed: false,
      };

      if (text.trim()) {
        this.setState(({ items }) => {
          const newArr = [...items, newItem];

          return {
            items: newArr,
          };
        });
      }

      this.setState({
        inputValue: "",
      });
    };

    this.handleKeyDown = (event) => {
      if (event.key === "Enter") {
        this.addItem(this.state.inputValue);
      }
    };

    this.deleteItem = (id) => {
      this.setState( ({items}) => {

        const indexItem = items.findIndex( (item) => item.id === id );

        const newArray = [...items.slice(0, indexItem), ...items.slice(indexItem + 1)]

        return {
          items: newArray
        }
      } )
      
    }
  }

  render() {
    return (
      <div className="todo-list">
        <h1>TodoList</h1>
        <input
          value={this.state.inputValue}
          className="todo-list__input"
          placeholder="Enter todo"
          type="text"
          onChange={(event) =>
            this.setState({ inputValue: event.target.value })
          }
          onKeyDown={this.handleKeyDown}
        />
        <ul>
          {this.state.items.map((item) => {
            return <TodoListItem key={item.id} id={item.id} title={item.title} deleteItem={this.deleteItem}/>;
          })}
        </ul>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class ComponentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: ["Vlad", "Nikita", "Petya", "Sasha", "Vova", "Denis"],
    };
  }

  getRandomName() {
    let arr = this.state.names;
    this.setState({
      rand: arr[Math.floor(Math.random() * arr.length)],
    });
  }

  render() {
    return (
      <div>
        <button
          style={{ padding: "10px 25px", marginTop: "10px" }}
          onClick={() => this.getRandomName()}
        >
          Click
        </button>
        <h1>{this.state.rand}</h1>
      </div>
    );
  }
}

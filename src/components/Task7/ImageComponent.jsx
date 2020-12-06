import React, { Component } from "react";

export default class ImageComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img
          style={{ width: "640px", height: "480px" }}
          src={this.props.url}
          alt=""
        />
        <h1 style={{ color: "#fff" }}>{this.props.author}</h1>
      </div>
    );
  }
}

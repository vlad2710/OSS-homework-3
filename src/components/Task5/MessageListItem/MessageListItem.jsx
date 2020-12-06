import React, { Component } from "react";
import "./MessageListItem.css";

export default class MessageListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="message-list-item">
        <p>
          <b>Id:</b> {this.props.id}
        </p>
        <p>
          <b>Title:</b> {this.props.title}
        </p>
        <p>
          <b>Body:</b> {this.props.body}
        </p>
      </div>
    );
  }
}

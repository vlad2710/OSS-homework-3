import React, { Component } from "react";
import "./BookmarksResultItem.css";

export default class BookmarksResultItem extends Component {
  render() {
    return (
      <div className="bookmarks-result-item">
        <h3 className="bookmarks-result__title">{this.props.name}</h3>
        <a className="bookmarks-result__visit" href={this.props.url}>
          Visit
        </a>
        <button
          className="bookmarks-result__delete"
          onClick={() => this.props.delete(this.props.url)}
        >
          Delete
        </button>
      </div>
    );
  }
}

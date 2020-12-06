import React, { Component } from "react";
import axios from "axios";
import MessageListItem from "./MessageListItem/MessageListItem";

export default class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        {posts.map((post) => {
          return (
            <MessageListItem
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          );
        })}
      </div>
    );
  }
}

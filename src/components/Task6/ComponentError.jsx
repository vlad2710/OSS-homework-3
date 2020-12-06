import React, { Children, Component } from "react";
import Axios from "axios";

export default class ComponentError extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };

    this.fetchApi = () => {
      fetch("https://github.com/kkmkkkkk").catch((error) => {
        this.setState({
          error,
        });
      });
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  render() {
    if (this.state.error) {
      throw new Error(this.state.error.message);
    }
    return <div></div>;
  }
}

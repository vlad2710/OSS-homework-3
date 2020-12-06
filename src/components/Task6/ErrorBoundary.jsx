import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Ошибка :с</h1>
          <h2>Мы прикладываем все усилия, чтобы решить данную проблему!</h2>
          <h3>Error: {this.state.error.message}</h3>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

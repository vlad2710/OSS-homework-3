import React, { Component } from "react";

export default class RandomNumber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: "",
    };

    this.getRndNumber = (min, max) => {
      let rndNum = Math.floor(Math.random() * (max - min + 1) + min);

      if (rndNum % 2) {
        this.setState({
          number: rndNum,
        });
      }
    };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.getRndNumber(this.props.min, this.props.max)}
          style={{padding: '6px 12px', fontSize: '20px', marginTop: '10px'}}
        >
          Click
        </button>
        <p style={{fontSize: '20px'}}>{this.state.number}</p>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class count extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  dec = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>count</h1>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.inc()}>+</button>
        <button onClick={() => this.dec()}>-</button>
      </div>
    );
  }
}

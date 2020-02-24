import React, { Component } from "react";
import "./Forms.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decreaseCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="counter">
        <button className="counter-subtract" onClick={this.decreaseCount}>
          -
        </button>
        <div className="counter-number">{this.state.count}</div>
        <button className="counter-add" onClick={this.increaseCount}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;

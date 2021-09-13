import React from "react";

import { Button } from "./Button";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  handleCount(value) {
    this.setState((prevState) => ({ count: prevState.count + value }));
  }

  render() {
    return (
      <div className="container__buttons">
        <h3>Current count: {this.state.count}</h3>
        <hr />
        <Button sign="-" updateCount={this.handleCount.bind(this)} />
        <Button sign="+" updateCount={this.handleCount.bind(this)} />
      </div>
    );
  }
}

export default Counter;

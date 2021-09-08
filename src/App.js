import React, { Component } from "react";
import Title from "./components/Title";
import Counter from "./components/Counter";
import PercentageStat from "./components/PercentajeCalculator";
import "./App.css";
export default class App extends Component {
  render() {
    return (
      <div className="container_app">
        <Title module="Core Concepts"></Title>
        <Counter></Counter>
        <PercentageStat label="Today is"></PercentageStat>
      </div>
    );
  }
}

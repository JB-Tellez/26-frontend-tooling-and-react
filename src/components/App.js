import React, { Component } from "react";
import { say } from "cowsay";
import faker from "faker";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
    this.sayHandler = this.sayHandler.bind(this);
  }
  sayHandler() {
    const content = say({ text: faker.name.findName() });

    this.setState({ content });
  }

  render() {
    const critter =
      this.state.content === "" ? (
        <p>click the button</p>
      ) : (
        <pre>{this.state.content}</pre>
      );

    return (
      <div>
        <h1>Generate Cowsay Lorem</h1>
        {critter}
        <button onClick={this.sayHandler}>click me</button>
      </div>
    );
  }
}

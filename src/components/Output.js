import React, { Component } from "react";

export default class Output extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  render() {
    return <article>{this.props.value}</article>;
  }
}

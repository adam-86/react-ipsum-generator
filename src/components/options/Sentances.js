import React, { Component } from "react";

export default class Sentances extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }
  onChange = e => {
    this.setState({ value: e.target.value }, () => {
      this.props.onChange(this.state.value);
    });
  };

  render() {
    return (
      <div>
        <label>How many sentances?</label>
        <input
          value={this.props.value}
          type="number"
          onChange={this.onChange.bind(this)}
        />
      </div>
    );
  }
}

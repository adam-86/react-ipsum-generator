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
      //pass value to props so we can access it via props
      this.props.onChange(this.state.value);
    });
  };

  render() {
    return (
      <div>
        <label>How many sentances?</label>
        <input type="number" onChange={this.onChange.bind(this)} />
      </div>
    );
  }
}

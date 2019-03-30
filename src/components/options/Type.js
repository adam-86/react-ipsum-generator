import React, { Component } from "react";

export default class Type extends Component {
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
        <label>All meat or meat and filler?</label>
        <br />
        <select onChange={this.onChange.bind(this)}>
          <option value="all-meat">all meat</option>

          <option value="meat-and-filler">meat and filler</option>
        </select>
      </div>
    );
  }
}

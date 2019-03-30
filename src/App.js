import React, { Component } from "react";
import axios from "axios";
import Output from "./components/Output";
import Type from "./components/options/Type";
import Sentances from "./components/options/Sentances";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "all-meat",
      sentances: 5,
      text: "",
      clipboard: "Copy"
    };
  }

  componentDidMount = () => {
    document.addEventListener("change", console.log("woot"));
    this.getText();
  };

  // make request to get text
  getText = () => {
    axios
      .get(
        "https://baconipsum.com/api/?type=" +
          this.state.type +
          "&sentences=" +
          this.state.sentances +
          "&start-with-lorem=0"
      )
      .then(response => {
        this.setState({ text: response.data }, function() {
          console.log(this.state);
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Toggle all meat or meat and filler
  changeType = val => {
    this.setState({ type: val }, this.getText);
  };

  // changes sentance count
  changeSentances = val => {
    this.setState({ sentances: val }, this.getText);
  };

  //
  copyToClipboard = () => {
    if (this.state.text !== "") {
      const textField = document.createElement("textarea");
      textField.innerText = this.state.text;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand("copy");
      textField.remove();
      this.setState({ clipboard: "Copied" });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="left-container">
          <h1>Bacon-Ipsum Generator</h1>
          <Type value={this.state.type} onChange={this.changeType} />
          <Sentances
            value={this.state.sentances}
            onChange={this.changeSentances}
          />
          <div className="pig" />
        </div>

        <div className="right-container">
          <button onClick={this.copyToClipboard}>
            {this.state.clipboard}
            <i className="far fa-copy" />
          </button>
          <Output value={this.state.text} />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
// import fetch from "fetch";

class App extends Component {
  componentDidMount() {
    axios.get("/api/").then(results => {
      console.log(results.headers);
      console.log("results: ", results.data);
    });
    // fetch("/")
    //   .then(res => res.json())
    //   .then(results => console.log("data", JSON.parse(results)));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
// import axios from "axios";
// import logo from "./logo.svg";
import "./App.css";
import BaseLayout from './containers/BaseLayout';
// import fetch from "fetch";

class App extends Component {
  componentDidMount() {
    // axios.get("/api/").then(results => {
    //   console.log(results.headers);
    //   console.log("results: ", results.data);
    // });
    // fetch("/")
    //   .then(res => res.json())
    //   .then(results => console.log("data", JSON.parse(results)));
  }

  render() {
    return (
      <BaseLayout>
      <div>Saweetness!</div>
      
      </BaseLayout>
    );
  }
}

export default App;

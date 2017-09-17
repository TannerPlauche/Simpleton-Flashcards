import React, {Component} from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
// import fetch from "fetch";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get("/dummycard").then(results => {
            console.log(results.headers);
            console.log("results: ", results.data);
            this.setState({data: results.data})
        });
        // fetch("/")
        //   .then(res => res.json())
        //   .then(results => console.log("data", JSON.parse(results)));
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <div>
                    {JSON.stringify(this.state.data)}
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;

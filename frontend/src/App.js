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
            this.setState({data: results.data})
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Simpleton Flashcards</h2>
                </div>
                <div>
                    {JSON.stringify(this.state.data)}
                </div>
            </div>
        );
    }
}

export default App;

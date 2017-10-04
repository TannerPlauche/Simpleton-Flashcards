import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";

export default class CategoryBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ""
    };
  }
  componentWillMount() {
    var pastelColors = ["#F6D155", "#AD5D5D", "#034F84", "#006E51"];
    var randomColor =
      pastelColors[Math.floor(Math.random() * pastelColors.length)];
    return this.setState({ color: randomColor });
  }
  render() {
    let { letter } = this.props.category;
    return (
      // <div className="categorySelectorBlock">
      <Paper
        onClick={() => this.props.handleCategoryClick(letter)}
        className="categorySelectorBlock"
        zDepth={3}
        style={{
          fontSize: "calc(100vw * .15)",
          display: "flex",
          width: "25%",
          height: "calc(100vw * .25)",
          minWidth: "25%",
          minHeight: 100,
          borderRadius: 20,
          margin: "20px 20px",
          color: this.state.color,
          border: `5px solid ${this.state.color}`
        }}
      >
        {letter}
      </Paper>
      // </div>
    );
  }
}

import React, { Component } from "react";
// import RaisedButton from "material-ui/RaisedButton";
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
          fontSize: "3em",
          display: "flex",
          width: "calc(100vw * .28)", 
          height: "calc(100vw * .28)",
         // minWidth: 100,
         // maxWidth: 100,
          //minHeight: 90,
          //maxHeight: 100,
          borderRadius: 10,
          margin: "5px 5px",
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

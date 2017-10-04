import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";

export default class CategoryBlock extends Component {
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
          color: "pink",
          border: "5px solid pink",
        }}
      >
        {letter}
      </Paper>
      // </div>
    );
  }
}

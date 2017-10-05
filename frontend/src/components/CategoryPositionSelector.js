import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
// import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";
import _ from "lodash";

export default class CategoryPositionSelector extends Component {
  getBGColor = position => {
    return _.includes(this.props.selectedPositions, position)
      ? "#009150"
      : "#ffffff";
  };

  render() {
    let {
      open,
      selectedLetter,
      selectedPositions,
      addRemoveSelectedCategoryPosition
    } = this.props;
    let actions = [
      <button onClick={this.props.toggle}>
        <h3>Start!</h3>
      </button>,
      <button onClick={this.props.toggle}>close</button>
    ];
    console.log(selectedPositions);
    return (
      <div>
        <Dialog
          className="categorySelectorModal"
          title="Select a Word List"
          modal={true}
          actions={actions}
          open={open}
          contentStyle={{ width: "100%", padding: 10 }}
          bodyStyle={{ padding: "0 2px", overflowY: "inherit" }}
        >
          <h3>{selectedLetter} Words at the </h3>
          <div className="modalBox">
            <Paper
              zDepth={3}
              className="modalBoxPaper"
              style={{ backgroundColor: this.getBGColor("I") }}
              onClick={() => {
                addRemoveSelectedCategoryPosition("I");
              }}
            >
              Beginning of the word<br />
              <small className="sampleWord"> Cat</small>
            </Paper>
            <Paper
              zDepth={3}
              className="modalBoxPaper"
              style={{ backgroundColor: this.getBGColor("M") }}
              onClick={() => {
                addRemoveSelectedCategoryPosition("M");
              }}
            >
              Medial <br /> Hacker
            </Paper>
            <Paper
              zDepth={3}
              className="modalBoxPaper"
              style={{ backgroundColor: this.getBGColor("F") }}
              onClick={() => {
                addRemoveSelectedCategoryPosition("F");
              }}
            >
              Final <br /> Back
            </Paper>
          </div>
        </Dialog>
      </div>
    );
  }
}

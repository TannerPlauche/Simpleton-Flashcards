import React, { Component } from "react";
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

export default class CategoryPositionSelector extends Component {

  actions = [<button onClick={this.props.toggle}>close</button>]

  render() {
    return (
      <div>
        <Dialog
          className="categorySelectorModal"
          title="Select a Word List"
          modal={true}
          actions={this.actions}
          open={this.props.open}
          contentStyle={{ width: "100%", padding: 10 }}
          bodyStyle={{ padding: "0 2px", overflowY: "inherit" }}
        >
          <h3>C Words at the </h3>
          <div className="modalBox">
            <Paper zDepth={3} className="modalBoxPaper" onClick={() => console.log("clickity")}>
              Beginning of the word<br />
              Cat
            </Paper>
            <Paper zDepth={3} className="modalBoxPaper">Medial <br /> Hacker</Paper>
            <Paper zDepth={3} className="modalBoxPaper">Final <br /> Back</Paper>
          </div>
        </Dialog>
      </div>
    );
  }
}

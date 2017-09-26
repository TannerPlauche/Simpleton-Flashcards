import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';

export default class CategoryBlock extends Component {
  render() {
    let { letter } = this.props.category;
    return (
      // <div className="categorySelectorBlock">
      <RaisedButton
        onClick={this.props.handleCategoryClick}
        backgroundColor="#ff8c00"
        style={{ width: "45%", minWidth: 20, borderRadius: 20, margin: "7px 5px" }}>
        {letter}
      </RaisedButton>
      // </div>
    )
  }
}

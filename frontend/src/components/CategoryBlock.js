import React, { Component } from 'react'

export default class CategoryBlock extends Component {
  render() {
    console.log(this.props);
    let { letter } = this.props.category;
    return (
      <div className="categorySelectorBlock">
        <h4>{letter}</h4>
      </div>
    )
  }
}

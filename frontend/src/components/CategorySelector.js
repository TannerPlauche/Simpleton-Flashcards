import React, { Component } from 'react'
import { getCategoriesByLetter } from "../utils";
import { CategoryBlock } from "../components";
export default class componentName extends Component {
  render() {
    let categoryBlocks = getCategoriesByLetter(this.props.categories).map((category, index) => (
      <CategoryBlock key={index} category={category} />
    ))

    return (
      <div className="categorySelector">
        {categoryBlocks}
      </div>
    )
  }
}

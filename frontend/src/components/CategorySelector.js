import React, { Component } from 'react'
import { connect } from "react-redux";
import { toggleCategorySelectorModal } from "../actions/categoryActions";
import CategoryPositionSelector from "./CategoryPositionSelector"
import { getCategoriesByLetter } from "../utils";
import { CategoryBlock } from "../components";
class CategorySelector extends Component {

  render() {
    let categoryBlocks = getCategoriesByLetter(this.props.categories).map((category, index) => (
      <CategoryBlock key={index} category={category} handleCategoryClick={this.props.toggleCategorySelectorModal} />
    ))

    return (
      <div className="categorySelector">
        {categoryBlocks}
        <CategoryPositionSelector
          open={this.props.open}
          toggle={this.props.toggleCategorySelectorModal} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  open: state.categories.selectorModalIsOpen
})

function mapDispatchToProps(dispatch) {
  return {
    toggleCategorySelectorModal: () => {
      dispatch(toggleCategorySelectorModal());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelector);
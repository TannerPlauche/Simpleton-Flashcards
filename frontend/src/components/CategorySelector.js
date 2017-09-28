import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { toggleCategorySelectorModal, addRemoveSelectedCategoryPosition } from "../actions/categoryActions";
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
          selectedLetter={this.props.selectedLetter}
          selectedPositions={this.props.selectedPositions}
          addRemoveSelectedCategoryPosition={this.props.addRemoveSelectedCategoryPosition}
          toggle={this.props.toggleCategorySelectorModal}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  open: state.categories.selectorModalIsOpen,
  selectedLetter: state.categories.selectedLetter,
  selectedPositions: state.categories.selectedPositions
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleCategorySelectorModal,
    addRemoveSelectedCategoryPosition
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelector);
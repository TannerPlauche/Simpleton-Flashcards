import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { getCategories } from "../actions/categoryActions";
class CategoryManager extends Component {
  componentWillMount() {
    if (!this.props.categories.length) {
      this.props.getCategories();
    }
  }

  render() {
    let categories = this.props.categories.map((category, index) => (
      <h3 key={index}>
        Letter: {category.letter} / Symbol: {category.symbol} / Position:{" "}
        {category.location}
      </h3>
    ));

    return (
      <div>
        <h1> Manage Categories</h1>
        <div>{categories}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { categories: state.categories.list };
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => {
      dispatch(getCategories());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryManager);

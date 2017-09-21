import React, { Component } from "react";
import NewCardForm from "../components/NewCardForm";

// import PropTypes from 'prop-types';
import { connect } from "react-redux";

// import { getCards } from "../actions/cardActions";
import { getCategories } from "../actions/categoryActions";

class CardManager extends Component {
  componentWillMount() {
    // this.props.getCards();
    if (!this.props.categories.length) {
      this.props.getCategories();
    }
  }

  render() {
    return (
      <div>
        <h1>Card Manager</h1>
        <NewCardForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cards: state.cards, categories: state.categories };
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => {
      dispatch(getCategories());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardManager);

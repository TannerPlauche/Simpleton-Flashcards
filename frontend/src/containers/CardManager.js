import React, { Component } from "react";
import NewCardForm from "../components/NewCardForm";
import '../App.css';

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
      <div style={{height: "100vh"}}>
        <h1 className="card-manager-wrapper">Card Manager</h1>
        <NewCardForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cards: state.cards, categories: state.categories.list };
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => {
      dispatch(getCategories());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardManager);

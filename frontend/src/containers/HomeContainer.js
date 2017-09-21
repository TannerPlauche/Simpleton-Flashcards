import React, { Component } from 'react';
import { connect } from "react-redux";
import { getCategories } from "../actions/categoryActions";
import { CategorySelector } from "../components";
// import PropTypes from 'prop-types';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        if (!this.props.categories.length) {
            this.props.getCategories();
        }
    }

    render() {
        return (
            <div className="pageContainer">
                <div className="App-header">
                    <h2>Simpleton Flashcards</h2>
                </div>
                <CategorySelector categories={this.props.categories} />
            </div>
        );
    }
}

// HomeContainer.propTypes = {};
// HomeContainer.defaultProps = {};
const mapStateToProps = (state, ownProps) => {
    return { categories: state.categories }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: () => {
            dispatch(getCategories());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);


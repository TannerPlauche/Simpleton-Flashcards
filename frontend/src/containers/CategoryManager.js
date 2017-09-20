import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {getCategories} from "../actions/categoryActions";

class CategoryManager extends Component {
    componentWillMount() {
        this.props.getCategories();
    }

    render() {
        console.log(typeof this.props.categories);
        let categories = this.props.categories.map((category, index) => (
                <h3 key={{index}}>Cat: {category.letter} {category.symbol} {category.location}</h3>
            )
        );

        console.log(categories);
        return (
            <div>
                <h1> Manage Categories</h1>
                <div>
                    {categories}
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {categories: state.categories}
}


function mapDispatchToProps(dispatch) {
    // whenever selectUser is called, the result should be passed to
    // the reducer.
    return {
        getCategories: () => {
            dispatch(getCategories())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryManager);
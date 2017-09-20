import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class BaseLayout extends Component {

    render() {
        return (
            <div>
                <Link to={"/admin/categories"}>Categories</Link>
                {this.props.children}
            </div>
        )
    }
}
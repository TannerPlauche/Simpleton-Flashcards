import React, { Component } from "react";
import { Link } from "react-router-dom";

const styles = {
  navStyle: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around"
  }
};

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <nav style={styles.navStyle}>
          <Link to={"/admin/categories"}>Categories</Link>
          <Link to={"/admin/cards"}>Card Manager</Link>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

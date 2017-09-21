import React, { Component } from 'react'
import { Link } from "react-router-dom";

const styles = {
  footerStyle: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    position: "fixed",
    bottom: 0
  }
};
export default class componentName extends Component {
  render() {
    return (
      <div style={styles.footerStyle}>
        <Link to={"/admin/categories"}>Categories</Link>
        <Link to={"/admin/cards"}>Card Manager</Link>
      </div>
    )
  }
}

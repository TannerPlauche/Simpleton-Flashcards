import React, { Component } from 'react'
import { Link } from "react-router-dom";

const styles = {
  footerStyle: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    position: "fixed",
    bottom: 0,
    height: "5%",
    backgroundColor: "rgb(50, 50, 50)"
  },
  linkStyle: {
    fontSize: "1em",
    textDecoration: "none",
    color: "white",

  }
};
export default class componentName extends Component {
  render() {
    return (
      <div style={styles.footerStyle}>
        <Link style={styles.linkStyle} to={"/admin/categories"}>Categories</Link>
        <Link style={styles.linkStyle} to={"/admin/cards"}>Card Manager</Link>
      </div>
    )
  }
}

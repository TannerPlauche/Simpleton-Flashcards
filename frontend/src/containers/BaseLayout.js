<<<<<<< HEAD
import React, {Component} from 'react';


class BaseLayout extends Component {
  state = {  }
  render() {
    return (
      <div>
        <h1>SIMPLETON FLASHCARDS</h1>
        <button>Create Card</button>
        {this.props.children}
      </div>  
    );
  }
}

export default BaseLayout;
=======
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Footer } from "../components";

const styles = {
  navStyle: {
    // width: "100%",
    // display: "flex",
    // justifyContent: "space-around"
  }
};

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <nav style={styles.navStyle}>
          {/* <Link to={"/admin/categories"}>Categories</Link> */}
          {/* <Link to={"/admin/cards"}>Card Manager</Link> */}
        </nav>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
>>>>>>> master

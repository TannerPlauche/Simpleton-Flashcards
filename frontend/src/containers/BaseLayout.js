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
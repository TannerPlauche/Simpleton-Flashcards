import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux"

class FlashCardPractice extends Component {
  render() {
    return (
      <div>
        <h1>Practice!</h1>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashCardPractice)
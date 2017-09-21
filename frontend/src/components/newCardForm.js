import React, { Component } from "react";
import { connect } from "react-redux";
import { createNewCard } from "../actions/cardActions";
import Select from "react-select"; // docs on this component @ https://github.com/JedWatson/react-select
import reduce from "lodash/reduce";

class NewCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCard: {
        word: "",
        image: "",
        creatorId: 1
      },
      cardCategories: []
    };
  }

  handleInputChange = e => {
    let { newCard } = this.state;
    newCard[e.target.name] = e.target.value;
    this.setState({ newCard }, () => console.log(this.state.newCard));
  };

  handleSelectChange = cardCategories => {
    this.setState({ cardCategories }, () => console.log(this.state));
  };

  handleCreateCard = () => {
    this.props.createNewCard(this.state);
    this.setState({
      newCard: {
        word: "",
        image: "",
        userId: 1
      },
      cardCategories: []
    });
  };

  render() {
    let { word, image } = this.state.newCard;
    let matchedLetters = [];

    const categoryOptions = reduce(
      this.props.categories.slice(),
      (categoriesArray, item) => {
        if (matchedLetters.indexOf(item.letter) < 0) {
          matchedLetters.push(item.letter);
          categoriesArray.push({
            value: item.id,
            id: item.id,
            label: item.letter
          });
        }
        return categoriesArray;
      },
      []
    ).sort();

    return (
      <div>
        <h3>Create Cards</h3>
        <form style={styles.formStyle}>
          <input
            style={styles.inputStyle}
            type="text"
            placeholder="Word"
            name="word"
            value={word}
            onChange={this.handleInputChange}
          />
          <input
            style={styles.inputStyle}
            type="text"
            placeholder="Image Link"
            name="image"
            value={image}
            onChange={this.handleInputChange}
          />
        </form>
        <Select
          multi
          placeholder="Phonetic Categories"
          options={categoryOptions}
          onChange={this.handleSelectChange}
          value={this.state.cardCategories}
        />
        <button onClick={this.handleCreateCard}>Add Card</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNewCard: data => {
      dispatch(createNewCard(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCardForm);

const styles = {
  formStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  inputStyle: {
    width: "50%"
  }
};

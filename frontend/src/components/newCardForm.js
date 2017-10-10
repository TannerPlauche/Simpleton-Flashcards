import React, { Component } from "react";
import { connect } from "react-redux";
import { createNewCard } from "../actions/cardActions";
import { getCategoryPosition } from "../utils";
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

    const categoryOptions = reduce(
      this.props.categories,
      (categoriesArray, item) => {
        categoriesArray.push({
          value: item.id,
          id: item.id,
          label: getCategoryPosition(item.location) + " " + item.letter
        });
        return categoriesArray;
      },
      []
    ).sort();

    return (
      <div id="card-form-wrapper" style={styles.wrapper}>
        <h3 style={{textAlign: "center"}}>Create Cards</h3>
        <form style={styles.formStyle}>
          <input
            style={styles.inputStyle}
            type="text"
            placeholder="Word"
            className="card-form-input"
            name="word"
            value={word}
            onChange={this.handleInputChange}
          />
          <input
            style={styles.inputStyle}
            type="text"
            placeholder="Image Link"
            className="card-form-input"
            name="image"
            value={image}
            onChange={this.handleInputChange}
          />
        </form>
        <Select
          id="card-form-selector"
          multi
          placeholder="Phonetic Categories"
          options={categoryOptions}
          onChange={this.handleSelectChange}
          value={this.state.cardCategories}
          style={styles.selectStyles}
        />
        <button style={styles.button} onClick={this.handleCreateCard}>Add Card</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories.list
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
    alignItems: "center",
    fontSize: "1em",
  },
  inputStyle: {
    fontSize: "1em",
    width: "80%",
    margin: "5px 0 10px 0",
    border: "1px solid lightgray",
    padding: 5
  },
  selectStyles: {
    width: "80%",
    margin: "auto",
  },
  button: {
    position: "relative",
    backgroundColor: "#FF8C00",
    outline: "none",
    fontSize: "1em",
    border: "none",
    display: "block",
    left: "50%",
    transform: "translatex(-50%)",
    padding: "10px 40px",
    marginTop: 8,
    borderRadius: 5,
    fontWeight: 500
  },
  wrapper: {
    maxWidth: 800,
    margin: "auto"
  }
};

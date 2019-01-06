import React, { Component } from "react";

class Ingredient extends Component {
  renderIngredients() {
    const ingredients = this.props.ingredients.map((item, index) => {
      return (
        <p className="ingredient" key={index}>
          {item.ingredient} - {item.amount}{" "}
        </p>
      );
    });
    return ingredients;
  }
  render() {
    return (
      <div className="ingredient-container">{this.renderIngredients()}</div>
    );
  }
}

export default Ingredient;

import React, { Component } from "react";

class Recipe extends Component {
  renderRecipes() {
    const recipes = this.props.recipes.map((item, index) => {
      return (
        <div className="recipe" key={index}>
          <p> Name: item.name</p>
          <p> Serves: {item.servings}</p>
          <p> Category: {item.category}</p>
        </div>
      );
    });
    return recipes;
  }
  render() {
    return <div>{this.renderRecipes()}</div>;
  }
}

export default Recipe;

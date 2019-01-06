import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipesData from "./../data/recipes";
class Recipes extends Component {
  render() {
    return (
      <div className="container">
        <div className="recipe">
          <h1> Recipes </h1>
          <Recipe recipes={RecipesData} />
        </div>
      </div>
    );
  }
}

export default Recipes;

import React, { Component } from "react";
import "./App.css";
import Recipes from "./components/Recipes";
import RecipesOfTheDay from "./components/RecipeOfTheDay";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Recipes />
        <RecipesOfTheDay />
      </div>
    );
  }
}

export default App;

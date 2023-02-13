import React from "react";
import AddRecipe from "./AddRecipe";
import RecipeList from "./RecipeList";
import { RecipeProvider } from "./RecipeContext";

function AppRecipe() {
  return (
    <RecipeProvider>
      <AddRecipe />
      <RecipeList />
    </RecipeProvider>
  );
}

export default AppRecipe;
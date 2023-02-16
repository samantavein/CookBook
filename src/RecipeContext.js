/*
import React, { createContext, useState } from 'react';

export const RecipeContext = createContext();

const RecipeContextProvider = (props) => {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const removeRecipe = (recipeId) => {
    setRecipes(recipes.filter(recipe => recipe.id !== recipeId));
  };

  const updateRecipe = (updatedRecipe) => {
    const index = recipes.findIndex(recipe => recipe.id === updatedRecipe.id);
    if (index !== -1) {
      const newRecipes = [...recipes];
      newRecipes[index] = updatedRecipe;
      setRecipes(newRecipes);
    }
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, removeRecipe, updateRecipe }}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
*/

import React, { useState, createContext } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = props => {
  const [recipes, setRecipes] = useState([]);

  return (
    <RecipeContext.Provider value={[recipes, setRecipes]}>
      {props.children}
    </RecipeContext.Provider>
  );
};

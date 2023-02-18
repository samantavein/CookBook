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

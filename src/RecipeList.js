import React, { useContext } from "react";
import { RecipeContext } from "./RecipeContext";

const RecipeList = () => {
  const [recipes] = useContext(RecipeContext);

  return (
    <div >
      {recipes.map((recipe, index) => (
        <div key={index}>
          <h3>{recipe.title}</h3>
          <p>{recipe.ingredients}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

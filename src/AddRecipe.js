import React, { useContext } from "react";
import { RecipeContext } from "./RecipeContext";

const AddRecipe = () => {
  const [recipes, setRecipes] = useContext(RecipeContext);

  const addRecipe = e => {
    e.preventDefault();
    setRecipes([
      ...recipes,
      {
        title: e.target.title.value,
        ingredients: e.target.ingredients.value
      }
    ]);
    e.target.title.value = "";
    e.target.ingredients.value = "";
  };

  return (
    <form onSubmit={addRecipe}>
      <input 
        type="text" 
        name="title" 
        placeholder="Recipe title" />
      <input
        type="text"
        name="ingredients"
        placeholder="Ingredients"
      />
       <input
          type="text"
          name="steps"
          placeholder="Steps"
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipe;

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
        ingredients: e.target.ingredients.value,
        method: e.target.method.value,
        time: e.target.time.value

      }
    ]);
    e.target.title.value = "";
    e.target.ingredients.value = "";
    e.target.method.value = "";
    e.target.time.value = "";
  };

  return (
    <form >
      <label>Recipe title:</label>
      <input 
        type="text" 
        name="title" 
      />
      <label>Recipe ingredients:</label>
      <input
        type="text"
        name="ingredients" 
      />
      <button>add</button>
      <label>Recipe method:</label>
       <textarea
        type="text"
        name="method"       
      />
      <label>Cooking time (in minutes):</label>
      <input
      type="text"
      name="time"

      />
      <button type="submit" onSubmit={addRecipe}>submit</button>
    </form>
  );
};

export default AddRecipe;

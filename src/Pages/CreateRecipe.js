

import React, { useContext, useState } from "react";
import { RecipeContext } from "../RecipeContext";

const CreateRecipe = () => {
  const [recipes, setRecipes] = useContext(RecipeContext);
  const [ingredients, setIngredients] = useState([]);

  const handleAddIngredient = (e) => {
    e.preventDefault();
    setIngredients([...ingredients, e.target.ingredient.value]);
    e.target.ingredient.value = "";
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // send POST request to the server to add a new recipe
    const res = await fetch("http://localhost:4001/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: e.target.title.value,
        ingredients: ingredients,
        method: e.target.method.value,
        time: e.target.time.value,
      }),
    });

    // get the newly added recipe from the server and add it to the context
    const newRecipe = await res.json();
    setRecipes([...recipes, newRecipe]);

    // clear the form and ingredients list
    e.target.title.value = "";
    e.target.method.value = "";
    e.target.time.value = "";
    setIngredients([]);
  };

  return (  
    <form onSubmit={handleSubmit}>
      <h2>Add new recipe</h2>
      <label>Recipe title:</label>
      <input type="text" name="title" />
      <label>Recipe ingredients:</label>
      <div>
        {ingredients.map((ingredient, index) => (
          <div key={index}>{ingredient}</div>
        ))}
        <input type="text" name="ingredient" />
        <button onClick={handleAddIngredient}>add</button>
      </div>

      <label>Recipe method:</label>
      <textarea type="textarea" name="method" />
      <label>Cooking time (in minutes):</label>
      <input type="text" name="time" />
      <button type="submit">submit</button>
    </form>
  );
};

export default CreateRecipe;

/*
import React, { useContext } from "react";
import { RecipeContext } from "../RecipeContext";

const CreateRecipe = () => {
  const [recipes, setRecipes] = useContext(RecipeContext);

  
  const addRecipe = async (e) => {
    e.preventDefault();

    // send POST request to the server to add a new recipe
    const res = await fetch("http://localhost:4001/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: e.target.title.value,
        ingredients: e.target.ingredients.value,
        method: e.target.method.value,
        time: e.target.time.value,
      }),
    });

    // get the newly added recipe from the server and add it to the context
    const newRecipe = await res.json();
    setRecipes([...recipes, newRecipe]);

    // clear the form
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
          type="textarea"
          name="method"       
        />
        <label>Cooking time (in minutes):</label>
        <input
        type="text"
        name="time"
  
        />
        <button type="submit" onSubmit={addRecipe}>submit</button>
      </form>
  )
};

export default CreateRecipe;
*/

/*
import React, { useContext, useState } from "react";
import { RecipeContext } from "../RecipeContext";

const CreateRecipe = () => {
  const [recipes, setRecipes] = useContext(RecipeContext);
  const [ingredients, setIngredients] = useState([]);

  const handleAddIngredient = (e) => {
    e.preventDefault();
    const newIngredient = e.target.ingredient.value;
    setIngredients([...ingredients, newIngredient]);
    e.target.ingredient.value = "";
  };

  const addRecipe = async (e) => {
    e.preventDefault();

    // send POST request to the server to add a new recipe
    const res = await fetch("http://localhost:4001/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: e.target.title.value,
        ingredients: ingredients,
        method: e.target.method.value,
        time: e.target.time.value,
      }),
    });

    // get the newly added recipe from the server and add it to the context
    const newRecipe = await res.json();
    setRecipes([...recipes, newRecipe]);

    // clear the form
    e.target.title.value = "";
    setIngredients([]);
    e.target.method.value = "";
    e.target.time.value = "";
  };

  return (
    <form >
      <label>Recipe title:</label>
      <input type="text" name="title" />
      <label>Recipe ingredients:</label>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <form >
        <input type="text" name="ingredient" />
        <button type="submit">add</button>
      </form>
      <label>Recipe method:</label>
      <textarea type="textarea" name="method" />
      <label>Cooking time (in minutes):</label>
      <input type="text" name="time" />
      <button type="submit" onSubmit={addRecipe}>submit</button>
    </form>
  );
};

export default CreateRecipe;
*/

/*
import React, { useContext } from "react";
import { RecipeContext } from "../RecipeContext";

const CreateRecipe = () => {
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
        type="textarea"
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

export default CreateRecipe;
*/
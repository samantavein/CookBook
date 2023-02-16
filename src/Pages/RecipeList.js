/*
import React, { useContext, useEffect } from "react";
import { RecipeContext } from "./RecipeContext";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const [recipes, setRecipes] = useContext(RecipeContext);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from the context provider
      setRecipes(await fetch("http://localhost:3001/recipes").then((res) => res.json()));
    };

    fetchData();
  }, [setRecipes]);

  return (
    <form>
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.time} to make</p>
            <p>{recipe.method.slice(0, 100)}...</p>
            <Link to={`/recipes/${recipe.id}`}>
              <button>Cook this</button>
            </Link>
          </div>
        ))}
      </div>
    </form>
  );
};

export default RecipeList;
*/

import React, { useContext } from "react";
import { RecipeContext } from "../RecipeContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const RecipeList = () => {
  const [recipes, setRecipes] = useContext(RecipeContext);

  //const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4001/recipes");
      const data = await res.json();
      setRecipes(data);
    };
    fetchData();
  }, [setRecipes]);

  return (
    <form >
        <div >
        {recipes.map((recipe) => (
        <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.time} to make</p>
            <Link to={`/recipes/${recipe.id}`}><button>Cook this</button></Link>
            <p>{recipe.method.slice(0,100)}...</p>     
        </div>
        ))}
    </div>
  </form>
  );
};

export default RecipeList;

/*   
    <div >
      {recipes.map((recipe, index) => (
        <div key={index}>
          <h3>{recipe.title}</h3>
          <p>{recipe.ingredients}</p>
        </div>
      ))}
    </div>
*/

/*
import { RecipeConsumer } from './RecipeContext';
import React, { useContext } from "react";
import { RecipeContext } from "./RecipeContext";
import { useEffect } from "react";

const RecipeDetails = async () => {

  const [recipes, setRecipes] = useContext(RecipeContext);

  //const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4001/recipes/" + id);
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
            <p>{recipe.method}</p>
            
            
        </div>
        ))}
    </div>
  </form>
  );
 
  /*
    return (
      <RecipeConsumer>
        {({ selectedRecipe }) =>
          selectedRecipe ? (
            <div>
              <h3>{selectedRecipe.title}</h3>
              <p>{selectedRecipe.ingredients}</p>
            </div>
          ) : (
            <p>Select a recipe to view details</p>
          )
        }
      </RecipeConsumer>
    );
    */


import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../RecipeContext";

const RecipeDetails =  () => {
  const { id } = useParams(); // get the recipe id from the URL
  const [recipes, setRecipes] = useContext(RecipeContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:4001/recipes/${id}`);
      const data = await res.json();
      setRecipes(data);
    };

    fetchData();
  }, [id, setRecipes]);

  return (
    <form>
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.time} to make</p>
            <p>{recipe.method}</p>
          </div>
        ))}
      </div>
    </form>
  );


  };
  export default RecipeDetails;
  
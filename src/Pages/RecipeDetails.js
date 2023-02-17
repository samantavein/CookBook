import React, { useContext, useState, useEffect } from "react";
import { RecipeContext } from "../hooks/RecipeContext";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
  max-width: 70%;
  padding: 30px;
  background-color: white; 
`;

const Title = styled.h2`
  text-align: center;
`;

const Text = styled.p`
  font-size: 17px;
  ${props => props.center && css`
    text-align: center;;
  `}
`;

const RecipeDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recipes, setRecipes] = useContext(RecipeContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:4001/recipes/${id}`);
        const data = await res.json();
        setRecipes(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [id, setRecipes]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <div key={recipes.id}>
        <Title center>{recipes.title}</Title>

        <Text center>Takes {recipes.time} minutes to make</Text>
        <Text>{recipes.method}</Text>   
    </div>
    </Container>

  );
};

export default RecipeDetails;

/*
    <ul>
    {recipe.ingredients.map((ingredient, index) => (
      <li key={index}>{ingredient}</li>
    ))}
  </ul>
*/ 

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

/*
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
  */
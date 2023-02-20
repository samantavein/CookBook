import React, { useContext, useState } from "react";
import { RecipeContext } from "../hooks/RecipeContext";
import styled from "styled-components";
import { css } from "styled-components";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  max-width: 35%; 
`;
const StyledButton = styled.button`
  padding: 7px 17px;
  background-color: #5900a1;
  color: #fff;
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer; 
  border: none;
  ${props => props.margin && css`
    margin-left: 2px;
    float: right;
  `}
`;
const StyledLabel = styled.label`
  font-size: 17px;
  margin-bottom: 10px;
  font-family: Arial, sans-serif;
  color: #5e5e5e;
  ${props => props.small && css`
  font-size: 14px;
  margin-bottom: 10px;
`}
`;
const StyledInput = styled.input`
  width: 100%;
  font-size: 18px;
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 20px;
  border: 1px solid lightgray;
  ${props => props.width && css`
    width: 85%;
  `}
`;
const StyledTextarea = styled.textarea`
  width: 100%;
  font-size: 18px;
  border-radius: 3px;
  margin-bottom: 20px;
  border: 1px solid lightgray;
`;

const CreateRecipe = () => {
  const [recipes, setRecipes] = useContext(RecipeContext);
  const [ingredients, setIngredients] = useState([]);
  const [ingredientInput, setIngredientInput] = useState('');

  const handleIngredientInput = (e) => {
    setIngredientInput(e.target.value);
  };

  const handleAddIngredient = (e) => {
    e.preventDefault();
    setIngredients([...ingredients, ingredientInput]);
    setIngredientInput('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target.title.value.trim();
    const method = e.target.method.value.trim();
    const time = parseInt(e.target.time.value.trim(), 10);

    if (!title || !method || isNaN(time)) {
      alert("All fields should be filled and time should be a number!");
      return;
    }

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

    const newRecipe = await res.json();
    setRecipes([...recipes, newRecipe]);

    e.target.title.value = "";
    e.target.method.value = "";
    e.target.time.value = "";
    setIngredients([]);
  };

  return (  
    <Container onSubmit={handleSubmit}>
      <h2 style={{ textAlign: "center" }}>Add a new recipe</h2>
      <StyledLabel>Recipe title:</StyledLabel>
      <StyledInput type="text" name="title" />
      <StyledLabel >Recipe ingredients:</StyledLabel>
      <StyledLabel small>Current ingredients:</StyledLabel>
      <div >
        {ingredients.map((ingredient, index) => (
          <div key={index}>{ingredient}</div>
        ))}
        <StyledInput width="true" type="text" name="ingredient" value={ingredientInput} onChange={handleIngredientInput} />
        <StyledButton margin onClick={handleAddIngredient}>add</StyledButton>      
      </div>

      <StyledLabel>Recipe method:</StyledLabel>
      <StyledTextarea type="textarea" name="method" />
      <StyledLabel>Cooking time (in minutes):</StyledLabel>
      <StyledInput type="text" name="time" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <StyledButton center type="submit">submit</StyledButton>
      </div>
    </Container>
  );
};
export default CreateRecipe;
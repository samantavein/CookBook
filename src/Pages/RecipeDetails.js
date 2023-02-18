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
  max-width: 66%;
  padding: 30px;
  background-color: white; 
`;
const Title = styled.h2`
  text-align: center;
`;
const StyledUl = styled.ul`
  text-decoration: none;
  color: grey;
`;
const Text = styled.p`
  font-size: 17px;
  ${props => props.center && css`
    text-align: center;
  `}
`;

const RecipeDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useContext(RecipeContext);

  useEffect(() => {
    const fetchData = async () => {
        const res = await fetch(`http://localhost:4001/recipes/${id}`);
        const data = await res.json();
        setRecipes(data);
        setLoading(false);
    };
    fetchData();
  }, [id, setRecipes]);

  if (loading) return <Text center>Loading...</Text>;

  return (
    <Container>
      <div key={recipes.id}>
        <Title center>{recipes.title}</Title>
        <Text center>Takes {recipes.time} minutes to make</Text>
        <ul style={{  display: 'flex', justifyContent: "center" }}>
          {recipes.ingredients.map((ingredient, index) => (
            <StyledUl key={index}>{index === 0 ? ingredient : `, ${ingredient}`}</StyledUl>
          ))}
        </ul>       
        <Text>{recipes.method}</Text>   
    </div>
    </Container>
  );
};
export default RecipeDetails;
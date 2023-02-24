import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { setRecipes } from "../hooks/reducers";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
  max-width: 66%;
  padding: 30px;
  background-color: white; 
`;
const StyledTitle = styled.h2`
  text-align: center;
`;
const StyledUl = styled.ul`
  text-decoration: none;
  color: grey;
`;
const StyledText = styled.p`
  font-size: 17px;
  ${props => props.center && css`
    text-align: center;
  `}
`;

const RecipeDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:4001/recipes/${id}`);
      const data = await res.json();
      dispatch(setRecipes(data));
      setLoading(false);
    };
    fetchData();
  }, [id, dispatch]);

  if (loading) return <StyledText center>Loading...</StyledText>;

  return (
    <Container>
      <div key={recipes.id}>
        <StyledTitle center>{recipes.title}</StyledTitle>
        <StyledText center>Takes {recipes.time} minutes to make</StyledText>
        <ul style={{  display: 'flex', justifyContent: "center" }}>
          {recipes.ingredients.map((ingredient, index) => (
            <StyledUl key={index}>{index === 0 ? ingredient : `, ${ingredient}`}</StyledUl>
          ))}
        </ul>       
        <StyledText>{recipes.method}</StyledText>   
    </div>
    </Container>
  );
};
export default RecipeDetails;
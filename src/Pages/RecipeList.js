import React, { useState, useContext, useEffect } from "react";
import { RecipeContext } from "../hooks/RecipeContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
max-width: 800px;
padding: 20px;
background-color: white; 
box-shadow: 0px 0px 2px grey;
border-radius: 4px;
transition: transform 0.2s;
&:hover {
  transform: rotate(3deg);
}
`;
const StyledButton = styled.button`
padding: 7px 18px;
background-color: #d3d2d2;
border-radius: 3px;
border: none;
font-size: 15px;
cursor: pointer;
  
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  justify-content: space-between;
  max-width: 70%;
  margin: 50px auto; 
`;
const StyledText = styled.p`
  ${props => props.center && css`
      text-align: center;
  `}
  ${props => props.gray && css`
    margin-top: 0px;
    color: gray;
  `}
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
`;

const RecipeList = ({ searchTerm }) => {
  const [recipes, setRecipes] = useContext(RecipeContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4001/recipes");
      const data = await res.json();
      setRecipes(data);
      setLoading(false);
    };
    fetchData();
  }, [setRecipes]);

  if (loading) return <StyledText center>Loading...</StyledText>;

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
        {filteredRecipes.map((recipe) => (
          <StyledDiv key={recipe.id}>
            <h3 style={{ marginBottom: '0px' }} >{recipe.title}</h3>
            <StyledText gray>{recipe.time} minutes to make</StyledText>
            <p>{recipe.method.slice(0, 100)}...</p>
            <StyledLink to={`/recipes/${recipe.id}`}>
              <StyledButton>Cook this</StyledButton>
            </StyledLink>
          </StyledDiv>
        ))}
    </Container>
  );
};
export default RecipeList;
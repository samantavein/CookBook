import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background-color: #5900a1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  /*padding: 0 22%;*/
`;

const Logo = styled.h1`
  font-size: 25px;
  color: white;
  text-decoration: none;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchLabel = styled.p`
  font-size: 18px;
  color: white;
  margin: 0;
  margin-right: 10px;
`;

const SearchInput = styled.input`
  font-size: 18px;
  border: none;
  border-radius: 3px;
  padding: 5px; 
`;

const CreateButton = styled.button`
padding: 8px 10px;
background-color: #5900a1;
color: #fff;
border: 1px solid lightgray;
border-radius: 3px;
font-size: 15px;
cursor: pointer;
margin-left: 40px;
margin-right: 0px;
float:right;
`;
const Navbar = ({ searchTerm, handleSearchInput }) => {

  return (
    <NavbarContainer>
      <Link to="/">
        <Logo>Cook Book</Logo>
      </Link>
      <SearchContainer>
        <SearchLabel>Search:</SearchLabel>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={handleSearchInput}
        />
        <Link to="/create">
          <CreateButton>Create recipe</CreateButton>
        </Link>
      </SearchContainer>
    </NavbarContainer>
  );
};



export default Navbar;

/*import { Link } from "react-router-dom";
import React from "react";
import styled from 'styled-components';
import { css } from 'styled-components';

const Navbar = ({ searchTerm, handleSearchInput }) => {


  return (

      <nav className="navbar">
        <div>
          <Link to="/">

            <h1>Cook Book</h1>

          </Link>
        </div>
        <label>
          <p>Search:</p>
        </label>
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchInput}
          />
          <Link to="/create">
            <button>Create recipe</button>
          </Link>
        </div>
      </nav>

  );
};

export default Navbar;
*/


/*
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

    return (
          <nav className="navbar">
              <div className="links">
                  <Link to="/">
                  <h1>Cook Book</h1>
                  </Link>
              </div>
              <label><p>Search:</p></label>    
              <div>                       
                  <input
                      type="text"                   
                      value={searchTerm}
                      onChange={handleSearchInput}
                  />       
                  <Link to="/create">
                  <button>Create recipe</button>
                  </Link>
              </div>
          </nav>

    );
};

export default Navbar;
*/
/*
        <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            <renderDetails />
          </div>
        ))}
        </div>
*/

/*
import { Link } from "react-router-dom";


const container = document.querySelector('.recipes');

const renderRecipes = async (term) => {
    let uri = 'http://localhost:4000/recipes';

    const res = await fetch(uri);
    const recipes = await res.json();

    let template = '';
    recipes.forEach(recipe => {
        template += `
        <div class = "post">
            <h2>${recipe.title}</h2>
        </div>
        `
    });

    container.innerHTML = template;
}

window.addEventListener('DOMContentLoaded', () => renderRecipes());



const Navbar = () => {

  return (
    <nav className="navbar">
      
      <div className="links">
        <Link to="/"><h1>CookBook</h1></Link>
      </div>

    <div class="recipes"> 

    </div>

      <div>  
        <Link to="/create" ><p>Add new recipe</p></Link>
      </div>

    </nav>
    
  );
}
 
export default Navbar;
*/

    /*
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4001/recipes");
      const data = await res.json();
      setRecipes(data);
    };

    fetchData();
  }, []);
*/
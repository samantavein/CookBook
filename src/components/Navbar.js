import { Link } from "react-router-dom";
import React from "react";

const Navbar = ({ searchTerm, handleSearchInput }) => {
  return (
    <nav className="navbar">
      <div className="links">
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
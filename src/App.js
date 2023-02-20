import React, { useState } from "react";
import CreateRecipe from "./pages/CreateRecipe";
import RecipeList from "./pages/RecipeList";

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipeDetails from "./pages/RecipeDetails";

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
  <nav>
        <div>
          <Navbar 
          searchTerm={searchTerm} 
          handleSearchInput={handleSearchInput} />
        </div>
        <div >
          <Routes>
              <Route path ="/" element={ <RecipeList searchTerm={searchTerm} />} />                      
              <Route path ="/create" element={ <CreateRecipe /> } />             
              <Route path ="/recipes/:id"element={<RecipeDetails />} />            
          </Routes>
        </div>     
      </nav>
 
  );
}

export default App;

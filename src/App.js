import React, { useState } from "react";
import CreateRecipe from "./pages/CreateRecipe";
import RecipeList from "./pages/RecipeList";
import { RecipeProvider } from "./hooks/RecipeContext";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Router>
          <div className="App">
          <Navbar 
          searchTerm={searchTerm} 
          handleSearchInput={handleSearchInput} />
          </div>
          <div className="content">
              <Switch>
                <Route exact path ="/">
                  <RecipeProvider>
                  <RecipeList 
                  searchTerm={searchTerm} />
                  </RecipeProvider>
                </Route>            
              </Switch>
          </div>

          <div className="content">
              <Switch>
                <Route exact path ="/create">
                  <RecipeProvider>
                    <CreateRecipe />
                  </RecipeProvider>                 
                </Route>            
              </Switch>
          </div>

          <div className="content">
              <Switch>
                <Route path ="/recipes/:id">
                  <RecipeProvider>
                    <RecipeDetails />
                  </RecipeProvider>                 
                </Route>            
              </Switch>
          </div>
          
        </Router>
      </div>
    </nav>
  );
 
}

export default App;

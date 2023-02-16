import React, { useState } from "react";
import CreateRecipe from "./Pages/CreateRecipe";
import RecipeList from "./Pages/RecipeList";
import { RecipeProvider } from "./RecipeContext";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipeDetails from "./Pages/RecipeDetails";

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
          <Navbar searchTerm={searchTerm} handleSearchInput={handleSearchInput} />
          </div>
          <div className="content">
              <Switch>
                <Route exact path ="/">
                  <RecipeProvider>
                  <RecipeList searchTerm={searchTerm} />
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
                <Route exact path ="/recipes/">
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


import React from "react";
import AddRecipe from "./AddRecipe";
import RecipeList from "./RecipeList";
import { RecipeProvider } from "./RecipeContext";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import AppRecipe from "./AppRecipe";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {

  return (
    <nav>
      <div>
      <Router>
          <div className="App">
            <Navbar />
          </div>
          <div className="content">
              <Switch>
                <Route exact path ="/">
                  <RecipeList />
                </Route>            
              </Switch>
          </div>


          <div className="content">
              <Switch>
                <Route exact path ="/create">
                  <RecipeProvider>
                    <AddRecipe />
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

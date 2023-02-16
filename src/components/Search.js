import React, { useState } from "react";
import Navbar from "./Navbar";
import RecipeList from "./RecipeList";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Navbar searchTerm={searchTerm} handleSearchInput={handleSearchInput} />
      <RecipeList searchTerm={searchTerm} />
    </div>
  );
};

export default Search;

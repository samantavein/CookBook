import { createSlice } from '@reduxjs/toolkit';



const recipesSlice = createSlice({
  name: 'recipes',
  initialState: [],
  reducers: {
    setRecipes: (state, action) => {
      return action.payload;
    },
    addRecipe: (state, action) => {
      state.push(action.payload);
    },

  },
});

export const { setRecipes, addRecipe } = recipesSlice.actions;

export default recipesSlice.reducer;



/*
const recipeSlice = createSlice({
  name: 'recipes',
  initialState: [],
  reducers: {
    addRecipe: (state, action) => {
      state.push(action.payload);
    },
    removeRecipe: (state, action) => {
      const index = state.findIndex(recipe => recipe.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addRecipe, removeRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
*/


/*

const recipeReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [...state, action.payload];
    case 'SET_RECIPES':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  recipes: recipeReducer,
});

export default rootReducer;

*/



/*
const recipesSlice = createSlice({
  name: 'recipes',
  initialState: [],
  reducers: {
    fetchRecipesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchRecipesSuccess(state, action) {
      state.loading = false;
      state.items = action.payload;
    },
    fetchRecipesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { fetchRecipesStart, fetchRecipesSuccess, fetchRecipesFailure, setSearchTerm } =
  recipesSlice.actions;

export default recipesSlice.reducer;

*/
/*
export const recipeSlice = createSlice({
  name: 'recipe',
  initialState: [],
  reducers: {
    addRecipe: (state, action) => {
      state.push(action.payload);
    },
    setRecipes: (state, action) => {
      return action.payload;
    },
    setRecipeDetails: (state, action) => {
      state.recipeDetails = action.payload;
    },
  }
});

export const { addRecipe, setRecipes, setRecipeDetails } = recipeSlice.actions;

export default recipeSlice.reducer;
*/


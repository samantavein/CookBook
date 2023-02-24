import { createSlice } from '@reduxjs/toolkit';

const recipesSlice = createSlice({
  name: 'recipes',
  initialState:[],
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
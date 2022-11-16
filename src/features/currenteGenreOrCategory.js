import { createSlice } from '@reduxjs/toolkit';

export const genreOrCategory = createSlice({
  name: 'genreOrCagegory',
  initialState: {
    genreOrCategoryName: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      // state.genreOrCategoryName =
      console.log(action.payload);
    },
  },
});

export const { selectGenreOrCategory } = genreOrCategory;
export default genreOrCategory.reducer;

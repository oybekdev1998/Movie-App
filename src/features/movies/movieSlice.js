import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
}

export const movieSlice =  createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addMovies: (state, {payload}) => {
      state.movies = payload
      
    },
  }
})

export const { addMovies } = movieSlice.actions
export const  getAllMovies = (state) => state.movie.movies
export default  movieSlice.reducer
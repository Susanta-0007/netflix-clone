import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    playMovie:null,
    nowPlayingMovies: null,
    trailervideo: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomeingMovies: null,
  },
  reducers: {
    addPlayMovie:(state,action)=>{
      state.playMovie=action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailervideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomeingMovies: (state, action) => {
      state.upcomeingMovies = action.payload;
    },
  },
});

export const {
  addPlayMovie,
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomeingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;

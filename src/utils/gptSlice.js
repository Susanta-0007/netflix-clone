import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieResults:null,
        movieNames:null,
        shimmerSearch:false


    },
    reducers:{
        toggleGptsearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addGptMovieResult:(state,action)=>{
            const {movieNames,movieResults}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults
        },
        toggleShimmerSearch:(state,action)=>{
            state.shimmerSearch=!state.shimmerSearch;
        }
    }
})

export const {toggleGptsearchView,addGptMovieResult, toggleShimmerSearch} =gptSlice.actions;
export default gptSlice.reducer;
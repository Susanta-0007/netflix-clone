import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from "./MovieList"
import MovieCardShimmer from '../shimmer/MovieCardShimmer';

const GPTMovieSuggestion = () => {

  const gpt = useSelector((store) => store.gpt);
  const shimmerSearch =useSelector((store)=>store?.gpt?.toggleShimmerSearch);
  const { movieNames, movieResults } = gpt;
  
  if(shimmerSearch){
    return <MovieCardShimmer/>
  }

  if (!movieNames) {
   return null;
  }

 


  return (
    <div className='mt-10 bg-black'>
      {movieNames.map((movieName, index) => (
        <MovieList key={index} title={movieName} movies={  movieResults[index]} />
      ))}
    </div>
    
  
  )
}

export default GPTMovieSuggestion;
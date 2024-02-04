import React from 'react'
import MovieCard from './MovieCard'
import MovieCardShimmer from '../shimmer/MovieCardShimmer';

const MovieList = ({ title, movies }) => {
    // console.log(movies[0]?.poster_path);
    if(!movies){
        // return <MovieCardShimmer/>; 
    }
    return (
        <div className='pt-5 px-5 w-[100%] '>
            <p className='text-3xl font-bold text-white max-md:text-xl max-md:font-semibold '>{title}</p>
            <div className='mt-1 flex overflow-x-scroll transition-all scroll-smooth pb-5'>
                <div className='flex gap-3  '>
                    {movies?.map((movie) => (
                        <MovieCard
                            key={movie?.id}
                            // posterpath={movie?.poster_path} 
                            movie={movie}
                            />
                        
                    ))}

                </div>
            </div>
        </div>
    )
}

export default MovieList;
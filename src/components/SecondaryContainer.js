import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import MovieCardShimmer from "../shimmer/MovieCardShimmer";
import ShimmerCard from "../shimmer/ShimmerCard";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store?.movies);

   if(!movies){
    return <MovieCardShimmer/>
   }

    return (
        <div  className="bg-black w-[100%]">
            <div className="-mt-52 max-md:mt-10  relative z-20 px-2">
                <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
                <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
                <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
                <MovieList title={"Upcomeing Movies"} movies={movies?.upcomeingMovies} />
                
            </div>

        </div>
    );
};

export default SecondaryContainer;

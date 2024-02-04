import React, { useState } from "react";
import { IMG_CDN } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPlayMovie } from "../utils/moviesSlice";
import ShimmerCard from "../shimmer/ShimmerCard";
import Play from "./Play";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MovieCard = ({ movie }) => {
 
  const dispatch = useDispatch();

  const handlePlay = () => {
    dispatch(addPlayMovie(movie));
    
    
    window.scrollTo(0, 0);

    
  };
  const { poster_path } = movie;

  return (
    <div>
      <div className="  w-48  max-md:w-32 pb-2 py-5 ">
        <img
          onClick={() => handlePlay()}
          className="hover:scale-110 rounded-md transition-all cursor-pointer h-80 max-md:h-52"
          src={IMG_CDN + poster_path}
          alt="poster"
        />
      </div>
     
    </div>
  );
};

export default MovieCard;

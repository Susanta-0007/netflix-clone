import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { IMG_CDN } from "../utils/constants";
import { MdDateRange } from "react-icons/md";


const Play = () => {
  const playMovie = useSelector((store) => store?.movies?.playMovie);

  console.log(playMovie);

  useMovieTrailer(playMovie?.id);

  const trailerVideo = useSelector((store) => store?.movies?.trailervideo);

  return (
    <div className="h-[100vh]  w-[100%] bg-black max-md:h-auto max-md:pb-10">
      <Header />
      <div className="flex max-md:flex-col ">
        <div className="w-[70%] h-full max-md:w-[100%] max-md:pt-10">
          <iframe
            className="w-[100%] aspect-video   "
            src={
              "https://www.youtube.com/embed/" +
              trailerVideo?.key +
              "?autoplay=1"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <div className="text-white px-10 pt-5">
            <p className="text-xl font-bold">{playMovie?.original_title}</p>
          </div>
        </div>
        <div className="w-[30%] text-white  max-md:w-[100%]">
          <img
            className="w-[90%] m-auto h-[40vh] max-md:h-[200px] mt-10 rounded-lg shadow-[inset_-12px_-8px_40px_#46464620]"
            src={IMG_CDN + playMovie?.poster_path}
          />
          <p className="font-semibold px-5 pt-2">{playMovie?.overview}</p>
          <div className="flex flex-col gap-2 pt-5 justify-center items-center  ">
            <p className="p-2 border-2  border-solid w-[80%] border-white rounded-tr-2xl rounded-bl-2xl  flex items-center gap-2 cursor-pointer">
            <span><MdDateRange /></span>
             <span>Realse Date </span> 
              <span>{playMovie?.release_date}</span>
            </p>
            <p className="p-2 border-2 border-solid border-white rounded-tr-2xl rounded-bl-2xl w-[80%] flex items-center gap-2 cursor-pointer">
              <span><MdDateRange /></span>
              <span>vote_average </span> 
              <span>  {playMovie?.vote_average}</span>
            
            </p>
            <p className="p-2 border-2 border-solid border-white rounded-tr-2xl rounded-bl-2xl w-[80%] flex items-center gap-2 cursor-pointer">
            <span><MdDateRange /></span>
            <span>vote_count </span> 
            <span> {playMovie?.vote_count}</span>
            </p>
            <p className="p-2 border-2 border-solid border-white rounded-tr-2xl rounded-bl-2xl w-[80%] flex items-center gap-2 cursor-pointer">
            <span><MdDateRange /></span>
            <span>popularity </span> 
              <span>{playMovie?.popularity}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;

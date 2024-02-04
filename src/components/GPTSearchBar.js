import React, { useRef, useState } from "react";
import lang from "../utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult, toggleShimmerSearch } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const [error,setError]=useState(null);
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  

  const searchMovieTMDB = async (movie) => {
    try {
      const responce = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1&api_key=c09e3975954aa7fea96a5519e058435b",
        API_OPTIONS
      );
      const data = await responce.json();

      return data.results;
    } catch (error) {
      setError(error);
    }
  };

  const handleGPTSearch = async () => {
    // console.log(searchText.current.value);

    dispatch(toggleShimmerSearch(true));


    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (gptResults.choices) {
          <div className="text-red-600">{error}</div>
    }

    // console.log(gptResults.choices );
    const gptMovies = gptResults.choices[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(addGptMovieResult({
        movieNames:gptMovies,
        movieResults:tmdbResults
    }));


    
    dispatch(toggleShimmerSearch(false));
  };

  return (
    <div className="pt-32 bg-black w-[100%]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="  m-auto flex gap-4 justify-center max-md:gap-2 "
      >
        <input
          ref={searchText}
          className="w-[50%] max-md:w-[70%] text-xl p-2  bg-gray-500 text-white rounded-sm outline-none active:border-white border-[2px] border-solid"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={() => handleGPTSearch()}
          className="px-4 py-2 bg-red-600 text-white rounded-sm"
        >
          {lang[langKey].search}
        </button>
      </form>
      
    </div>
  );
};

export default GPTSearchBar;

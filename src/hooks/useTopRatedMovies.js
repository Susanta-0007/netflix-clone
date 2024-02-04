import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {   addTopRatedMovies} from "../utils/moviesSlice";
import  { useEffect } from "react";


const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies=useSelector((store)=>store.movies.topRatedMovies);

    const getNowPlayingMovies = async () => {
        const responce = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?page=1&api_key=c09e3975954aa7fea96a5519e058435b",
            API_OPTIONS
        );
        const data = await responce.json();
        dispatch(  addTopRatedMovies(data.results));
        // console.log(data.results);

    };
    useEffect(() => {
       !topRatedMovies && getNowPlayingMovies();
    }, [])
}

export default useTopRatedMovies;
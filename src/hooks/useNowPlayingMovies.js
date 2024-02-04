import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import  { useEffect } from "react";


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies=useSelector((store)=>store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async () => {
        const responce = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=c09e3975954aa7fea96a5519e058435b",
            API_OPTIONS
        );
        const data = await responce.json();
        dispatch(addNowPlayingMovies(data.results));
        // console.log(data.results);

    };
    useEffect(() => {
       !nowPlayingMovies && getNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;
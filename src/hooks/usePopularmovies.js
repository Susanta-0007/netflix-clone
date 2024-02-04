import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import  { useEffect } from "react";


const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies=useSelector((store)=>store.movies.popularMovies);

    const getPopularMovies = async () => {
        const responce = await fetch(
            "https://api.themoviedb.org/3/movie/popular?page=1&api_key=c09e3975954aa7fea96a5519e058435b",
            API_OPTIONS
        );
        const data = await responce.json();
        dispatch(addPopularMovies(data.results));
        // console.log(data.results);

    };
    useEffect(() => {
        !popularMovies && getPopularMovies();
    }, [])
}

export default usePopularMovies;
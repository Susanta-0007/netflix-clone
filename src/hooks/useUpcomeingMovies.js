import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomeingMovies } from "../utils/moviesSlice";
import  { useEffect } from "react";


const useUpcomeingMovies = () => {
    const dispatch = useDispatch();
    const upcomeingMovies=useSelector((store)=>store.movies.upcomeingMovies);

    const getNowPlayingMovies = async () => {
        const responce = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?page=1&api_key=c09e3975954aa7fea96a5519e058435b",
            API_OPTIONS
        );
        const data = await responce.json();
        dispatch(addUpcomeingMovies(data.results));
        // console.log(data.results);

    };
    useEffect(() => {
        !upcomeingMovies && getNowPlayingMovies();
    }, [])
}

export default useUpcomeingMovies;
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer=(movieId)=>{
    const dispatch = useDispatch();
    const trailervideo=useSelector((store)=>store.movies.trailervideo);

    const getMovieVideos = async () => {
      const responce = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=c09e3975954aa7fea96a5519e058435b`,
        API_OPTIONS
      );
      const data = await responce.json();
  
      const filterTrailerData = data.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterTrailerData.length
        ? filterTrailerData[0]
        : data.results[0];
      dispatch(addTrailerVideo(trailer));
      // console.log(trailer);
    };
    useEffect(() => {
     getMovieVideos();
    }, []);
  
}

export default useMovieTrailer;
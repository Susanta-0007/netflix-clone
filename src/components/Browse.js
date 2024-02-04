import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularmovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomeingMovies from "../hooks/useUpcomeingMovies";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomeingMovies();
  
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);
  const playMovie = useSelector((store) => store?.movies?.playMovie);
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (movies == null) {
    return null;
  }
  const mainMovie = movies[11];



  return (
    <div className="w-[100%] m-0 p-0" >
      <Header />

      {showGptSearch ? (
        <GPTSearch />
      ) : (

        <>
          {playMovie ? <MainContainer movie={playMovie} /> : <MainContainer movie={mainMovie} />}
          <SecondaryContainer />
        </>

      )}
    </div>
  );
};

export default Browse;

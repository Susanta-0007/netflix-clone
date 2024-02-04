import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  // console.log(movieId);
  const trailerVideo = useSelector((store) => store?.movies?.trailervideo);
  

  return (
    <div className="w-[100%]  ">
      <iframe
        className="w-[100%] aspect-video  "
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&loop=1&controls=1&showinfo=0&mute=1&modestbranding=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

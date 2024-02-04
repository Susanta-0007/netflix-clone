import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import ShimmerCard from "../shimmer/ShimmerCard";
import VideoShimmer from "../shimmer/VideoShimmer";

const MainContainer = ({ movie }) => {
  

if(!movie){
  return <VideoShimmer />;
}

  const { original_title, overview, id } = movie;
//   console.log(id);

  return !movie ? (
    <VideoShimmer />
  ) : (
    <div className="w-[100%]">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;

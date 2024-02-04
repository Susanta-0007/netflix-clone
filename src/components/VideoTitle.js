import React from "react";
import { FaPlay } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";

const VideoTitle = ({ title, overview }) => {

    
    return (
        <div className="w-[100%] aspect-video pt-[20%] max-md:pt-40 max-md:pb-10  px-6 md:px-20 absolute text-white bg-gradient-to-r from-black ">
            <p className="text-4xl font-bold max-md:text-xl max-md:font-semibold">{title}</p>
            <p className="hidden md:inline-block text-xl font-semibold w-[50%] pt-5">{overview}</p>
            <div className="flex gap-5 pt-6">
                <button 
                className="flex justify-center items-center gap-2 px-8 py-2 bg-white rounded-sm text-black text-xl font-bold max-md:text-sm max-md:px-2 max-md:py-1">
                    <p><FaPlay /></p>
                    <p>Play</p>
                </button>
                <button
                 className="flex justify-center items-center gap-2 px-4 py-2 bg-gray-600 bg-opacity-80 rounded-sm text-xl font-semibold max-md:text-sm max-md:px-2 max-md:py-1   ">
                    <p> <MdOutlineInfo /></p>
                    <p> More Info</p>
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;

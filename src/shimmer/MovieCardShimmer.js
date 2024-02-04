import React from "react";

const MovieCardShimmer = () => {
    return (

        <div
            data-testid="shimmer"
            className="flex flex-wrap gap-2 justify-center mt-10 w-[100%] my-0 mx-auto overflow-x-scroll"
        >
            {Array(7)
                .fill("")
                .map((item, index) => (
                    <div
                        key={index}
                        className="animate-pulse  w-48  max-md:w-32  shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-[5px] cursor-pointer"
                    >
                        <div className="w-full  h-80 max-md:h-52 rounded-md bg-[#FFFFFF]"></div>

                    </div>
                ))}
        </div>

    );
};

export default MovieCardShimmer;

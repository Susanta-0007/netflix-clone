import React from 'react'

const VideoShimmer = () => {
    return (
        <div>
            <div
                className="animate-pulse  w-[100%] shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-[5px] cursor-pointer"
            >
                <div className="w-full h-[100vh] rounded-md bg-[#323131]"></div>

            </div>
        </div>
    )
}

export default VideoShimmer
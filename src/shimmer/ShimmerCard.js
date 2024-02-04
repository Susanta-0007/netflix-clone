import React from 'react'

const ShimmerCard = () => {
    return (
        <div
           
            className="animate-pulse  w-48  max-md:w-32  m-4 shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-[5px] cursor-pointer"
        >
            <div className="w-full  h-80 max-md:h-52 rounded-md bg-[#e7bbbb]"></div>

        </div>
    )
}

export default ShimmerCard;
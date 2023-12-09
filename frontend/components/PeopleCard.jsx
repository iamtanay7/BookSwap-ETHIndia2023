import Link from "next/link";
import React, { useState } from "react";

const PeopleCard = ({ data }) => {
  // const randomRating = Math.random() * (5 - 4) + 4

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {/* IMAGE section goes here link tag to route start */}
      <Link href={`/user/4`}>
        <img
          alt="people info image"
          className="w-[131px] h-[127px] bg-zinc-300 rounded-full mb-1"
          src={"https://i1.rgstatic.net/ii/profile.image/1146353572937729-1650323398743_Q512/Emily-Smith-258.jpg"}
        />
      </Link>
      <div className="w-[40px] absolute bottom-16 right-12 h-[40px] bg-[#EEC32A] rounded-full justify-center items-center">
        <div className=" flex justify-center items-center ">
          <div className="text-[#FFF1F1] text-[15px] font-medium mt-2 ">
            {/* {randomRating.toFixed(1)} */}
            {/* {data?.user_rating} */}
          </div>
        </div>
      </div>
      {/* IMAGE section goes here end */}
      <div class="text-black  md:text-[20px] font-medium">Neha</div>
      <div class="w-[131px] h-[22px] text-center text-black text-[16px] font-normal">
        45 miles away
      </div>
    </div>
  );
};

export default PeopleCard;

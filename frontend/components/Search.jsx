import React, { useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
function Search() {
  const [data, setData] = useState([]);
  const [searchTxt, setSearchText] = useState("");

  const [clicked, setClicked] = useState(false);
  const inputRef = useRef(null);

  return (
    <form
      ref={inputRef}
      className="flex  items-center w-full pt-8 md:pt-0   md:w-1/2 "
    >
      <div className="relative w-full  flex-row  flex bg-zinc-100 rounded-lg shadow-sm">
        <input
          //   onClick={handleClick}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Books "
          className="w-full text-zinc-400 pl-8 text-[14px] font-semibold h-[50px] rounded-bl-lg bg-zinc-100 focus:bg-[#FFFFFF] rounded-tl-lg   outline-none"
        ></input>
        <div
          //   onClick={searchButton}
          className=" flex pl-4 pr-4 items-center cursor-pointer "
        >
          <AiOutlineSearch
            color="gray"
            className="text-[19px] text-center rounded-full md:text-[26px] "
          />
        </div>
        {/* drop down live search section */}
        <div
          //   onMouseLeave={mouseLeave}
          className={`${
            clicked ? "block" : "hidden"
          }  w-full -z-10 absolute top-8   bg-[#FFFFFF] rounded-[7px]`}
        >
          <section className="pt-8 px-8 pb-4  justify-center items-start  flex flex-col"></section>
        </div>
      </div>
    </form>
  );
}

export default Search;

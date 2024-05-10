import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_API } from "../utils/Constants";

const Head = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => getSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const getSuggestions = async () => {
    if (search) {
      const data = await fetch(SEARCH_API + search);
      const json = await data.json();
      setSuggestions(json[1]);
      console.log(json[1]);
    }
  };

  return (
    <div className="grid grid-flow-col px-2 shadow-sm place-items-center">
      <div className="flex items-center px-2">
        <span
          className="text-3xl cursor-pointer"
          onClick={handleToggleMenu}
        >
          <i class="fa-solid fa-bars"></i>
        </span>

        <img
          className="h-16 px-4"
          src={
            "https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A"
          }
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-10">
        <input
          className="w-96 border border-gray-500 py-2 px-3 rounded-l-full outline-none"
          type="text"
          name="search-box"
          onChange={handleSearch}
        />
        <button className=" border border-gray-500 px-5 py-2 rounded-r-full bg-slate-300">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="col-span-1">
        <span className="text-3xl">
          <i class="fa-solid fa-circle-user"></i>
        </span>
      </div>
    </div>
  );
};

export default Head;

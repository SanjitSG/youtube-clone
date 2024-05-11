import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_API } from "../utils/Constants";
import { cacheResults } from "../utils/cacheSlice";

const Head = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cache = useSelector((store) => store.cache);
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[search]) {
        console.log(cache);
        setSuggestions(cache[search]);
      } else {
        getSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const getSuggestions = async () => {
    const data = await fetch(SEARCH_API + search);
    const json = await data.json();
    setSuggestions(json[1]);

    // update cache
    dispatch(
      cacheResults({
        [search]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col px-2 shadow-sm place-items-center sticky top-0 bg-white">
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
          className="w-[28rem] border border-gray-500 py-2 px-3 rounded-l-full outline-none"
          type="text"
          name="search-box"
          onChange={handleSearch}
          onClick={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          autoComplete="off"
        />
        <button
          className=" border border-gray-500 px-5 py-2 rounded-r-full bg-slate-300"
          onClick={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        {showSuggestions && (
          <div className="fixed bg-white w-3/12 border m-3 p-3 rounded-lg shadow-lg">
            <ul>
              {suggestions.map((i) => (
                <li
                  key={i}
                  className="px-2 py-1 flex justify-start gap-9 items-center hover:bg-slate-200 rounded-lg cursor-pointer"
                >
                  <i class="fas fa-search"></i> {i}
                </li>
              ))}
            </ul>
          </div>
        )}
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

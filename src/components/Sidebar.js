import React from "react";
import { CgMediaLive } from "react-icons/cg";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdMusicalNote } from "react-icons/io";
import { LiaGripfire } from "react-icons/lia";
import { MdHomeFilled, MdSubscriptions } from "react-icons/md";
import { PiFilmSlateFill } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuToggle = useSelector((store) => store.app.isMenuOpen);
  //Early return
  if (!menuToggle) return null;

  return (
    <div className="w-52 py-2 px-2 h-screen shadow-lg">
      <ul>
        <Link to="/">
          <li className="flex items-center justify-start gap-3 px-3 py-2 text-lg rounded-lg  cursor-pointer hover:bg-slate-200 ">
            <MdHomeFilled /> Home
          </li>
        </Link>
        <li className="flex items-center justify-start gap-3 px-3 py-2 text-lg rounded-lg cursor-pointer hover:bg-slate-200">
          <MdSubscriptions /> Subscriptions
        </li>
      </ul>
      <hr />
      <h1 className="font-bold py-3">Explore</h1>
      <ul>
        <li className="flex items-center justify-start gap-3 px-3 py-2 text-lg rounded-lg cursor-pointer hover:bg-slate-200">
          <LiaGripfire /> Trending
        </li>
        <li className="flex items-center justify-start gap-3 px-3 py-2 text-lg rounded-lg cursor-pointer hover:bg-slate-200">
          <FaShoppingBag /> Shopping
        </li>
        <li className="flex items-center justify-start gap-3 px-3 py-2 text-lg rounded-lg cursor-pointer hover:bg-slate-200">
          <IoMdMusicalNote /> Music
        </li>
        <li className="flex items-center justify-start gap-3 px-3 py-2 text-lg rounded-lg cursor-pointer hover:bg-slate-200">
          <PiFilmSlateFill /> Films
        </li>
        <li className="flex items-center justify-start gap-3 px-3 py-2 text-lg rounded-lg cursor-pointer hover:bg-slate-200">
          <CgMediaLive /> Live
        </li>
        <li className="flex items-center justify-start gap-3 px-3 py-2 text-lg rounded-lg cursor-pointer hover:bg-slate-200">
          <SiYoutubegaming /> Gaming
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

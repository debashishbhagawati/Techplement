import React from "react";
import PostContainer from "./PostContainer";
import { NavLink, Outlet } from "react-router-dom";

const Feed = () => {
  return (
    <div className="border border-gray-400 rounded-lg w-[40%] text-center">
      {/* <div className="flex text-center mb-3">
        <NavLink
          to="/favorite"
          className={({ isActive }) =>
            isActive
              ? " w-[50%] h-[50px] flex justify-center rounded-tl-md items-center font-semibold text-lg"
              : " bg-slate-200 w-[50%] h-[50px] flex justify-center rounded-tl-md items-center font-semibold text-lg"
          }
        >
          For You
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " w-[50%] h-[50px] flex justify-center rounded-tr-md items-center font-semibold text-lg"
              : " bg-slate-200 w-[50%] h-[50px] flex justify-center rounded-tr-md items-center font-semibold text-lg"
          }
        >
          Explore
        </NavLink>
      </div> */}

      <div className="post h-[95vh] overflow-y-scroll">
        <h1 className="text-2xl font-bold flex items-center justify-center mt-4 mb-2">
          Explore Greate Quotes by Greate People
        </h1>
        <Outlet/>
      </div>
    </div>
  );
};

export default Feed;

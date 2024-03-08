import NavBar from "@/components/ui/customs/NavBar";
import TopNavBar from "@/components/ui/customs/TopNavBar";
import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-auto">
      <div className="top-0 sticky z-50">
        <TopNavBar />
      </div>
      <div className="flex w-[100%] h-screen">
        <div className="h-screen">
          <NavBar />
        </div>
        <div className="w-full mx-auto px-3 my-20 overflow-x-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* <div className="flex flex-row w-full">
      <div className="flex">
        <div>
          <NavBar />
        </div>
        <div className="mb-2 ml-2">
          <TopNavBar />
        </div>
      </div>
      <div className="mt-20 ml-2">
        <Outlet />
      </div>
    </div> */
}

import NavBar from "@/components/ui/customs/NavBar";
import TopNavBar from "@/components/ui/customs/TopNavBar";
import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-auto">
      <div className="w-auto">
        <TopNavBar />

        <div className="flex gap-5">
          <div className="h-screen">
            <NavBar />
          </div>
          <div className="mt-5 mx-auto w-full">
            <Outlet />
          </div>
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

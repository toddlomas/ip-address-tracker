import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

function Tracker() {
  return (
    <>
      <div className="relative">
        <div className="bg-hero-pattern h-96 w-screen bg-cover absolute">
          <h1 className="capitalize text-4xl font-bold text-white text-center mt-10">
            IP address tracker
          </h1>
          <div className="mt-10 flex items-center justify-center ">
            <form className="flex flex-row h-10 w-[20%] rounded-2xl focus-within:outline-1 z-10 cursor-pointer">
              <input
                type="text"
                name="ipSearch"
                id="ipSearch"
                placeholder="Search for any IP address or domain"
                className="h-10 w-[20%] bg-white border-none rounded-s-2xl rounded-e-none p-5 flex-grow focus:outline-none cursor-pointer"
              />
              <button className="h-10 bg-black rounded-e-2xl cursor-pointer">
                <ChevronRightIcon className="h-5 w-10 text-white" />
              </button>
            </form>
          </div>

          <div className="flex justify-center items-center">
            <div className="mt-40 h-32 w-[50%] bg-white columns-4  rounded-xl">
              <div className="p-5">
                <h3 className="text-sm text-left font-bold text-gray-400 uppercase tracking-wide">
                  ip address
                </h3>
                <div className="flex row">
                  <h2 className="pt-5 pl-2">192.212.174.101</h2>
                  <div className="ml-10 h-16 border"></div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-sm text-left font-bold text-gray-400 uppercase tracking-wide">
                  location
                </h3>
                <div className="flex row">
                  <h2 className="pt-5 pl-2">Brooklyn, NY 10001</h2>
                  <div className="ml-10 h-16 border"></div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-sm text-left font-bold text-gray-400 uppercase tracking-wide">
                  timezone
                </h3>
                <div className="flex row">
                  <h2 className="pt-5 pl-2">UTC -05:00</h2>
                  <div className="ml-10 h-16 border"></div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-sm text-left font-bold text-gray-400 uppercase tracking-wide">
                  isp
                </h3>
                <div className="flex row">
                  <h2 className="pt-5 pl-2">SpaceX Starlink</h2>
                  <div className="ml-10 h-16 border"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-transparent via-white to-white  opacity-20 h-96 w-screen bg-cover absolute"></div>
      </div>
      <div className="bg-green-100 h-screen"></div>
    </>
  );
}

export default Tracker;

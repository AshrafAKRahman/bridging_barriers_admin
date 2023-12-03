import Navbar from "../../components/navbar/navbar";
import React from "react";

const LoggedIn = () => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-4/5 h-1/3 mt-32 flex justify-center items-center bg-gray-400">
          <h1 className="text-2xl">Latest Blogs</h1>
        </div>
        <div className="w-4/5 h-1/3 mt-16 flex justify-center items-center bg-gray-400">
          <h1 className="text-2xl">Latest Events</h1>
        </div>
        <div className="w-4/5 h-1/3 mt-16 mb-10 flex justify-center items-center bg-gray-400">
          <h1 className="text-2xl">Latest Jobs</h1>
        </div>
      </div>
    </div>
  );
};

export default LoggedIn;

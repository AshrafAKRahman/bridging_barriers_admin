"use client";
import { UserAuth } from "../../context/AuthContext";
import React from "react";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
      console.log("Logged out successfully");
      window.location.href = "/";
    } catch (error) {
      console.log("error");
    }
  };
  const navLinks = [
    {
      title: "HOME",
      link: "/",
    },
    {
      title: "BLOGS",
      link: "/pages/blogs",
    },
    {
      title: "EVENTS",
      link: "/pages/events",
    },
    {
      title: "JOB BOARD",
      link: "/pages/careers",
    },
  ];
  return (
    <div>
      {user ? (
        <div className="fixed w-screen h-20 flex items-center justify-between border-b-2 border-solid border-blue-500 bg-white">
          <div className="w-48 h-fit ml-10">
            <img src="/logo.png" alt="Logo" className="" />
          </div>
          <div className="flex items-center justify-center mr-10">
            <div className="ml-10 flex items justify-between">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  className="nav-link text-blue-500 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  href={link.link}
                >
                  {link.title}
                </a>
              ))}
              <button
                onClick={handleSignOut}
                type="submit"
                className="bg-blue-500 w-32 "
              >
                LOGOUT
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Please Log In to access the admin portal</h1>
        </div>
      )}
    </div>
  );
};

export default Navbar;

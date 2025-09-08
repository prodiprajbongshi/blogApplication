import React from "react";
import { assets } from "../../assets/assets";
import {  Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../component/admin/Sidebar";

const Layout = () => {
  const navigator = useNavigate();
  const logout = () => {
    navigator("/");
  };
  return (
    <div className="max-w-[2240px] mx-auto">
      <div className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200">
        <img
          className="w-32 sm:w-40 cursor-pointer"
          onClick={() => navigator("/")}
          src={assets.logo}
          alt="Brand Icon"
        />
        <button
          className="text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer hover:bg-primary/80 transition-all duration-300"
          onClick={() => logout()}
          type="button"
        >
          Logout
        </button>
      </div>
      <div className="flex h-screen ">
        <div className="flex ">
          <Sidebar />
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Layout;

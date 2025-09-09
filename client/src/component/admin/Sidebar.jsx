import React from "react";
import { NavLink } from "react-router-dom";
import { LuPanelTopClose } from "react-icons/lu";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdArticle } from "react-icons/md";

import { FaComments } from "react-icons/fa";
 

const Sidebar = () => {
  return (
    <div className="border-r border-gray-200 min-h-full">
      <NavLink end={true} to='/admin' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary"}`}> 
          <LuPanelTopClose size={24} />
        <h1 className="hidden md:inline-block">Dashbord</h1>
      </NavLink>
      <NavLink  to='/admin/addblog' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary"}`}> 
          <IoAddCircleOutline size={24} />
        <h1 className="hidden md:inline-block">Add Blog</h1>
      </NavLink>
      <NavLink  to='/admin/allBlog' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary"}`}> 
          <MdArticle size={24} />
        <h1 className="hidden md:inline-block">Blog lists</h1>
      </NavLink>
      <NavLink  to='/admin/comments' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary"}`}> 
          <FaComments size={24} />
        <h1 className="hidden md:inline-block">Comments</h1>
      </NavLink>
    </div>
  );
};

export default Sidebar;

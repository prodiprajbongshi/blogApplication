import React, { useState } from "react";
import {blog_data,  blogCategories } from "../assets/assets.js";
import BlogCard from "./BlogCard.jsx";
 

const BlogList = () => {
  const [Menu, setMenu] = useState("All");

 

  return (
    <div className="container my-8">
      {/* blog blogCategorie  */}
      <div className="flex items-center justify-center gap-4 relative mb-8">
        {blogCategories.map((item) => (
          <div key={item} className="relative">
            <button
              onClick={() => setMenu(item)}
              className={`cursor-pointer text-gray-500 ${
                Menu == item && `text-white px-4 pt-0.5`
              }`}
            >
              {item}
              {Menu === item && (
                <div
                  className="absolute left-0 right-0 top-0 h-7 -z-1
                bg-primary rounded-full"
                ></div>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* blog cards  */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 I
gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40"
      >
        {
          blog_data.filter((blog) => (Menu === "All" ? true : blog.category === Menu))
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      </div>
    </div>
  );
};

export default BlogList;


 
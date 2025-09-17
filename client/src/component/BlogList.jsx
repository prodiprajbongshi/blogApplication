import React, { useState } from "react";
import { blogCategories } from "../assets/assets.js";
import BlogCard from "./BlogCard.jsx";
import { useAppContext } from "../context/AppContext.jsx";

const BlogList = () => {
  const [Menu, setMenu] = useState("All");
  const { blogs = [], input = "" } = useAppContext(); // safe defaults

  // Filter by input text
  const filterBlog = () => {
    if (input.trim() === "") {
      return blogs;
    }
    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(input.toLowerCase()) ||
        blog.category.toLowerCase().includes(input.toLowerCase())
    );
  };

  // Apply category filter  
  const filteredBlogs = filterBlog().filter((blog) =>
    Menu === "All"
      ? true
      : blog.category.toLowerCase() === Menu.toLowerCase()
  );

  return (
    <div className="container my-8">
      {/* Blog categories */}
      <div className="flex items-center justify-center gap-4 relative mb-8">
        {blogCategories.map((item) => (
          <div key={item} className="relative">
            <button
              onClick={() => setMenu(item)}
              className={`cursor-pointer text-gray-500 ${
                Menu === item && `text-white px-4 pt-0.5`
              }`}
            >
              {item}
              {Menu === item && (
                <div className="absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full"></div>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Blog cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;

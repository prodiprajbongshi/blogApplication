import React, { useEffect, useState } from "react";
import BlogTableItem from "../../component/admin/BlogTableItem";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const AllBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const { axios } = useAppContext();
  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("api/admin/blogs");
      if (data.success) {
        setBlogs(data.blogs);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message); 
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
  <div className="relative overflow-x-auto  rounded-lg   mt-4 md:mt-6 ">
    <h1 className="text-xl opacity-60 ms-6">All blogs</h1>
  <table className="min-w-[600px] text-sm text-gray-500 mx-6 shadow mt-4 md:mt-6">
    <thead className="text-xs text-gray-600 text-left uppercase">
      <tr>
        <th scope="col" className="py-4 px-6">#</th>
        <th scope="col" className="px-2 py-4">Blog Title</th>
        <th scope="col" className="px-2 py-4">Date</th>
        <th scope="col" className="px-2 py-4">Status</th>
        <th scope="col" className="px-2 py-4">Actions</th>
      </tr>
    </thead>
    <tbody>
      {blogs.map((blog, index) => (
        <BlogTableItem
          key={blog._id}
          blog={blog}
          fetchBlogs={fetchBlogs}
          index={index + 1}
        />
      ))}
    </tbody>
  </table>
</div>

  );
};

export default AllBlog;

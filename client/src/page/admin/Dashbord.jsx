import React, { useEffect, useState } from "react";
import { assets, blog_data } from "../../assets/assets";
import BlogTableItem from "../../component/admin/BlogTableItem";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
 

const Dashbord = () => {
  const [dashbordeData, setdashbordeData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });


  const {axios} = useAppContext()

  const fetchDashbordData = async () => {
    try {
        const {data} = await axios.get("/api/admin/dashbord")
        data.success ? setdashbordeData(data.dashboardData) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  };

  useEffect(() => {
    fetchDashbordData(blog_data);
  }, []);

  // console.log(blog_data);
  return (
    <div className="flex-1  p-4 md:p-10  bg-blue-50/70">
      <div className="flex flex-wrap gap-4">
        {/* blogs  */}
        <div
          className="flex items-center gap-4 bg-white p-4 min-w-58 rounded
        shadow cursor-pointer hover:scale-105 transition-all "
        >
          <img src={assets.dashboard_icon_1} alt="icon" />
          <div className="">
            <p className="text-xl font-semibold text-gray-600">
              {dashbordeData.blogs}
            </p>
            <p className="text-gray-400 font-light">Blogs</p>
          </div>
        </div>
        {/* comments  */}
        <div
          className="flex items-center gap-4 bg-white p-4 min-w-58 rounded
        shadow cursor-pointer hover:scale-105 transition-all "
        >
          <img src={assets.dashboard_icon_2} alt="icon" />
          <div className="">
            <p className="text-xl font-semibold text-gray-600">
              {dashbordeData.comments}
            </p>
            <p className="text-gray-400 font-light">Comments</p>
          </div>
        </div>
        {/* Drafts  */}
        <div
          className="flex items-center gap-4 bg-white p-4 min-w-58 rounded
        shadow cursor-pointer hover:scale-105 transition-all "
        >
          <img src={assets.dashboard_icon_3} alt="icon" />
          <div className="">
            <p className="text-xl font-semibold text-gray-600">
              {dashbordeData.drafts}
            </p>
            <p className="text-gray-400 font-light">Drafts</p>
          </div>
        </div>
      </div>
      {/* recent blogs  */}
      <div className="">
        <div className="flex items-center gap-3 m-4 mt-6 text-gray-600">
          <img src={assets.dashboard_icon_4} alt="" />
          <p>Latest Blogs</p>
        </div>
        <div
          className="relative max-w-4xl overflow-x-auto shadow rounded-lg 
            scrollbar-hide bg-white"
        >
          <table className="w-full text-sm text-gray-500">
            <thead className="text-xs text-gray-600 text-left uppercase">
              <tr>
                <th scope="col" className=" py-4  px-6">
                  #
                </th>
                <th scope="col" className="px-2 py-4 ">
                  Blog Title
                </th>
                <th scope="col" className="px-2 py-4 ">
                  Date
                </th>
                <th scope="col" className="px-2 py-4 ">
                  Status
                </th>
                <th scope="col" className="px-2 py-4 ">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {dashbordeData.recentBlogs.map((blog, index) => {
                return (
                  <BlogTableItem
                    key={blog._id}
                    blog={blog}
                    fetchBlogs={fetchDashbordData}
                    index={index + 1}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;

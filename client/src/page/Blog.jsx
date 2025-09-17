import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, } from "../assets/assets";
import moment from "moment";
import heroBg from "../assets/gradientBackground.png";
import Loader from "../component/Loader";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Blog = () => {
  const { id } = useParams();

  const [data, setdata] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const { blogs, axios } = useAppContext();

  const fetchBlogData = async () => {
    const data = blogs.find((item) => item._id === id);
    setdata(data);
  };

  const fetchCommentsData = async () => {
    try {
      const { data } = await axios.post("/api/blog/getcomment", { blogId: id });
      if (data.success) {
        setComments(data.comments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addComment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/blog/addcomment", {
        blog: id,
        name,
        content,
      });
      if (data.success) {
        toast.success(data.message);
        setName("");
        setContent("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogData();
    fetchCommentsData();
  }, []);

  return data ? (
    <div className="container py-12 relative">
      <div className="text-center">
        <p className="text-primary py-4 font-medium">
          Published on {moment(data.createdAt).format("MMM Do YYYY")}
        </p>
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800">
          {data.title}
        </h1>
        <h2 className="my-5 max-w-lg truncate mx-auto">{data.subTitle}</h2>
        <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary">
          Michael Brown
        </p>
      </div>
      {/* bg image  */}
      <div className="absolute -top-50 -z-1 opacity-50">
        <img src={heroBg} alt="Bg Image" />
      </div>
      {/* blog image  */}
      <div className="mx-5 max-w-5xl md:mx-auto md:h-[500px]  my-10 mt-6">
        <img
          className="rounded-3xl mb-5 w-full h-full overflow-hidden object-contain"
          src={data.image}
          alt=""
        />
      </div>
      {/* blog details  */}
      <div
        dangerouslySetInnerHTML={{ __html: data.description }}
        className="rich-text rich-text max-w-3xl mx-auto"
      ></div>
      {/* comments data  */}
      <div className="mt-14 mb-10 max-w-3xl mx-auto">
        <p className="font-semibold mb-4">Comments ({comments.length})</p>
        <div className="flex flex-col gap-4">
          {comments.map((item, index) => (
            <div
              key={index}
              className="relative bg-primary/2 border
border-primary/5 max-w-xl p-4 rounded text-gray-600"
            >
              <div className="flex items-center gap-2 mb-2">
                <img src={assets.user_icon} alt="" className="w-6" />
                <p className="font-medium">{item.name}</p>
              </div>
              <p className="text-sm max-w-md ml-8">{item.content}</p>
              <div className="text-right">
                {moment(item.createdAt).fromNow()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* comment form  */}
      <div className="max-w-3xl mx-auto mb-12">
        <p className="font-semibold mb-4">Add your comment</p>
        <form
          onSubmit={addComment}
          className="flex flex-col items-start gap-4
max-w-lg"
        >
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Name"
            required
            className="w-full
p-2 border border-gray-300 rounded outline-none"
          />
          <textarea
            onChange={(e) => setContent(e.target.value)}
            value={content}
            placeholder="Comment"
            className="w-full p-2 border
border-gray-300 rounded outline-none h-48"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Blog;

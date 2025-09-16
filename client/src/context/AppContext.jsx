import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [input, setInput] = useState("");

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/api/blog/allblogs");
      data.success ? setBlogs(data.blogs) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();

    const token = localStorage.getItem("token");
// console.log(token)

    if (token) {
      setToken(token);
      axios.defaults.headers.common["Authorization"] = `${token}`;
    }
  }, []);

  const value = {
    axios,
    navigate,
    token,
    setToken,
    blogs,
    setBlogs,
    input,
    setInput,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

//custom hook
export const useAppContext = () => {
  return useContext(AppContext);
};

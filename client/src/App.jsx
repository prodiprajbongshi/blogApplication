import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./page/Home";
import Blog from "./page/Blog";
import Error404 from "./page/Error404";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Layout from "./page/admin/Layout";
import Dashbord from "./page/admin/Dashbord";
import Comments from "./page/admin/Comments";
import AddBlog from "./page/admin/AddBlog";
import AllBlog from "./page/admin/AllBlog";
import Login from "./component/admin/Login";
import  "quill/dist/quill.snow.css"
import {Toaster} from 'react-hot-toast'
import { useAppContext } from "./context/AppContext.jsx";

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  const {token} = useAppContext()
  // console.log(token)
 

  return (
    <div>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Blog />} />
        
        {/* Admin routes */}
        <Route path="/admin" element={ token ? <Layout /> : <Login />}>
          <Route index element={<Dashbord />} />
          <Route path="addblog" element={<AddBlog />} />
          <Route path="allBlog" element={<AllBlog />} />
          <Route path="comments" element={<Comments />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
      
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default App;

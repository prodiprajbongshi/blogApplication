import React from "react";
import Home from "./page/Home";
import { Route, Routes } from "react-router-dom";
import Blog from "./page/Blog";
import Error404 from "./page/Error404";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

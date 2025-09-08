import React from 'react'
import Hero from '../component/Hero'
import NewsLetter from '../component/NewsLetter'
import BlogList from '../component/BlogList'
// import Navbar from "../component/Navbar";
// import Footer from "../component/Footer";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <BlogList />
      <NewsLetter />\
      {/* <Footer /> */}
    </div>
  )
}

export default Home

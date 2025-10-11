import React from "react";
import brandIcon from "../assets/brandIcon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3 pt-8 pb-6">
      <footer>
        <div className="container flex  flex-col md:flex-row md:gap-12  items-center justify-between border-b border-gray-400 pb-6">
          <div className="w-full md:w-[50%]">
            <Link to="/">
              <img className="w-40" src={brandIcon} alt="Brand Icon" />
            </Link>
            <p className=" w-full font-light my-2 text-gray-500 hover:underline transition-all duration-300">
              This blog application is a modern platform that integrates AI-powered content generation to help users create high-quality blog posts effortlessly. Users can simply provide a title or topic, and the AI automatically generates well-structured blog content in natural language. The app also supports features like thumbnail uploads, blog categorization, rich text editing with Quill, and instant publishing, making it an all-in-one solution for efficient and creative blogging.
            </p>
          </div>
          <div className="w-full md:w-[50%] grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3 justify-between">
            <div className="">
              <h2 className="font-semibold  mt-4 md:mt-0">Quick Links</h2>
              <ul>
                <Link to="#">
                  <li className="text-gray-500 hover:underline transition-all duration-300 pt-2">
                    Home
                  </li>
                </Link>
                <Link to="#">
                  <li className="text-gray-500 hover:underline transition-all duration-300 pt-2">
                    Contact Us
                  </li>
                </Link>
                <Link to="#">
                  <li className="text-gray-500 hover:underline transition-all duration-300 pt-2">
                    FAQs
                  </li>
                </Link>
              </ul>
            </div>
            <div className="">
              <h2 className="font-semibold  mt-4 md:mt-0">Need Help?</h2>
              <ul>
                <Link to="#">
                  <li className="text-gray-500 hover:underline transition-all duration-300 pt-2">
                    Delivery Information
                  </li>
                </Link>
                <Link to="#">
                  <li className="text-gray-500 hover:underline transition-all duration-300 pt-2">
                    Return & Refund Policy
                  </li>
                </Link>
                <Link to="#">
                  <li className="text-gray-500 hover:underline transition-all duration-300 pt-2">
                    Payment Methods
                  </li>
                </Link>
              </ul>
            </div>
            <div className="">
              <h2 className="font-semibold  mt-4 md:mt-0">Follow Us</h2>
              <ul>
                <Link to="#">
                  <li className="text-gray-500 hover:underline transition-all duration-300 pt-2">
                    Instagram
                  </li>
                </Link>
                <Link to="#">
                  <li className="text-gray-500 hover:underline transition-all duration-300 pt-2">
                    Twitter
                  </li>
                </Link>
                <Link to="#">
                  <li className="text-gray-500 hover:underline transition-all duration-300 pt-2">
                    Facebook
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <p
          className="text-center text-gray-500 pt-3 pb-4
        "
        >
          Copyright 2025 © TechScript All Right Reserved.
        </p>
      </footer>
    </div>
  );
};
export default Footer;

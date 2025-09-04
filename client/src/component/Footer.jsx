import React from "react";
import brandIcon from "../assets/brandIcon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3 pt-8 pb-6">
      <footer>
        <div className="container flex items-center justify-between border-b border-gray-400 pb-6">
          <div className="w-[50%]">
            <Link to="/">
              <img className="w-40" src={brandIcon} alt="Brand Icon" />
            </Link>
            <p className="max-w-[410px] font-light my-2 text-gray-500 hover:underline transition-all duration-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              unde quaerat eveniet cumque accusamus atque qui error quo enim
              fugiat?
            </p>
          </div>
          <div className="w-[50%] flex justify-between">
            <div className="">
              <h2 className="font-semibold ">Quick Links</h2>
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
              <h2 className="font-semibold ">Need Help?</h2>
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
              <h2 className="font-semibold ">Follow Us</h2>
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

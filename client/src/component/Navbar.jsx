import React from "react";
import brandIcon from "../assets/brandIcon.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {

    const navigation = useNavigate()
    const {navigate, token} = useAppContext() 
  

  return (
    <div className="container">
      <nav className="flex items-center justify-between py-5 ">
        <Link to="/">
          <img className="w-40" src={brandIcon} alt="Brand Icon" />
        </Link>
        <div className="">
          <button onClick={()=> navigation("/admin")} className="flex items-center gap-2 bg-primary rounded-[33px] py-2.5 px-4 text-white cursor-pointer text-sm font-medium hover:bg-primary/90 transition-all duration-300">
            {token ? "Dashbord" : "Admin Login"    }
            {/* {console.log(token)} */}
            <FaArrowRightLong />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
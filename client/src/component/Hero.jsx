import React from "react";
import heroBg from "../assets/gradientBackground.png";
import start from "../assets/star_icon.svg";

const Hero = () => {
  return (
    <div className="container">
      <div className="relative">
        {/* hero content  */}
        <div className="text-center md:mt-18">
          <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary">
            <p className="text-sm font-light text-primary">
              New: AI feature integrated
            </p>
            <img src={start} alt="Icon" />
          </div>
          <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700">
            Your own <span className="text-primary">blogging</span> <br />{" "}
            platform.
          </h1>
          <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500">
            This is your space to think out loud, to share what matters, and to
            write without filters. Whether it's one word or a thousand, your
            story starts right here.
          </p>
          <form className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden">
            <input
              placeholder="Search for blogs"
              type="text"
              class="w-full pl-4 outline-none"
              name=""
              id=""
              required
            />

            <button
              type="submit"
              class="bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer"
            >
              Search
            </button>
          </form>
        </div>

        {/* bg image  */}
        <div className="absolute -top-50 -z-1 opacity-50">
          <img src={heroBg} alt="Bg Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

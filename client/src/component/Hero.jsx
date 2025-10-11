import React, { useRef } from "react";
import heroBg from "../assets/gradientBackground.png";
import start from "../assets/star_icon.svg";
import { useAppContext } from "../context/AppContext";

const Hero = () => {
  const { setInput, input } = useAppContext();
  const inputRef = useRef();

  // handle blog search
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
    inputRef.current.value = "";
  };

  // clear search filter
  const onClear = () => {
    setInput("");
     
  };

  return (
    <div className="container">
      <div className="relative">
        {/* hero content  */}
        <div className="text-center md:mt-18 mt-8">
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
          <form
            onSubmit={handleOnSubmit}
            className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden"
          >
            <input
              ref={inputRef}
              placeholder="Search for blogs"
              type="text"
              className="w-full pl-4 outline-none"
              name=""
              id=""
              required
            />

            <button
              type="submit"
              className="bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer"
            >
              Search
            </button>
          </form>
        </div>
        <div className="text-center">
          {input && (
            <button
              onClick={onClear}
              className="border font-light text-xs py-2 px-3 mt-6 rounded-sm
              shadow-custom-sm cursor-pointer hover:bg-primary hover:text-white transition-all duration-300"
            >
              Clear Search
            </button>
          )}
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

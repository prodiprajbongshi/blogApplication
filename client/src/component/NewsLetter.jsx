import React from "react";

const NewsLetter = () => {
  return (
    <div className="container flex flex-col items-center justify-center text-center space-y-2 md:my-32  my-12">
      <div className="text-center mx-4">
        <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Blog!</h1>
        <p className="md:text-lg text-gray-500/70 pb-8">Subscribe to get the latest blog, new tech, and exclusive news.</p>
        <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12 ">
          <input
            className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
            placeholder="Enter your email id"
            type="email"
            name=""
            id=""
            required
          />

          <button
            type="submit"
            className="md:px-12 px-8 h-full text-white bg-primary hover:bg-primary/80 transition-all cursor-pointer rounded-md rounded-l-none"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;

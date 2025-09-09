import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg">
        <div className="w-full py-6 text-center">
          <h1 className="text-3xl font-bold">
            <span className="text-primary">Admin</span> Login
          </h1>
          <p className="font-light">
            Enter your credentials to access the admin panel
          </p>
        </div>
        {/* loging from  */}
        <form action="#" className="mt-6 w-full sm:max-w-md text-gray-600">
          <div className="flex flex-col">
            <label>Eamil</label>
            <input
              className="border-b-2 border-gray-300 p-2 outline-none mb-6"
              type="email"
              name=""
              placeholder="Enter Email"
              id=""
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              className="border-b-2 border-gray-300 p-2 outline-none mb-6"
              type="password"
              name=""
              placeholder="Enter Password"
              id=""
              required
            />
          </div>
          <button
            type="submit"
            class="w-full py-3 font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/90 transition-all"
          >
             
            Login{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

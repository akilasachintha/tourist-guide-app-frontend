import React from "react";
import { Link } from "react-router-dom";

const PendingRequests = () => {
  return (
    <div>
      <div className="
    flex
    items-center
    justify-center
    w-screen
    h-screen
    bg-gradient-to-r
    from-indigo-600
    to-blue-400
  ">
        <div className="px-40 py-20 bg-white rounded-md shadow-xl">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-blue-600 mb-5 text-4xl">Pending For Admin Approval</h1>
            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Wait!</span> Few Minutes
            </h6>
            <p className="my-8 text-center text-gray-500 md:text-md">
              Sometimes, It will take 24hrs. If you have any problem. Please Contact Us.
            </p>
            <div className="flex">
              <Link to="/" className="flex-col mx-2 px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100">Go home</Link>
              <Link to="/auth/login" className="flex-col px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100">Try to Login</Link>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default PendingRequests;

import React from "react";
import { Link } from "react-router-dom";

const PageNotFoundError = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 md:px-24 lg:flex-row lg:gap-28 lg:py-32">
      <div className="w-full lg:w-1/2">
        <img
          className=""
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt=""
        />
      </div>
      <div className="w-full lg:w-1/2">
        <h1 className="pb-4 text-3xl font-extrabold text-gray-800 lg:text-4xl">
          Looks like you've found the doorway to the great nothing
        </h1>
        <p className="pb-4 text-base text-gray-800">
          The content you’re looking for doesn’t exist. Either it was removed,
          or you mistyped the link.
        </p>
        <p className="pb-2 text-base text-gray-800">
          Sorry about that! Please visit our hompage to get where you need to
          go.
        </p>
        <Link to="">
          <button className="focus:ring-teal w-full rounded-md border bg-teal-400 p-3 text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-opacity-50 sm:px-16 lg:w-auto">
            Go back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFoundError;

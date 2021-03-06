import React, { useState } from "react";
import { Link } from "react-router-dom";

const LocationCard = ({ locations }) => {
  const [noOfElements, setNoOfElements] = useState(6);

  const loadMore = () => {
    setNoOfElements(noOfElements + noOfElements);
  };

  const sliceArr = locations.slice(0, noOfElements);

  return (
    <div className=" 2xl:container 2xl:mx-auto">
      <div className=" bg-gray-50 py-6 text-center md:py-8 lg:py-10">
        <p className=" mx-auto w-10/12 text-center font-oxygen text-3xl font-black leading-9 text-gray-800 md:w-full md:leading-7 lg:text-4xl lg:leading-9">
          All-Inclusive Locations
        </p>
      </div>
      <div className=" py-6 px-4 md:px-6 lg:px-20">
        <p className=" text-sm font-normal leading-3 text-gray-600 ">
          Home / Locations
        </p>
        <hr className=" my-6 w-full bg-gray-200" />

        <div className=" flex items-center justify-between">
          <div className=" flex items-center justify-center space-x-3">
            <svg
              className=" cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 7.5H20.25"
                stroke="#1F2937"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M3.75 12H20.25"
                stroke="#1F2937"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M3.75 16.5H20.25"
                stroke="#1F2937"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </svg>
            <p className=" text-base font-normal leading-4 text-gray-800">
              Filter
            </p>
          </div>
          <p className=" cursor-pointer text-base font-normal leading-4 text-gray-600 duration-100 hover:underline">
            Showing {locations.length} locations
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-y-10 sm:gap-x-6 lg:mt-12 lg:grid-cols-3 lg:gap-y-12 lg:gap-x-8">
          {locations.length !== 0 &&
            sliceArr.map(
              ({ locationId, urls, locationName, category, district }) => (
                <Link to={`/locations/${locationId}`} key={locationId}>
                  <div className="max-w-sm rounded overflow-hidden shadow-lg" key={locationId}>
                    <img className="w-full object-cover h-[270px]" src={urls[0]}
                         alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2 text-center">{locationName}</div>
                    </div>
                    <div className="px-6 pt-1 pb-2 text-center">
                    <span
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category}</span>
                      <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{district}</span>
                    </div>
                  </div>
                </Link>
              )
            )}
        </div>
        {noOfElements >= locations.length ? (
          ""
        ) : (
          <div className=" flex items-center justify-center">
            <button
              className=" mt-10 w-full bg-gray-800 py-3 text-base font-medium leading-4 text-white hover:bg-gray-700 focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 md:mt-12 md:w-auto md:px-16 lg:mt-28"
              onClick={() => loadMore()}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationCard;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import beachVideo2 from "../../assets/videos/beachVideo2.mp4";

const LocationDetails = () => {
  const [active, setActive] = useState(0);
  const { id } = useParams();

  const { locations } = useSelector((state) => state.locations);

  const location = locations.filter(({ locationId }) => {
    return locationId.toString() === id;
  });

  const handleCarole = (index) => {
    setActive(index);
  };

  return (
    <div className="relative h-screen w-full">
      <video
        className="h-full w-full object-cover"
        src={beachVideo2}
        autoPlay={true}
        loop={true}
        muted={true}
      />
      <div className="absolute top-0 left-0 h-full w-full bg-gray-900/30"></div>
      <div className="absolute top-0 flex h-full w-full flex-col justify-center p-4 text-center text-white">
        <div className="m-auto mt-20 w-9/12 overflow-hidden rounded-xl bg-blue-200 bg-opacity-25">
          {location.length !== 0 && (
            <div className="items-start justify-center rounded-xl p-10 shadow-lg md:flex">
              <div className="lg:w-[38rem]">
                <img
                  className="hidden rounded-lg object-cover lg:block lg:h-[22rem] lg:w-[38rem]"
                  alt="img of a girl posing"
                  src={location[0].urls[active]}
                />
                <div className="mt-3 flex items-center justify-between  space-x-4 space-x-0 overflow-hidden">
                  {location[0].urls.map((url, index) => (
                    <img
                      alt="img-tag-one"
                      key={index}
                      className="hidden rounded-lg object-cover lg:block lg:h-48 lg:w-48 lg:w-full"
                      src={url}
                      onClick={() => handleCarole(index)}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-6 md:ml-6 md:mt-0 md:w-1/2 lg:ml-8 lg:w-[30rem] xl:w-2/5">
                <div className="border-b border-gray-200 pb-6">
                  <h1
                    className="
							mt-2
							font-raleway
							text-5xl
							font-bold

						"
                  >
                    {location[0].locationName}
                  </h1>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 py-4">
                  <p className="text-base leading-4">Ratings</p>
                  <div className="flex items-center justify-center">
                    <p className="text-sm leading-none text-gray-100">
                      4.5/5 Reviews
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 py-4">
                  <p className="text-base leading-4 ">Category</p>
                  <div className="flex items-center justify-center">
                    <p className="text-sm leading-none">
                      {location[0].category}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 py-4">
                  <p className="text-base leading-4">District</p>
                  <div className="flex items-center justify-center">
                    <p className="text-sm leading-none">
                      {location[0].district}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4">
                  <p className="leading-40 text-base">Town</p>
                  <div className="flex items-center justify-center">
                    <p className="text-sm leading-none">{location[0].town}</p>
                  </div>
                </div>
                <Link
                  to="/hotels"
                  className="
						flex w-full items-center justify-center
						bg-gray-800
						py-4
						text-base
						leading-none
						text-white
						hover:bg-gray-700
						focus:outline-none
						focus:ring-2
						focus:ring-gray-800
						focus:ring-offset-2
					"
                >
                  <svg
                    className="mr-3"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z"
                      stroke="white"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.66699 4.83333V4.84166"
                      stroke="white"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z"
                      stroke="white"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.333 11.5V11.5083"
                      stroke="white"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Book a Hotel Near to Location
                </Link>
                <div>
                  <p className="mt-7 text-base leading-normal lg:leading-tight">
                    {location[0].description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;

import React from "react";
import { BsPlayCircle } from "react-icons/bs";
import beachVideo from "../../assets/videos/beachVideo.mp4";
import { Link } from "react-router-dom";

const HeroHome = () => {
  return (
    <div className="relative h-screen w-full">
      <video
        className="h-full w-full object-cover"
        src={beachVideo}
        autoPlay={true}
        loop={true}
        muted={true}
      />
      <div className="absolute top-0 left-0 h-full w-full bg-gray-900/30"></div>
      <div className="absolute top-0 flex h-full w-full flex-col justify-center p-4 text-center text-white">
        <div>
          <h1 className="text-5xl sm:text-7xl">ADVENTURE AWAITS</h1>
          <h2 className="py-6 text-2xl">What are you waiting for?</h2>
          <div className="my-2 flex items-center justify-center">
            <Link to="/locations">
              <button
                className="mx-2 rounded-md border border-white bg-transparent px-8 py-3 text-lg text-white transition duration-150 ease-in-out hover:border-white hover:bg-white hover:text-black">
                Get Started
              </button>
            </Link>
            <button
              className="mx-2 rounded-md border border-white bg-white px-8 py-3 text-lg text-black transition duration-150 ease-in-out hover:border-white hover:bg-transparent hover:text-white">
              Register <BsPlayCircle className="inline" size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;

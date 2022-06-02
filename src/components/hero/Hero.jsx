import React from "react";
import beachVideo from "../../assets/videos/beachVideo.mp4";

const Hero = () => {
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
        {/*TODO: Put Elements inside This*/}
      </div>
    </div>
  );
};

export default Hero;

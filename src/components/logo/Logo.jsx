import React from "react";
import { SiSemaphoreci } from "react-icons/si";

const Logo = () => {
  return (
    <div>
      <h1 className={"block font-oxygen text-4xl font-extrabold sm:text-2xl"}>
        Travel Mate <SiSemaphoreci className="inline" size={30} />
      </h1>
    </div>
  );
};

export default Logo;

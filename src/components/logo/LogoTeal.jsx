import React from "react";
import { SiSemaphoreci } from "react-icons/si";

const LogoTeal = () => {
  return (
    <div>
      <h1
        className={
          "block font-oxygen text-4xl font-extrabold text-black sm:text-2xl"
        }
      >
        Travel Mate <SiSemaphoreci className="inline" size={30} />
      </h1>
    </div>
  );
};

export default LogoTeal;

import React from "react";
import { SiSemaphoreci } from "react-icons/si";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="no-underline">
      <h1 className={"block font-oxygen text-4xl font-extrabold sm:text-2xl"}>
        Travel Mate <SiSemaphoreci className="inline" size={30} />
      </h1>
    </Link>
  );
};

export default Logo;

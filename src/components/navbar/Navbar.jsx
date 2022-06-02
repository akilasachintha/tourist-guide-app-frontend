import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import Logo from "../logo/Logo";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Destinations",
      path: "/locations",
    },
    {
      name: "Hotels",
      path: "/hotels",
    },
    {
      name: "Vehicles",
      path: "/vehicles",
    },
    {
      name: "Guides",
      path: "/guides",
    },
  ];

  return (
    <nav className="absolute z-10 flex h-20 w-full items-center justify-between px-4 text-white md:text-2xl">
      <div>
        <Logo />
      </div>
      <ul className={nav ? "hidden" : "hidden lg:flex"}>
        {navItems.map((navItem, index) => (
          <li className="px-4 text-lg" key={index}>
            <NavLink
              to={navItem.path}
              className={({ isActive }) =>
                isActive ? "rounded-lg border-2 px-4 py-2" : undefined
              }
            >
              {navItem.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={nav ? "hidden" : "hidden md:flex"}>
        <Link to="auth/login">
          <button className="mx-2 my-2 rounded border border-white bg-white px-6 py-2 text-base text-black  hover:bg-transparent hover:text-white active:bg-white">
            Sign In
          </button>
        </Link>
        <Link to="auth/register">
          <button className="mx-2 my-2 rounded border border-white bg-transparent px-6 py-2 text-base  text-white hover:bg-white hover:text-black">
            Sign Up
          </button>
        </Link>
      </div>

      {/*Hamburger*/}
      <div onClick={handleNav} className="z-10 md:hidden">
        {nav ? (
          <AiOutlineClose
            className="transform text-black hover:rotate-45"
            size={20}
          />
        ) : (
          <GiHamburgerMenu size={20} />
        )}
      </div>

      {/*Mobile VIew*/}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute left-0 top-0 flex w-full flex-col bg-white px-4 py-7 text-black"
            : "absolute left-[-100%]"
        }
      >
        <div className="flex flex-col items-center">
          <Logo />
          {navItems.map((navItem, index) => (
            <div className="py-4" key={index}>
              {navItem.name}
            </div>
          ))}
          <Link to="/auth/login">
            <button className="my-6">Sign In</button>
          </Link>
          <Link to="/auth/register">
            <button className="my-6">Sign Up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

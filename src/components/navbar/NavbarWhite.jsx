import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../logo/Logo";
import LogoTeal from "../logo/LogoTeal";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppUser } from "../../redux/store/appUserSlice";

const NavbarWhite = () => {
  const [nav, setNav] = useState(false);
  const { appUser } = useSelector((state) => state.appUser);
  let user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(fetchAppUser());
    };
  }, [dispatch]);

  const handleNav = () => {
    setNav(!nav);
  };

  function logOut() {
    localStorage.removeItem("user");
    navigate("/");
  }

  function navigateToProfile() {
    if(user.userType === "tourist"){
      navigate("/dashboard/tourists");
    }
    else if(user.userType === "driver"){
      navigate("/dashboard/drivers");
    }
    else if(user.userType === "hotelOwner"){
      navigate("/dashboard/hotels");
    }
    else if(user.userType === "guide"){
      navigate("/dashboard/guides");
    }else{
      navigate("/auth/login");
    }
  }


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
    <nav className="fixed top-0 z-10 flex h-20 w-full items-center justify-between bg-white px-4 text-black md:text-2xl">
      <div>
        <LogoTeal />
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
        <button className="mx-2 my-2 rounded border border-white bg-white px-6 py-2 text-base text-black hover:bg-transparent hover:text-white active:bg-white">
          Sign In
        </button>
        <button className="mx-2 my-2 rounded border border-white bg-transparent px-6 py-2 text-base  text-black hover:bg-white hover:text-black">
          Sign Up
        </button>
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
          <button className="my-6">Sign In</button>
          <button className="my-6">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarWhite;

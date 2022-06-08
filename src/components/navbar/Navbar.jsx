import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppUser } from "../../redux/store/appUserSlice";
import avatar from "../../assets/images/avatar/avatar.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [profile, setProfile] = useState(false);
  let user = JSON.parse(localStorage.getItem("user"));
  const { appUser } = useSelector((state) => state.appUser);
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

  const navItems = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Destinations",
      path: "/locations"
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
        {user?.status ? (<div>
          <div
            className="relative flex cursor-pointer items-center"
            onClick={() => setProfile(!profile)}
          >
            <div className="rounded-full">
              {profile ? (
                <ul className="absolute left-0 mt-12 w-full rounded border-r bg-white p-2 shadow sm:mt-16 ">
                  <li
                    className="flex w-full cursor-pointer items-center justify-between text-gray-600 hover:text-indigo-700">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-user"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={12} cy={7} r={4} />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                      </svg>
                      <span className="ml-2 text-sm" onClick={() => navigateToProfile()}>My Profile</span>
                    </div>
                  </li>
                  <li
                    className="mt-2 flex w-full cursor-pointer items-center justify-between text-gray-600 hover:text-indigo-700"
                    onClick={() => logOut()}>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-logout"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                        <path d="M7 12h14l-3 -3m0 6l3 -3" />
                      </svg>
                      <span className="ml-2 text-sm">Sign out</span>
                    </div>
                  </li>
                </ul>
              ) : (
                ""
              )}
              <div className="relative">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src={appUser.userPhotoUrl || avatar}
                  alt="avatar"
                />
                <div
                  className="absolute inset-0 m-auto mb-0 mr-0 h-2 w-2 rounded-full border border-white bg-green-400" />
              </div>
            </div>
            <p className="mx-3 text-sm text-white"> {user.name} </p>
            <div className="cursor-pointer text-white">
              <svg
                aria-haspopup="true"
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-down"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>) : (
          <div>
            <Link to="auth/login">
              <button
                className="mx-2 my-2 rounded border border-white bg-white px-6 py-2 text-base text-black  hover:bg-transparent hover:text-white active:bg-white">
                Sign In
              </button>
            </Link>
            <Link to="auth/register">
              <button
                className="mx-2 my-2 rounded border border-white bg-transparent px-6 py-2 text-base  text-white hover:bg-white hover:text-black">
                Sign Up
              </button>
            </Link>
          </div>
        )}
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

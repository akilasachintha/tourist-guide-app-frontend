import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppUser } from "../../../redux/store/appUserSlice";
import { fetchCheckingHotelStatus } from "../../../redux/store/checkingHotelStatusSlice";
import touristGuideAppAPI from "../../../apis/touristGuideAppAPI";

export default function HotelDashboardHome() {
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(false);
  const [notificationShow, setNotificationShow] = useState(false);
  const { appUser } = useSelector((state) => state.appUser);
  const [myNotifyModal, setMyNotifyModal] = useState(false);
  const [myBookingId, setMyBookingId] = useState(0);
  const { hotelBookings } = useSelector((state) => state.hotelBookings);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("user");
    navigate("/auth/login");
  }


  const myBookingHotel = hotelBookings.filter(({ bookingId }) => {
    return bookingId = myBookingId;
  });

  useEffect(() => {
    dispatch(fetchAppUser());
    dispatch(fetchCheckingHotelStatus());
  }, [dispatch]);

  const handleManageBtn = (e) => {
    setMyBookingId(e.target.value);
    setMyNotifyModal(true);
  };

  console.log(myBookingId);

  const handleAccept = () => {
    touristGuideAppAPI.get("/booking/hotelBooking/confirm", {
      params: { id: myBookingId }
    }).then((res) => {
      console.log(res.data);
      setMyNotifyModal(false);
      dispatch(fetchCheckingHotelStatus());
    });
  };


  return (
    <div>
      <div className="h-screen w-full bg-gray-200">
        <div className="flex-no-wrap flex">
          {/* Sidebar starts */}
          <div className="absolute hidden h-screen w-64 bg-gray-100 shadow lg:relative lg:block">
            <div className="flex h-20 w-full items-center px-8">
              <Link to="/" className="text-xl font-bold">
                TravelMate<i className="fas fa-map-marked"></i>
              </Link>
            </div>
            {/* eslint-disable-next-line jsx-a11y/role-supports-aria-props */}
            <ul aria-orientation="vertical" className=" py-6">
              <NavLink to="/dashboard/hotels" className="side-item-active">
                <li className="cursor-pointer pl-6 text-base text-sm leading-3">
                  <div className="flex items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-grid"
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
                        <rect x={4} y={4} width={6} height={6} rx={1} />
                        <rect x={14} y={4} width={6} height={6} rx={1} />
                        <rect x={4} y={14} width={6} height={6} rx={1} />
                        <rect x={14} y={14} width={6} height={6} rx={1} />
                      </svg>
                    </div>
                    <span className="ml-2">Dashboard</span>
                  </div>
                </li>
              </NavLink>

              <NavLink
                to="/dashboard/hotels/hotellist"
                className="side-item-active bg-black"
              >
                <li className="mt-4 mb-4 cursor-pointer py-2 pl-6 text-sm leading-3">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-puzzle"
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
                      <path
                        d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                    </svg>
                    <span className="ml-2">Hotels</span>
                  </div>
                </li>
              </NavLink>

              <NavLink to="/dashboard/hotels/profile">
                <li className="mb-4 cursor-pointer py-2 pl-6 text-sm leading-3">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-compass"
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
                      <polyline points="8 16 10 10 16 8 14 14 8 16" />
                      <circle cx={12} cy={12} r={9} />
                    </svg>
                    <span className="ml-2">Profile</span>
                  </div>
                </li>
              </NavLink>

            </ul>
          </div>

          {/*Mobile responsive sidebar*/}
          <div
            className={
              show
                ? "absolute z-40 h-full w-full  translate-x-0  transform "
                : "   absolute z-40 h-full w-full  -translate-x-full transform"
            }
            id="mobile-nav"
          >
            <div
              className="absolute h-full w-full bg-gray-800 opacity-50 lg:hidden"
              onClick={() => setShow(!show)}
            />
            <div
              className="absolute z-40 h-full w-64 bg-gray-100 pb-4 shadow transition duration-150 ease-in-out sm:relative md:w-96 lg:hidden">
              <div className="flex h-full w-full flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between px-8">
                    <div className="flex h-16 w-full items-center">
                      {/*Icon Travel Mate*/}
                      <NavLink to="/" className="text-3xl font-bold">
                        TravelMate<i className="fas fa-map-marked"></i>
                      </NavLink>
                    </div>
                    <div
                      id="closeSideBar"
                      className="flex h-10 w-10 items-center justify-center"
                      onClick={() => setShow(!show)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-x"
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
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                      </svg>
                    </div>
                  </div>

                  {/* eslint-disable-next-line jsx-a11y/role-supports-aria-props */}
                  <ul aria-orientation="vertical" className=" py-6">
                    <li
                      className="cursor-pointer pl-6 text-base text-sm leading-3 tracking-normal text-indigo-700 focus:text-indigo-700 focus:outline-none">
                      <div className="flex items-center">
                        <div className="h-6 w-6 md:h-8 md:w-8">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-grid"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x={4} y={4} width={6} height={6} rx={1} />
                            <rect x={14} y={4} width={6} height={6} rx={1} />
                            <rect x={4} y={14} width={6} height={6} rx={1} />
                            <rect x={14} y={14} width={6} height={6} rx={1} />
                          </svg>
                        </div>
                        <span className="ml-2 text-base md:text-2xl xl:text-base">
                          Dashboard
                        </span>
                      </div>
                    </li>
                    <li
                      className="mt-4 mb-4 cursor-pointer py-2 pl-6 text-sm leading-3 tracking-normal text-gray-600 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                      <div className="flex items-center">
                        <div className="h-6 w-6 md:h-8 md:w-8">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-puzzle"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path
                              d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                          </svg>
                        </div>
                        <span className="ml-2 text-base md:text-2xl xl:text-base">
                          Products
                        </span>
                      </div>
                    </li>
                    <li
                      className="mb-4 cursor-pointer py-2 pl-6 text-sm leading-3 tracking-normal text-gray-600 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                      <div className="flex items-center">
                        <div className="h-6 w-6 md:h-8 md:w-8">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-compass"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="8 16 10 10 16 8 14 14 8 16" />
                            <circle cx={12} cy={12} r={9} />
                          </svg>
                        </div>
                        <span className="ml-2 text-base md:text-2xl xl:text-base">
                          Performance
                        </span>
                      </div>
                    </li>
                    <li
                      className="cursor-pointer py-2 pl-6 text-sm leading-3 tracking-normal text-gray-600 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                      <div className="flex items-center">
                        <div className="h-6 w-6 md:h-8 md:w-8">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-code"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="7 8 3 12 7 16" />
                            <polyline points="17 8 21 12 17 16" />
                            <line x1={14} y1={4} x2={10} y2={20} />
                          </svg>
                        </div>
                        <span className="ml-2 text-base md:text-2xl xl:text-base">
                          Deliverables
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="w-full">
                  <div className="mb-4 flex w-full justify-center px-6">
                    <div className="relative w-full">
                      <div className="absolute inset-0 m-auto ml-4 h-4 w-4 text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-search"
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="#A0AEC0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx={10} cy={10} r={7} />
                          <line x1={21} y1={21} x2={15} y2={15} />
                        </svg>
                      </div>
                      <input
                        className="w-full rounded bg-gray-200 py-2 pl-10 text-sm  text-gray-500 focus:outline-none"
                        type="text"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <div className="border-t border-gray-300">
                    <div className="flex w-full items-center justify-between px-6 pt-1">
                      <div className="flex items-center">
                        <img
                          alt="profile-pic"
                          src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png"
                          className="h-8 w-8 rounded-md"
                        />
                        <p className="ml-2 text-base leading-4 text-gray-800 md:text-xl">
                          Jane Doe
                        </p>
                      </div>
                      <ul className="flex">
                        <li className="cursor-pointer pt-5 pb-3 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-messages"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="#718096"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                            <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                          </svg>
                        </li>
                        <li className="cursor-pointer pt-5 pb-3 pl-3 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-bell"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="#718096"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path
                              d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                          </svg>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          {/* Sidebar ends */}

          <div className="w-full">
            {/* Navigation starts */}


            {notificationShow && (<div
              className="w-full absolute z-10 right-0 mt-5 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
              id="notification">
              <div className="2xl:w-3/12 bg-gray-50 h-screen overflow-y-auto p-8 absolute right-0">
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-semibold leading-6 text-gray-800">Notifications</p>
                  <div className="cursor-pointer" onClick={() => setNotificationShow(!notificationShow)}>
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round"
                            strokeLinejoin="round" />
                      <path d="M6 6L18 18" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {hotelBookings.length !== 0 && hotelBookings.map((book) => (
                  (
                    <div className="w-full p-3 mt-4 bg-green-100 rounded flex items-center">
                      <div
                        className="w-8 h-8 border rounded-full border-red-200 flex items-center flex-shrink-0 justify-center">
                        <img src="https://img.icons8.com/ios-filled/50/undefined/appointment-reminders--v1.png"
                             alt="img" />
                      </div>
                      <div className="pl-3 w-full flex items-center justify-between">
                        <p className="text-sm leading-none text-green-700">Accept Or Reject Booking</p>
                        <button type="button"
                                className="text-xs leading-3 cursor-pointer underline text-right text-green-700"
                                value={book.bookingId}
                                onClick={handleManageBtn}>Manage
                        </button>
                      </div>
                    </div>
                  )
                ))}

                <div className="flex items-center justiyf-between">
                  <hr className="w-full" />
                  <p className="text-sm flex flex-shrink-0 leading-normal px-3 py-16 text-gray-500">Thats it for now
                    :)</p>
                  <hr className="w-full" />
                </div>
              </div>
            </div>)}


            <nav
              className="relative z-10 flex h-16 items-center justify-end bg-white shadow lg:items-stretch lg:justify-between">
              <div className="hidden w-full pr-6 lg:flex">
                <div className="hidden h-full w-1/2 items-center pl-6 pr-24 lg:flex">
                  <div className="relative w-full">
                    <div className="absolute inset-0 m-auto ml-4 h-4 w-4 text-gray-500"></div>
                    <input
                      className="w-full rounded border border-gray-100 bg-gray-100 py-2 pl-12 text-sm text-gray-500 focus:border-indigo-700 focus:outline-none"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="hidden w-1/2 lg:flex">
                  <div className="flex w-full items-center justify-end pl-8">
                    <div className="flex h-full w-20 items-center justify-center border-r border-l">
                      <div className="relative cursor-pointer text-gray-600"
                           onClick={() => setNotificationShow(!notificationShow)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-bell"
                          width={28}
                          height={28}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path
                            d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                          <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                        </svg>
                        <div
                          className="absolute inset-0 m-auto mt-1 mr-1 h-2 w-2 rounded-full border border-white bg-red-400" />
                      </div>
                    </div>
                    <div
                      className="relative flex cursor-pointer items-center ml-2"
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
                                <span className="ml-2 text-sm">My Profile</span>
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
                                  <path
                                    d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
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
                            src="https://tuk-cdn.s3.amazonaws.com/assets/components/sidebar_layout/sl_1.png"
                            alt="avatar"
                          />
                          <div
                            className="absolute inset-0 m-auto mb-0 mr-0 h-2 w-2 rounded-full border border-white bg-green-400" />
                        </div>
                      </div>
                      <p className="mx-3 text-sm text-gray-800">{appUser.name}</p>
                      <div className="cursor-pointer text-gray-600">
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
                  </div>
                </div>
              </div>
              <div
                className="visible relative mr-8 text-gray-600 lg:hidden"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  " "
                ) : (
                  <svg
                    aria-label="Main Menu"
                    aria-haspopup="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu cursor-pointer"
                    width={30}
                    height={30}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={4} y1={8} x2={20} y2={8} />
                    <line x1={4} y1={16} x2={20} y2={16} />
                  </svg>
                )}
              </div>
            </nav>
            {/* Navigation ends */}

            {/* Remove class [ h-64 ] when adding a card block */}
            <div className="md:w-5/5 container mx-auto w-11/12 py-10 px-6">
              {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
              <div className="h-full w-full rounded">
                {/* Place your content here */}

                {myNotifyModal && (<div>
                  <div
                    className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
                    id="modal">
                    <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                      <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                        <div className="w-full flex justify-start text-gray-600 mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wallet"
                               width={52} height={52} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor"
                               fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path
                              d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                            <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                          </svg>
                        </div>
                        <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Hotel Booking
                          Details</h1>

                        <div className="flex mb-5">
                          <div className="w-1/2 h-12 mr-2">
                            <label htmlFor="name"
                                   className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                              Check In Date
                            </label>
                            <input id="name"
                                   value={myBookingHotel[0]?.checkInDate.split(".").join("-")}
                                   type="date"
                                   disabled={true}
                                   className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                   placeholder="James" />
                          </div>
                          <div className="w-1/2 h-12">
                            <label htmlFor="name"
                                   className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                              Check Out Date
                            </label>
                            <input id="name"
                                   value={myBookingHotel[0]?.checkOutDate.split(".").join("-")}
                                   type="date"
                                   disabled={true}
                                   className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                   placeholder="James" />
                          </div>
                        </div>

                        <label htmlFor="email2"
                               className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                          No of Members
                        </label>
                        <div className="relative mb-3 mt-2">
                          <input id="email2"
                                 className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-4 text-sm border-gray-300 rounded border"
                                 disabled={true}
                                 value={myBookingHotel[0]?.noOfMembers} />
                        </div>

                        <div className="flex mb-5">
                          <div className="w-1/2 h-12 mr-2">
                            <label htmlFor="name"
                                   className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                              Paid Amount
                            </label>
                            <input id="name"
                                   value={myBookingHotel[0]?.paidAmount}
                                   type="text"
                                   disabled={true}
                                   className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                   placeholder="James" />
                          </div>
                          <div className="w-1/2 h-12">
                            <label htmlFor="name"
                                   className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                              Fully Payment Amount
                            </label>
                            <input id="name"
                                   value={myBookingHotel[0]?.fullPayment}
                                   type="text"
                                   disabled={true}
                                   className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                   placeholder="James" />
                          </div>
                        </div>
                        <div className="flex items-center justify-center w-full">
                          <button
                            type="button"
                            onClick={handleAccept}
                            className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-green-700 rounded text-white px-8 py-2 text-sm">Accept
                          </button>
                          <button
                            className="focus:outline-none ml-3 bg-red-700 transition duration-150 text-white ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                            onClick="modalHandler()">
                            Reject
                          </button>
                        </div>
                        <div
                          className="cursor-pointer absolute top-0 right-0 text-gray-400 hover:text-gray-300 transition duration-150 ease-in-out m-3"
                          onClick={() => setMyNotifyModal(false)}>
                          <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close"
                               className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24"
                               strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round"
                               strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-center py-12" id="button">
                    <button
                      className="focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
                      onClick="modalHandler(true)">
                      Open Modal
                    </button>
                  </div>
                </div>)}
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
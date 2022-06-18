import Login from "./login/Login";
import React from "react";
import TouristDashboardHome from "../dashboard/tourist/TouristDashboardHome";
import DriverDashboardHome from "../dashboard/driver/DriverDashboardHome";
import GuideDashboardHome from "../dashboard/guide/GuideDashboardHome";
import HotelDashboardHome from "../dashboard/hotels/HotelDashboardHome";
import AdminDashboardHome from "../dashboard/admin/AdminDashboardHome";

const Auth = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  if (user?.status && user.userType === "tourist") {
    console.log("tourist");
    return <TouristDashboardHome />;
  } else if (user?.status && user.userType === "driver") {
    return <DriverDashboardHome />;
  } else if (user?.status && user.userType === "guide") {
    return <GuideDashboardHome />;
  } else if (user?.status && user.userType === "hotelOwner") {
    return <HotelDashboardHome />;
  } else if (user?.status && user.userType === "admin") {
    return <AdminDashboardHome />;
  } else {
    return <Login />;
  }
};

export default Auth;
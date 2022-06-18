import { Navigate } from "react-router-dom";
import TouristDashboardHome from "../pages/dashboard/tourist/TouristDashboardHome";
import DriverDashboardHome from "../pages/dashboard/driver/DriverDashboardHome";
import AdminDashboardHome from "../pages/dashboard/admin/AdminDashboardHome";
import React from "react";

export const ProtectedRoute = ({ children }) => {
  let user = JSON.parse(localStorage.getItem("user"));

  if (user?.status && user.userType.toString() === "tourist") {
    return <TouristDashboardHome />;
  } else if (user?.status && user.userType.toString() === "driver") {
    return <DriverDashboardHome />;
  } else if (user?.status && user.userType.toString() === "admin") {
    return <AdminDashboardHome />;
  } else {
    return <Navigate to="/auth/login" />;
  }
};

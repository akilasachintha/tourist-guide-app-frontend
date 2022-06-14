import React from "react";
import Login from "./pages/auth/login/Login";
import { Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      {user.status ? <Outlet /> : <Login />}
    </div>
  );
};

export default ProtectedRoutes;

import React from "react";
import NavbarWhite from "../../components/navbar/NavbarWhite";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";

const UserViewRoutesTwo = () => {
  return (
    <div>
      <NavbarWhite />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserViewRoutesTwo;

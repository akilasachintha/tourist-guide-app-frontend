import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";
import "./NavBar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobleMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton(); 
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobleMenu}>
            TravelMate<i className="fas fa-map-marked"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobleMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/dashboard"
                className="nav-links"
                onClick={closeMobleMenu}
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobleMenu}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-links-mobile"
                onClick={closeMobleMenu}
              >
                Sign In
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline" path="/login">Sign In</Button>}
        </div>
      </nav>
    </>
  );
};

export default NavBar;

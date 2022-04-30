import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";

import Button from "../button/Button";

import "../../styles/Navbar.css";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    const closeMobileMenu = () => {
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

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener("scroll", changeBackground);

    return (
        <>
            <nav className={navbar ? "navbar active" : "navbar"}>
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        TravelMate<i className="fas fa-map-marked"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                to="/locations"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Locations
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/hotels"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Hotels
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/vehicles"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Vehicles
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/guides"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Guides
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/auth/login"
                                className="nav-links-mobile"
                                onClick={closeMobileMenu}
                            >
                                Sign In
                            </NavLink>
                        </li>
                    </ul>
                    {button && (
                        <Button buttonStyle="btn--primary" path="/auth/register">
                            Sign Up
                        </Button>
                    )}
                    {button && (
                        <Button buttonStyle="btn--outline" path="/auth/login">
                            Sign In
                        </Button>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;

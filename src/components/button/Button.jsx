import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Button.css";

const STYLES = ["btn--primary", "btn--outline", "btn--black"];
const SIZES = ["btn--medium", "btn--large"];

const Button = ({ path, children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link
      to={`${path}`}
      className="btn-mobile"
      style={{ textDecoration: "none", margin: "0 10px 0 0 " }}
    >
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;

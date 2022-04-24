import React from "react";
import "../../styles/NotFound.css";

const NotFound = (props) => {
  return (
    <div className="container my-5 notfound-constiner">
      <div className="number">{props.error}</div>
      <div className="text">
        <span>Ooops...</span>
        <br />
        {props.errorDescription}
      </div>
    </div>
  );
};

export default NotFound;

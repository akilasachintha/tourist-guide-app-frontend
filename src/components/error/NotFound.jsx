import React from "react";
import {Link} from "react-router-dom"
import "../../styles/NotFound.css";


const NotFound = (props) => {
    return (
        <div className="container my-5 notfound-container">
            <div className="number">{props.error}</div>
            <div className="text">
                <span>Oops...</span>
                <br/>
                {props.errorDescription}
            </div>
            <Link to="/" className="btn btn-dark my-5 btn-block btn-lg rounded">Go to Home</Link>

        </div>
    );
};

export default NotFound;

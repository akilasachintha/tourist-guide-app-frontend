import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";

import {getLocationDetails} from "../../redux/slices/locationApiHandle";

import "../../styles/LocationDetails.css";

const LocationDetails = () => {
    const {location, images, status} = useSelector((state) => state.location);
    const [active, setActive] = useState(0);

    const {locationId} = useParams();
    const dispatch = useDispatch();

    const handleCarasole = (index) => {
        setActive(index);
    };

    useEffect(() => {
        dispatch(getLocationDetails(locationId));
    }, [dispatch, locationId]);

    return (
        <div>
            {status === "loading" ? (
                "loading"
            ) : (
                <div className="container mt-3 py-3 px-xl-5">
                    <nav aria-label="breadcrumb" className="bg-custom-light rounded mb-4">
                        <ol className="breadcrumb p-1">
                            <li className="breadcrumb-item">
                                <Link
                                    className="text-decoration-none link-secondary"
                                    to="/locations"
                                >
                                    Locations
                                </Link>
                            </li>
                            <li className="breadcrumb-item">
                                <div className="text-decoration-none link-secondary">
                                    {location.category}
                                </div>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                {location.locationName}
                            </li>
                        </ol>
                    </nav>
                    <div className="row mb-4">
                        <div className="d-none d-lg-block col-lg-1">
                            <div className="image-vertical-scroller">
                                <div className="d-flex flex-column">
                                    {images.map((image, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleCarasole(index)}
                                            className="image-cursor-type"
                                        >
                                            <img
                                                className={"rounded mb-2 ratio "}
                                                alt={image}
                                                src={image}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-12 mb-4">
                                    <img
                                        className="border rounded ratio ratio-1x1 w-100"
                                        alt=""
                                        src={images[active]}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <h2 className="mb-1">{location.locationName}</h2>
                            <h4 className="text-muted mb-4">{location.category}</h4>
                            <h4 className="mb-0">Description</h4>
                            <hr/>
                            <p className="lead flex-shrink-0">
                                <small>{location.description}</small>
                            </p>
                            <div className="d-flex flex-column h-100">
                                <div className="row g-3 mb-4">
                                    <div className="col">
                                        <Link to={"/hotels"}>
                                            <button className="btn btn-dark py-2 w-100">
                                                Book a Hotel
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LocationDetails;

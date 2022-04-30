import React, {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {getLocations} from "../../redux/slices/locationApiHandle";

import "../../styles/LocationList.css";
import "../../styles/PaginationComponent.css";
import "../../styles/SearchBar.css";

const PER_PAGE = 6;

const LocationView = () => {
    const {locations, status} = useSelector((state) => state.locations);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();

    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(locations.length / PER_PAGE);

    //useEffectHook
    useEffect(() => {
        dispatch(getLocations());
    }, [dispatch]);

    const handlePageClick = ({selected: selectedPage}) => {
        console.log("Selected Page", selectedPage);
        setCurrentPage(selectedPage);
    };

    const currentPageData = locations
        .filter((value) => {
            if (searchTerm === "") {
                return value;
            } else if (
                value.locationName.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
                return value;
            } else {
                return "";
            }
        })
        .slice(offset, offset + PER_PAGE)
        .map((location) => (
            <Link to={`/locations/${location.locationId}`} key={location.locationId}>
                {/*<div className="col">*/}
                {/*    <div className="card shadow-sm">*/}
                {/*        <img*/}
                {/*            className="bd-placeholder-img card-img-top"*/}
                {/*            src={location.urls[0]}*/}
                {/*            alt={location.locationName}*/}
                {/*        ></img>*/}

                {/*        <div className="card-body">*/}
                {/*            <p className="card-text">{location.locationName}</p>*/}
                {/*            <div className="d-flex justify-content-between align-items-center">*/}
                {/*                <div className="btn-group">*/}
                {/*                    <button type="button" className="btn btn-sm btn-outline-dark">*/}
                {/*                        View*/}
                {/*                    </button>*/}
                {/*                </div>*/}
                {/*                <small className="text-muted">{location.category}</small>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div key={location.locationName} className="group relative pb-4">
                    <div
                        className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                        <img
                            src={location.urls[0]}
                            alt={location.locationId}
                            className="w-full h-full object-center object-cover"
                        />
                    </div>
                    <h1 className="mt-6 text-lg text-gray-500">
                        <span className="absolute inset-0"/>
                        {location.locationName}
                    </h1>
                    <p className="text-base font-semibold text-gray-900">{location.town}</p>
                </div>
            </Link>
        ));

    return (
        <div>
            {status === "loading" ? (
                <div
                    className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
            ) : (
                <div className="album">
                    <div className="s130">
                        <form>
                            <div className="inner-form">
                                <div className="input-field first-wrap">
                                    <div className="svg-wrapper">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                        </svg>
                                    </div>
                                    <input
                                        id="search"
                                        type="text"
                                        placeholder="What are you looking for?"
                                        onChange={(event) => {
                                            setSearchTerm(event.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <span className="info">ex. Game, Music, Video, Photography</span>
                        </form>
                    </div>

                    <div className="bg-gray">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-2xl mx-auto lg:max-w-none">
                                <h2 className="text-2xl font-extrabold text-gray-900">Popular Locations</h2>

                                <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                                    {currentPageData}
                                </div>
                            </div>
                            <div className="pagination-container container-fluid align-items-center py-5">
                                <ReactPaginate
                                    previousLabel={"← Previous"}
                                    nextLabel={"Next →"}
                                    pageCount={pageCount}
                                    onPageChange={handlePageClick}
                                    containerClassName={"pagination"}
                                    previousLinkClassName={"pagination__link"}
                                    nextLinkClassName={"pagination__link"}
                                    disabledClassName={"pagination__link--disabled"}
                                    activeClassName={"pagination__link--active"}
                                />
                            </div>
                        </div>
                    </div>

                    {/*<div className="container py-5">*/}
                    {/*    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">*/}
                    {/*        {currentPageData}*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            )}

        </div>
    );
};

export default LocationView;

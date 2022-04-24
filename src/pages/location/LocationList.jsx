import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

import { getLocations } from "../../redux/slices/locationApiHandle";
import "../../styles/LocationList.css";
import "../../styles/PaginationComponent.css";
import "../../styles/SearchBar.css";
import loadingImg from "../../assets/images/loading/loading-images.gif";

const PER_PAGE = 8;

const LocationView = () => {
  const { locations, status } = useSelector((state) => state.locations);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(locations.length / PER_PAGE);

  //useEffectHook
  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  const handlePageClick = ({ selected: selectedPage }) => {
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
        <div className="col">
          <div className="card shadow-sm">
            <img
              className="bd-placeholder-img card-img-top"
              src={location.locationImages[0].url || loadingImg}
              alt={location.locationName}
            ></img>

            <div className="card-body">
              <p className="card-text">{location.locationName}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-dark">
                    View
                  </button>
                </div>
                <small className="text-muted">{location.category}</small>
              </div>
            </div>
          </div>
        </div>
      </Link>
    ));

  return (
    <div>
      {status === "loading" ? (
        "loading..."
      ) : (
        <div className="album pb-5">
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
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
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

          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
              {currentPageData}
            </div>
          </div>
        </div>
      )}
      <div className="pagination-container container-fluid align-items-center my-3">
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
  );
};

export default LocationView;

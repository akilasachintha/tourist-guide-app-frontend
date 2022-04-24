import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import ReactPaginate from "react-paginate";

import touristGuideAppApi from "../../../apis/touristGuideAppApi";
import { getLocations } from "../../../redux/slices/locationApiHandle";
import "../../../styles/AdminDashboard.css";
import "../../../styles/PaginationComponent.css";
import "../../../styles/Table.css";

const PER_PAGE = 4;

const AdminDashboard = () => {
  const { locations } = useSelector((state) => state.locations);
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();

  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(locations.length / PER_PAGE);

  const handlePageClick = ({ selected: selectedPage }) => {
    console.log("Selected Page", selectedPage);
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  const deleteLocation = (locationId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        touristGuideAppApi
          .delete(`locations/${locationId}`)
          .then((res) => {
            console.log(res.data);
            dispatch(getLocations());
          })
          .catch((err) => {
            console.log("Err", err);
            toast.error("Deletion Error");
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const currentPageData = locations
    .slice(offset, offset + PER_PAGE)
    .map((location) => (
      <li className="table-row" key={location.locationId}>
        <div className="col col-1" data-label="Id">
          {location.locationId}
        </div>
        <div className="col col-2" data-label="Name">
          {location.locationName}
        </div>
        <div className="col col-3" data-label="District">
          {location.district}
        </div>
        <div className="col col-4" data-label="Category">
          {location.category}
        </div>
        <div className="col col-5" data-label="">
          <div className="btn-group dropstart" role="group">
            <button
              type="button"
              className="bi bi-three-dots-vertical dropdown-btn"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul className="dropdown-menu">
              <li className="list-item">
                <button className="dropdown-item" type="button">
                  <i className="bi bi-pencil"></i> Edit
                </button>
              </li>
              <li
                className="list-item"
                onClick={() => deleteLocation(location.locationId)}
              >
                <button className="dropdown-item icon-red" type="button">
                  <i className="bi bi-trash"></i> Delete
                </button>
              </li>
            </ul>
          </div>
        </div>
      </li>
    ));

  return (
    <div className="container-fluid p-4">
      <div className="btn-container">
        <Link to={"/locations/add"}>
          <button type="button" className="btn btn-dark mb-2 float-end">
            Add New Location
          </button>
        </Link>
      </div>
      <div className="table-container">
        <h2 className="table-title my-4">Location Dashboard</h2>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Id</div>
            <div className="col col-2">Name</div>
            <div className="col col-3">District</div>
            <div className="col col-4">Category</div>
            <div className="col col-5"></div>
          </li>
          {currentPageData}
        </ul>
      </div>
      <div className="pagination-container container-fluid align-items-center mt-5">
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

export default AdminDashboard;

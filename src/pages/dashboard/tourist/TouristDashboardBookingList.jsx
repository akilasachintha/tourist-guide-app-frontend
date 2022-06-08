import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import touristGuideAppApi from "../../../apis/touristGuideAppAPI";
import { toast } from "react-toastify";
import { fetchLocations } from "../../../redux/store/locationsSlice";
import img1 from "./pics/hotel.jpg";
import img2 from "./pics/vehicle.jpg";
import img3 from "./pics/guide.jpg";

function TouristDashboardBookingList() {
  const { bookings } = useSelector((state) => state.bookings);
  const dispatch = useDispatch();

  return (
    <div>

  </div>);
}


export default TouristDashboardBookingList;

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
 const bookingId = 1;


  return (
   <div>
     <div>
       <Link to={'/hotels'}>
     <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img src={img1}/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Hotel Booking</div>   
  </div>
</div>
</Link>
     </div>
        
    <div>
      <div className="">
          <div className="rounded bg-white p-8 shadow"> 
            {/* Order Summary  */}
            <div>
              <h3 className="mt-4 text-xl font-bold">Booking Summary</h3>
              {/*     BOX     */}
              <Link to={`/dashboard/tourists/bookings/${bookingId}`}>
              <div className="mt-5 flex w-full flex-wrap items-center justify-between rounded border p-4">
                <img
                  src={img2}
                  className="w-30 h-20"              
                />
                <div className="w-2/3">
                  <h3 className="text-lg font-medium">Toyota Corolla 141</h3>
                  <p className="text-xs text-bg-black">
                    <h1>Booking start date : 2022/04/08</h1>
                    <h1>Driver Name : Kamal</h1>
                  </p>                 
                </div>
                <div>
                  <h4 className="text-3xl font-medium">
                    <sup className="text-lg text-purple-800">$</sup> 20
                  </h4>                 
                </div>
                <div>
                  <h4 className="text-3xl font-medium">                   
                  </h4>
                </div>
                <div className="mt-4 flex w-full justify-between">                  
                  <label
                    className="block uppercase tracking-wide text-gray-700"
                    htmlFor="grid-first-name"
                  >                           
                  </label>
                </div>
              </div>             
              </Link>              
            </div>            
          </div>        
      </div>
    </div>
   </div>
  );
}


export default TouristDashboardBookingList;

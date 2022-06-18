import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Location from "./pages/locations/Location";
import PageNotFoundError from "./components/errors/PageNotFoundError";
import UserViewRoutes from "./routes/userViewRoutes/UserViewRoutes";
import LocationDetailPage from "./pages/locations/LocationDetailPage";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import AdminDashboardLocations from "./pages/dashboard/admin/AdminDashboardLocations";
import AddNewLocation from "./pages/dashboard/admin/AddNewLocation";
import VehicleList from "./pages/vehicles/VehicleList";
import DriverDashboardHome from "./pages/dashboard/driver/DriverDashboardHome";
import DriverDashboardVehicleList from "./pages/dashboard/driver/DriverDashboardVehicleList";
import AddNewVehicle from "./pages/dashboard/driver/AddNewVehicle";
import TouristDashboardBookingList from "./pages/dashboard/tourist/TouristDashboardBookingList";
import BookingDetails from "./pages/dashboard/tourist/BookingDetails";

import List from "./pages/hotels/List";
import HomeH from "./pages/hotels/HomeH";
import AddNewHotel from "./pages/dashboard/hotels/AddNewHotel";
import HotelDashboardList from "./pages/dashboard/hotels/HotelDashboardList";
import AddHotelFeatures from "./pages/dashboard/hotels/AddHotelFeatures";
import Register from "./pages/auth/register/Register";
import { ToastContainer } from "react-toastify";
import Userprofile from "./pages/dashboard/tourist/Userprofile";
import DriverHome from "./pages/dashboard/driver/DriverHome";
import VehicleDetailPage from "./pages/vehicles/VehicleDetailPage";
import HotelDetails from "./pages/hotels/HotelDetails";
import HotelRoomDetails from "./pages/dashboard/hotels/HotelRoomDetails";
import GuideProfile from "./pages/dashboard/guide/GuideProfile";
import GuidesHome from "./pages/guides/GuidesHome";
import UserViewRoutesTwo from "./routes/userViewRoutes/UserViewRoutesTwo";
import Checking from "./pages/checking/Checking";
import Testing from "./Testing";
import HotelBookingForm from "./pages/hotels/HotelBookingForm";
import HotelAddedRoomList from "./pages/dashboard/hotels/HotelAddedRoomList";
import AdminAcceptNotifications from "./pages/dashboard/admin/AdminAcceptNotifications";
import Auth from "./pages/auth/Auth";
import Login from "./pages/auth/login/Login";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import DriverProfileUpdate from "./pages/dashboard/driver/DriverProfileUpdate";
import PendingRequests from "./components/errors/PendingRequests";


const App = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="font-raleway">
      <Router>
        <ScrollToTop />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route path="/" element={<UserViewRoutes />}>
            <Route path="" element={<Home />} />
            <Route path="locations" element={<Location />} />
            <Route path="locations/:id" element={<LocationDetailPage />} />
            <Route path="checking" element={<Checking />} />
            <Route path="vehicles" element={<VehicleList />} />
            <Route path="vehicles/:id" element={<VehicleDetailPage />} />
            <Route path="/hotels/" element={<List />} />
            <Route path="/driver/" element={<DriverDashboardHome />} />

            <Route path="/hotels/list/:id" element={<HotelDetails/>}/>
            <Route path="/hotels/list/:id/bookingform" element={<HotelBookingForm/>}/>
          </Route>

          <Route path="guides" element={<UserViewRoutesTwo />}>
            <Route path="home" element={<GuidesHome />} />
          </Route>

          <Route path="dashboard/tourists" element={<ProtectedRoute />}>
            <Route path="" element={<Userprofile />} />
            <Route path="bookings" element={<TouristDashboardBookingList />} />
            <Route path="bookings/:id" element={<BookingDetails />} />
          </Route>

          <Route path="dashboard/admin" element={<ProtectedRoute />}>
            <Route path="" element={<AdminAcceptNotifications />} />
            <Route path="locations" element={<AdminDashboardLocations />} />
            <Route path="profile" element={<AdminDashboardLocations />} />
            <Route path="locations/add" element={<AddNewLocation />} />
          </Route>

          <Route path="dashboard/drivers" element={<ProtectedRoute />}>
            <Route index element={<DriverHome />} />
            <Route path="vehicles" element={<DriverDashboardVehicleList />} />
            <Route path="profile" element={<DriverProfileUpdate />} />
            <Route path="addVehicles" element={<AddNewVehicle />} />
          </Route>

          <Route path="dashboard/guides" element={<Auth />}>
            <Route path="" element={<GuideProfile />} />
          </Route>
          <Route path="dashboard/hotels" element={<Auth />}>
            <Route path="hotellist" element={<HotelDashboardList />} />
            <Route path="profile" element={<AdminDashboardLocations />} />
            <Route path="hotels/add" element={<AddNewHotel />} />
            <Route path="hotels/add/hotellist/roomdetails" element={<HotelRoomDetails />} />
            <Route path="hotellist/roomdetails" element={<HotelRoomDetails />} />
            <Route
              path="hotels/add/hotelfeatures"
              element={<AddHotelFeatures />}
            />
            <Route path="hotellist/:id" element={<HotelAddedRoomList />} />
          </Route>
          <Route path="auth/register" element={<Register />} />
          <Route path="pending" element={<PendingRequests />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="testing" element={< Testing />} />
          <Route path="*" element={<PageNotFoundError />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Location from "./pages/locations/Location";
import PageNotFoundError from "./components/errors/PageNotFoundError";
import UserViewRoutes from "./routes/userViewRoutes/UserViewRoutes";
import LocationDetailPage from "./pages/locations/LocationDetailPage";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import AdminDashboardHome from "./pages/dashboard/admin/AdminDashboardHome";
import AdminDashboardLocations from "./pages/dashboard/admin/AdminDashboardLocations";
import Login from "./pages/auth/login/Login";
import AddNewLocation from "./pages/dashboard/admin/AddNewLocation";
import VehicleList from "./pages/vehicles/VehicleList";
import DriverDashboardHome from "./pages/dashboard/driver/DriverDashboardHome";
import DriverDashboardVehicleList from "./pages/dashboard/driver/DriverDashboardVehicleList";
import AddNewVehicle from "./pages/dashboard/driver/AddNewVehicle";
import TouristDashboardHome from "./pages/dashboard/tourist/TouristDashboardHome";
import TouristDashboardBookingList from "./pages/dashboard/tourist/TouristDashboardBookingList";
import BookingDetails from "./pages/dashboard/tourist/BookingDetails";

import List from "./pages/hotels/List";
import HomeH from "./pages/hotels/HomeH";
import HotelDashboardHome from "./pages/dashboard/hotels/HotelDashboardHome";
import AddNewHotel from "./pages/dashboard/hotels/AddNewHotel";
import HotelDashboardList from "./pages/dashboard/hotels/HotelDashboardList";
import AddHotelFeatures from "./pages/dashboard/hotels/AddHotelFeatures";
import Register from "./pages/auth/register/Register";
import { ToastContainer } from "react-toastify";
import GuideDashboardHome from "./pages/dashboard/guide/GuideDashboardHome";
import Userprofile from "./pages/dashboard/tourist/Userprofile";
import DriverHome from "./pages/dashboard/driver/DriverHome";


const App = () => {
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
            <Route path="vehicles" element={<VehicleList />} />
            <Route path="/hotels/" element={<HomeH />} />
            <Route path="/driver/" element={<DriverDashboardHome />} />
            <Route path="/hotels/list" element={<List />} />
          </Route>

          <Route path="dashboard/admin" element={<AdminDashboardHome />}>
            <Route path="locations" element={<AdminDashboardLocations />} />
            <Route path="profile" element={<AdminDashboardLocations />} />
            <Route path="locations/add" element={<AddNewLocation />} />
          </Route>
          <Route path="dashboard/drivers" element={<DriverDashboardHome />}>
            <Route path="" element={<DriverHome />} />
            <Route path="vehicles" element={<DriverDashboardVehicleList />} />
            <Route path="profile" element={<AdminDashboardLocations />} />
            <Route path="addVehicles" element={<AddNewVehicle />} />
          </Route>
          <Route path="dashboard/tourists" element={<TouristDashboardHome />}>
            <Route path="" element={<Userprofile />} />
            <Route path="bookings" element={<TouristDashboardBookingList />} />
            <Route path="bookings/:id" element={<BookingDetails />} />
          </Route>
          <Route
            path="dashboard/guides"
            element={<GuideDashboardHome />}
          ></Route>
          <Route path="dashboard/hotels" element={<HotelDashboardHome />}>
            <Route path="hotellist" element={<HotelDashboardList />} />
            <Route path="profile" element={<AdminDashboardLocations />} />
            <Route path="hotels/add" element={<AddNewHotel />} />
            <Route
              path="hotels/add/hotelfeatures"
              element={<AddHotelFeatures />}
            />
          </Route>
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />} />
          <Route path="*" element={<PageNotFoundError />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

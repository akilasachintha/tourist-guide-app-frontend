import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Location from "./pages/locations/Location";
import PageNotFoundError from "./components/errors/PageNotFoundError";
import UserViewRoutes from "./routes/userViewRoutes/UserViewRoutes";
import LocationDetailPage from "./pages/locations/LocationDetailPage";
import Vehicle from "./pages/vehicles/Vehicle";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import TestScreens from "./test/TestScreens";
import AdminDashboardHome from "./pages/dashboard/admin/AdminDashboardHome";
import AdminDashboardLocations from "./pages/dashboard/admin/AdminDashboardLocations";
import Login from "./pages/auth/login/Login";
import AddNewLocation from "./pages/dashboard/admin/AddNewLocation";
import VehicleList from "./pages/vehicles/VehicleList";
import DriverDashboardHome from "./pages/dashboard/driver/DriverDashboardHome";
import DriverDashboardVehicleList from "./pages/dashboard/driver/DriverDashboardVehicleList";
import AddNewVehicle from "./pages/dashboard/driver/AddNewVehicle";
import RegistrationComponent from "./pages/auth/registration/RegistrationComponent";
import NewpasswordComponent from "./pages/auth/newpassword/NewpasswordComponent";
import ForgotpasswordComponent from "./pages/auth/forgotpassword/ForgotpasswordComponent";

const App = () => {
  return (
    <div className="font-raleway">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<UserViewRoutes />}>
            <Route path="" element={<Home />} />
            <Route path="locations" element={<Location />} />
            <Route path="locations/:id" element={<LocationDetailPage />} />
            <Route path="vehicles" element={<VehicleList />} />
          </Route>
          <Route path="dashboard/admin" element={<AdminDashboardHome />}>
            <Route path="locations" element={<AdminDashboardLocations />} />
            <Route path="profile" element={<AdminDashboardLocations />} />
            <Route path="locations/add" element={<AddNewLocation />} />
          </Route>
          <Route path="dashboard/drivers" element={<DriverDashboardHome />}>
            <Route path="vehicles" element={<DriverDashboardVehicleList />} />
            <Route path="profile" element={<AdminDashboardLocations />} />
            <Route path="locations/add" element={<AddNewVehicle />} />
          </Route>
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<RegistrationComponent />} />
          <Route path="auth/forgotpassword" element={<ForgotpasswordComponent />} />
          <Route path="auth/newpassword" element={<NewpasswordComponent />} />
          <Route path="/test" element={<TestScreens />}></Route>
          <Route path="*" element={<PageNotFoundError />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

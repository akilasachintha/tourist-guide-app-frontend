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
            <Route path="vehicles" element={<Vehicle />} />
          </Route>
          <Route path="dashboard/admin" element={<AdminDashboardHome />}>
            <Route path="locations" element={<AdminDashboardLocations />} />
            <Route path="profile" element={<AdminDashboardLocations />} />
            <Route path="locations/add" element={<AddNewLocation />} />
          </Route>
          <Route path="auth/login" element={<Login />} />
          <Route path="/test" element={<TestScreens />}></Route>
          <Route path="*" element={<PageNotFoundError />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

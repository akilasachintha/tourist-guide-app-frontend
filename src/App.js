import DashboardComponent from "./components/pages/dashboard/DashboardComponent";
import NavBar from "../src/components/header/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/pages/home/HomeComponent";
import LoginComponent from "./components/pages/login/LoginComponent";
import FooterComponent from "./components/footer/FooterComponent";
import AddNewLocationForm from "./components/pages/dashboard/locations/AddNewLocationForm";
import LocationComponent from "./components/pages/dashboard/locations/LocationComponent";
import "./App.css";
import RegistrationComponent from "./components/pages/registration/RegistrationComponent";


const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/dashboard/location/add-new-location"
            element={<AddNewLocationForm />}
          ></Route>
          <Route
            path="/dashboard/location"
            element={<LocationComponent />}
          ></Route>
          <Route path="/dashboard" element={<DashboardComponent />}></Route>
          <Route path="/" exact element={<HomeComponent />}></Route>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route path="/registration"  element={<RegistrationComponent />}></Route>
        </Routes>
        <FooterComponent />
      </Router>
    </>
  );
};

export default App;

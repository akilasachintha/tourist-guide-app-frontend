import { configureStore } from "@reduxjs/toolkit";
import vehiclesReducer from "./vehiclesSlice";
import locationsReducer from "./locationsSlice";
import appUserReducer from "./appUserSlice";
import authSlice from "./authSlice";
import vehiclesByIdSlice from "./vehiclesByIdSlice";


export default configureStore({
  reducer: {
    locations: locationsReducer,
    vehicles: vehiclesReducer,
    appUser: appUserReducer,
    auth: authSlice,
    vehiclesById: vehiclesByIdSlice
  },
});
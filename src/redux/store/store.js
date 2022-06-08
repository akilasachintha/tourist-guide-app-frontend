import { configureStore } from "@reduxjs/toolkit";
import vehiclesReducer from "./vehiclesSlice";
import locationsReducer from "./locationsSlice";
import appUserReducer from "./appUserSlice";
import authSlice from "./authSlice";
import vehiclesByIdSlice from "./vehiclesByIdSlice";
import bookingsSlice from "./bookingsSlice";
import guidesSlice from "./guidesSlice";

export default configureStore({
  reducer: {
    locations: locationsReducer,
    vehicles: vehiclesReducer,
    appUser: appUserReducer,
    auth: authSlice,
    vehiclesById: vehiclesByIdSlice,
    bookings: bookingsSlice,
    guides: guidesSlice
  },
});

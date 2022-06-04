import { configureStore } from "@reduxjs/toolkit";
import vehiclesReducer from "./vehiclesSlice";
import locationsReducer from "./locationsSlice";

export default configureStore({
  reducer: {
    locations: locationsReducer,
    vehicles: vehiclesReducer,
  },
});

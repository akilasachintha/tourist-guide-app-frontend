import { configureStore } from "@reduxjs/toolkit";
import vehiclesReducer from "./vehiclesSlice";
import locationsReducer from "./locationsSlice";
import appUserReducer from "./appUserSlice";
import adminApprovalSlice from "./adminApprovalSlice";
import vehiclesByIdSlice from "./vehiclesByIdSlice";
import bookingsSlice from "./bookingsSlice";
import hotelslice from "./hotelslice";
import guidesSlice from "./guidesSlice";
import roomCategorySlice from "./roomCategorySlice";
import avilableHotelSlice from "./avilableHotelSlice";
import hotelsByIdSlice from "./hotelsByIdSlice";
import getUserRatingSlice from "./getUserRatingSlice";
import checkingDriverStatusSlice from "./checkingDriverStatusSlice";
import checkingGuideStatusSlice from "./checkingGuideStatusSlice";
import availableGuideSlice from "./availableGuideSlice";
import availableDriverSlice from "./availableDriverSlice";
import paymentSlice from "./paymentSlice";
import vehicleByDriverSlice from "./vehiclesByDriverSlice";
import checkingHotelStatusSlice from "./checkingHotelStatusSlice";

export default configureStore({
  reducer: {
    locations: locationsReducer,
    vehicles: vehiclesReducer,
    appUser: appUserReducer,
    vehiclesById: vehiclesByIdSlice,
    hotels: hotelslice,
    bookings: bookingsSlice,
    guides: guidesSlice,
    category: roomCategorySlice,
    adminApproval: adminApprovalSlice,
    availableHotels: avilableHotelSlice,
    hotelsById: hotelsByIdSlice,
    guideRating: getUserRatingSlice,
    driverBooking: checkingDriverStatusSlice,
    guideBooking: checkingGuideStatusSlice,
    hotelBookings: checkingHotelStatusSlice,
    availableGuides: availableGuideSlice,
    availableDrivers: availableDriverSlice,
    payment: paymentSlice,
    vehiclesByDriver: vehicleByDriverSlice
  }
});

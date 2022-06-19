import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import touristGuideAppAPI from "../../apis/touristGuideAppAPI";

export const fetchAdminApprovalDrivers = createAsyncThunk(
  "approveAdmin/fetchAdminApprovalDrivers",
  async () => {
    try {
      const response = await touristGuideAppAPI.get(`approve/get/pending/driver`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.body);
    }
  }
);

export const fetchAdminApprovalVehicles = createAsyncThunk(
  "approveAdmin/fetchAdminApprovalVehicles",
  async () => {
    try {
      const response = await touristGuideAppAPI.get(`approve/get/pending/vehicle`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.body);
    }
  }
);

export const fetchAdminApprovalGuides = createAsyncThunk(
  "approveAdmin/fetchAdminApprovalGuides",
  async () => {
    try {
      const response = await touristGuideAppAPI.get(`approve/get/pending/guide`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.body);
    }
  }
);

export const fetchAdminApprovalHotelOwners = createAsyncThunk(
  "approveAdmin/fetchAdminApprovalHotelOwners",
  async () => {
    try {
      const response = await touristGuideAppAPI.get(`approve/get/pending/hotelowner`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.body);
    }
  }
);

export const fetchAdminApprovalHotels = createAsyncThunk(
  "approveAdmin/fetchAdminApprovalHotels",
  async () => {
    try {
      const response = await touristGuideAppAPI.get(`approve/get/pending/hotel`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.body);
    }
  }
);

export const fetchAdminApprovalHotelRooms = createAsyncThunk(
  "approveAdmin/fetchAdminApprovalHotelRooms",
  async () => {
    try {
      const response = await touristGuideAppAPI.get(`approve/get/pending/hotelroom`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.body);
    }
  }
);


const initialState = {
  drivers: [],
  vehicles: [],
  guides: [],
  hotelOwners: [],
  hotels: [],
  hotelRooms: []
};

// Then, handle actions in your reducers:
const adminApprovalSlice = createSlice({
  name: "approveAdmin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAdminApprovalDrivers.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchAdminApprovalDrivers.fulfilled, (state, action) => {
      state.drivers = action.payload;
    });
    builder.addCase(fetchAdminApprovalVehicles.fulfilled, (state, action) => {
      state.vehicles = action.payload;
    });
    builder.addCase(fetchAdminApprovalGuides.fulfilled, (state, action) => {
      state.guides = action.payload;
    });
    builder.addCase(fetchAdminApprovalHotelOwners.fulfilled, (state, action) => {
      state.hotelOwners = action.payload;
    });
    builder.addCase(fetchAdminApprovalHotels.fulfilled, (state, action) => {
      state.hotels = action.payload;
    });
    builder.addCase(fetchAdminApprovalHotelRooms.fulfilled, (state, action) => {
      state.hotelRooms = action.payload;
    });
    builder.addCase(fetchAdminApprovalDrivers.rejected, (state) => {
      state.loading = "failed";
    });
  }
});

export default adminApprovalSlice.reducer;

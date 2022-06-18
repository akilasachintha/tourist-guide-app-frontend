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


const initialState = {
  drivers: [],
  vehicles: [],
  guides: [],
  hotelOwners: []
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
    builder.addCase(fetchAdminApprovalDrivers.rejected, (state) => {
      state.loading = "failed";
    });
  }
});

export default adminApprovalSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import touristGuideAppAPI from "../../apis/touristGuideAppAPI";

// First, create the thunk
export const fetchVehicles = createAsyncThunk(
  "vehicles/fetchVehicles",
  async () => {
    try {
      const response = await touristGuideAppAPI.get("/vehicles");
      console.log(response.data.vehicles);
      return response.data.vehicles;
    } catch (error) {
      console.log(error.response.body);
    }
  }
);

const initialState = {
  vehicles: [],
  loading: "idle", //"idle" | "pending" | "succeeded" | "failed"
};

// Then, handle actions in your reducers:
const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVehicles.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchVehicles.fulfilled, (state, action) => {
      state.vehicles = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(fetchVehicles.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export default vehiclesSlice.reducer;

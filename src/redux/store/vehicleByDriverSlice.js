import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import touristGuideAppAPI from "../../apis/touristGuideAppAPI";

export const fetchVehiclesByDriver = createAsyncThunk(
  "vehiclesByDriver/fetchVehiclesByDriver",
  async () => {
    try {
      let driver = JSON.parse(localStorage.getItem('driver'));
      const response = await touristGuideAppAPI.get(`/vehicles/${driver.userId}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.body);
    }
  }
);

const initialState = {
  vehiclesByDriver: [],
  loading: "idle" //"idle" | "pending" | "succeeded" | "failed"
};

// Then, handle actions in your reducers:
const vehiclesByDriverSlice = createSlice({
  name: "vehiclesByDriver",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVehiclesByDriver.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchVehiclesByDriver.fulfilled, (state, action) => {
      state.vehiclesByDriver = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(fetchVehiclesByDriver.rejected, (state) => {
      state.loading = "failed";
    });
  }
});

export default vehiclesByDriverSlice.reducer;

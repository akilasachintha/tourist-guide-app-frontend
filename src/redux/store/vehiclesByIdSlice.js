import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import touristGuideAppAPI from "../../apis/touristGuideAppAPI";

export const fetchVehiclesById = createAsyncThunk(
  "vehiclesById/fetchVehiclesById",
  async () => {
    try {
      let user = JSON.parse(localStorage.getItem('user'));
      const response = await touristGuideAppAPI.get(`/vehicles/${user.userId}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.body);
    }
  }
);

const initialState = {
  vehiclesById: [],
  loading: "idle" //"idle" | "pending" | "succeeded" | "failed"
};

// Then, handle actions in your reducers:
const vehiclesByIdSlice = createSlice({
  name: "vehiclesById",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVehiclesById.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchVehiclesById.fulfilled, (state, action) => {
      state.vehiclesById = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(fetchVehiclesById.rejected, (state) => {
      state.loading = "failed";
    });
  }
});

export default vehiclesByIdSlice.reducer;

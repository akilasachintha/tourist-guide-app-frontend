import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import touristGuideAppAPI from "../../apis/touristGuideAppAPI";

export const fetchBookings = createAsyncThunk(
  "bookings/fetchBookings",
  async () => {
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      const response = await touristGuideAppAPI.get("/booking/getByTourist", {
        params: { id: user.userId },
      });
      return response.data;
    } catch (error) {
      console.log(error.response.body);
    }
  }
);

const initialState = {
  bookings: [],
  loading: "idle", //"idle" | "pending" | "succeeded" | "failed"
};

// Then, handle actions in your reducers:
const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBookings.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchBookings.fulfilled, (state, action) => {
      state.bookings = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(fetchBookings.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export default bookingsSlice.reducer;

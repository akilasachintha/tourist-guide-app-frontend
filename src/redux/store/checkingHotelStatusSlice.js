import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import touristGuideAppAPI from "../../apis/touristGuideAppAPI";

export const fetchCheckingHotelStatus = createAsyncThunk(
  "checkingHotelStatusSlice/fetchCheckingHotelStatus",
  async () => {
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      console.log(user.userId);
      const response = await touristGuideAppAPI.get("/booking/temporaryBooking/checkHotelIsPending", {
        params: { owner: user.userId }
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.body);
    }
  }
);

const initialState = {
  hotelBookings: [],
  loading: "idle" //"idle" | "pending" | "succeeded" | "failed"
};

// Then, handle actions in your reducers:
const checkingHotelStatusSlice = createSlice({
  name: "checkingHotelStatus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCheckingHotelStatus.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchCheckingHotelStatus.fulfilled, (state, action) => {
      state.hotelBookings = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(fetchCheckingHotelStatus.rejected, (state) => {
      state.loading = "failed";
    });
  }
});

export default checkingHotelStatusSlice.reducer;

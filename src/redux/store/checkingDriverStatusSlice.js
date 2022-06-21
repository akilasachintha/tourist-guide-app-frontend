import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import touristGuideAppAPI from "../../apis/touristGuideAppAPI";

export const fetchCheckingDriverStatus = createAsyncThunk(
  "checkingDriverStatusSlice/fetchCheckingDriverStatus",
  async () => {
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      console.log(user.userId);
      const response = await touristGuideAppAPI.get("/booking/temporaryBooking/checkDriverIsPending", {
        params: { id: user.userId }
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.body);
    }
  }
);

const initialState = {
  driverBooking: {},
  loading: "idle" //"idle" | "pending" | "succeeded" | "failed"
};

// Then, handle actions in your reducers:
const checkingDriverStatusSlice = createSlice({
  name: "checkingDriverStatus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCheckingDriverStatus.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchCheckingDriverStatus.fulfilled, (state, action) => {
      state.driverBooking = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(fetchCheckingDriverStatus.rejected, (state) => {
      state.loading = "failed";
    });
  }
});

export default checkingDriverStatusSlice.reducer;

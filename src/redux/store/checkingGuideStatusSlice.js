import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import touristGuideAppAPI from "../../apis/touristGuideAppAPI";

export const fetchCheckingGuideStatus = createAsyncThunk(
  "checkingGuideStatusSlice/fetchCheckingGuideStatus",
  async () => {
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      console.log(user.userId);
      const response = await touristGuideAppAPI.get("/booking/temporaryBooking/checkGuideIsPending", {
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
  guideBooking: {},
  loading: "idle" //"idle" | "pending" | "succeeded" | "failed"
};

// Then, handle actions in your reducers:
const checkingGuideStatusSlice = createSlice({
  name: "checkingDriverStatus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCheckingGuideStatus.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchCheckingGuideStatus.fulfilled, (state, action) => {
      state.guideBooking = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(fetchCheckingGuideStatus.rejected, (state) => {
      state.loading = "failed";
    });
  }
});

export default checkingGuideStatusSlice.reducer;

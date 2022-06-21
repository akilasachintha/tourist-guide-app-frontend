import { createAsyncThunk, createSlice, getType } from "@reduxjs/toolkit";
import touristGuideAppAPI from "../../apis/touristGuideAppAPI";

export const fetchAvailableHotels = createAsyncThunk(
  "availableHotels/fetchAvailableHotels",
  async () => {
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      let gettype = localStorage.getItem("type");
      let getamount = localStorage.getItem("amount");
      let startDay = parseInt(JSON.parse(localStorage.getItem("startDate")))
      let startMonth =parseInt(JSON.parse(localStorage.getItem("startMonth")))
      let startYear = parseInt(JSON.parse(localStorage.getItem("startYear"))) -2000
      let checkIn = startDay*24+startMonth*24*30+startYear*24*30*12
      const response = await touristGuideAppAPI.get("/hotel/hotelRoom/getAvailableHotels", {
        params: { type: gettype, amount: getamount,startCount : checkIn.toString() }
      });
      return response.data;
    } catch (error) {
      console.log(error.response.body);
    }
  }
);

const initialState = {
  availableHotels: [],
  loading: "idle" //"idle" | "pending" | "succeeded" | "failed"
};

// Then, handle actions in your reducers:
const availableHotelSlice = createSlice({
  name: "availableHotels",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAvailableHotels.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchAvailableHotels.fulfilled, (state, action) => {
      state.availableHotels = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(fetchAvailableHotels.rejected, (state) => {
      state.loading = "failed";
    });
  }
});

export default availableHotelSlice.reducer;
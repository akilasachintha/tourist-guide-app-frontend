import { createAsyncThunk, createSlice, getType } from "@reduxjs/toolkit";
import touristGuideAppAPI from "../../apis/touristGuideAppAPI";

export const fetchAvailableHotels = createAsyncThunk(
  "availableHotels/fetchAvailableHotels",
  async () => {
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      let gettype = localStorage.getItem("type");
      let getamount = localStorage.getItem("amount");
      const response = await touristGuideAppAPI.get("/hotel/hotelRoom/getAvailableHotels", {
        params: { type: gettype, amount: getamount }
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
import { createAsyncThunk, createSlice, getType } from "@reduxjs/toolkit";
import touristGuideAppAPI from "../../apis/touristGuideAppAPI";

export const fetchPayment = createAsyncThunk(
  "payment/fetchPayment",
  async () => {
    try {
      let vehicle = localStorage.getItem("vehicle");
      let guide = localStorage.getItem("guide");
      let hotel = localStorage.getItem("hotel");
      let amount = localStorage.getItem("amount");
      let type = localStorage.getItem("type");
      let dayCount = parseInt(localStorage.getItem("dayCount"))
      let guide2 = guide? parseInt(guide):null
      let vehicle2 = vehicle? parseInt(vehicle):null
      let hotel2 = hotel? parseInt(hotel):null
      let type2 = type? type.toString:null
      let dayCount2 = dayCount? parseInt(dayCount):null
      let amount2 = amount? parseInt(amount):null
      const response = await touristGuideAppAPI.post("/booking/getPayment",{
        hotelId : hotel2,
        categoryType:type2,
        roomCount:amount2,
        dayCount:dayCount2,
        guideId : guide2,
        vehicleId  : vehicle2,

      });
      return response.data;
    } catch (error) {
      console.log(error.response.body);
    }
  }
);

const initialState = {
  payment: [],
  loading: "idle" //"idle" | "pending" | "succeeded" | "failed"
};

// Then, handle actions in your reducers:
const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPayment.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchPayment.fulfilled, (state, action) => {
      state.payment = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(fetchPayment.rejected, (state) => {
      state.loading = "failed";
    });
  }
});

export default paymentSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  booking: {}
};

export const requestBookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    putBooking: (state, action) => {
      state.booking = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { putBooking } = requestBookingSlice.actions;

export default requestBookingSlice.reducer;
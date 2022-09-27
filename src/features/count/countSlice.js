import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment(state) {
      return state + 1;
    },
  },
});

export const { increment } = countSlice.actions;

export default countSlice.reducer;

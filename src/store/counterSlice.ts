import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",
  initialState: {
    count: 10,
  },
  reducers: {
    increment(state) {
      state.count = state.count + 1;
      //   state.count += 1;
    },
  },
});
export const { increment } = countSlice.actions;
export default countSlice.reducer;

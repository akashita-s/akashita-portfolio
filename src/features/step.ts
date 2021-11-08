import { createSlice } from "@reduxjs/toolkit";

const initialValue = "Home";

export const stepSlice = createSlice({
  name: "step",
  initialState: { value: initialValue },
  reducers: {
    changeStep: (state, action) => {
      state.value = action.payload;
    },
   
  },
});

export const { changeStep } = stepSlice.actions;

export default stepSlice.reducer;
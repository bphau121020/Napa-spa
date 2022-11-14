import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    data: undefined,
  },
  reducers: {
    formChange: (state, action) => {
      state.data = action.payload?.data;
      return state;
    },
  },
});

// actions
export const formActions = formSlice.actions;

// reducer
const formReducer = formSlice.reducer;
export default formReducer;

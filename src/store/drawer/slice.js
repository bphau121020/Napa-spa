import { createSlice } from "@reduxjs/toolkit";

export const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    payRollDetail: {
      isOpen: false,
      data: undefined,
    },
  },
  reducers: {
    payRollDetailChange: (state, action) => {
      state.payRollDetail = action.payload?.payRollDetail;
      return state;
    },
  },
});

// actions
export const drawerActions = drawerSlice.actions;

// reducer
const drawerReducer = drawerSlice.reducer;
export default drawerReducer;

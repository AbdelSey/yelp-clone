import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const navSlice = createSlice({
  name: "navBar",
  initialState,
  reducers: {
    openNav: (state, action) => {
      state.isOpen = true;
    },
    closeNav: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openNav, closeNav } = navSlice.actions;

export default navSlice.reducer;

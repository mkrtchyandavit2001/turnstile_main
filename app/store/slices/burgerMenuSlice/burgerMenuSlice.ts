import {createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";


const initialState = {
  isOpenBurgerMenu: false,
};


const burgerMenuSlice = createSlice({
  name: "viewBurgerMenu",
  initialState,

  reducers: {
    toggleBurgerMenu: (state) => {
      state.isOpenBurgerMenu =!state.isOpenBurgerMenu;
    },
  },

});

export const selectIsOpenBurgerMenu = (state: RootState) => state.viewBurgerMenu.isOpenBurgerMenu;


export const {
    toggleBurgerMenu
} = burgerMenuSlice.actions;

export default burgerMenuSlice.reducer;
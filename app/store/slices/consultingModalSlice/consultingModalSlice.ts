import {createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";


const initialState = {
  isOpenConsultingModal: false,
  orderCode: '',
};


const consultingModalSlice = createSlice({
  name: "viewConsultingModal",
  initialState,

  reducers: {
    toggleConsultingModal: (state, {payload}) => {
      state.isOpenConsultingModal = payload.isview;
      state.orderCode = payload.orderCode;
    },
  },

});

export const selectIsOpenConsultingModal= (state:RootState) =>  state.viewConsultingModal.isOpenConsultingModal
export const selectOrderCode = (state:RootState) =>  state.viewConsultingModal.orderCode

export const {
    toggleConsultingModal
} = consultingModalSlice.actions;

export default consultingModalSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import viewBurgerMenuReducer from "@/app/store/slices/burgerMenuSlice/burgerMenuSlice"
import viewConsultingModalReducer from "@/app/store/slices/consultingModalSlice/consultingModalSlice"
export const store = configureStore({
  reducer: {
    viewBurgerMenu: viewBurgerMenuReducer,
    viewConsultingModal: viewConsultingModalReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

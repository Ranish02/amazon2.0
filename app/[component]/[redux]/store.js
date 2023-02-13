import { configureStore } from "@reduxjs/toolkit";
import cartSlicer from "./cartreducer";

export const store = configureStore({
  reducer: {
    cart: cartSlicer,
  },
});

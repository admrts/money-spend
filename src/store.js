import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "./control/productSlice";

const store = configureStore({
  reducer: {
    product: productSliceReducer,
  },
});
export default store;

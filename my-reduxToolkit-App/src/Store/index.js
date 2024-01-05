import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./Slices/CounterSlice";
import { ProductReducer } from "./Slices/ProductSlice";

const store = configureStore({
  reducer: {
    CounterReducer,
    ProductReducer,
  },
});

export default store;

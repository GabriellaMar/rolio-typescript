import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../product/productSlice";
import { basketReducer } from "../basket/basketSlice";

export const store = configureStore({
    reducer: {
     products: productsReducer,
     basket:  basketReducer,
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
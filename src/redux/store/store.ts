import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../product/productSlice";
import { basketReducer } from "../basket/basketSlice";
import { orderReducer } from "../Order/orderSlise";

export const store = configureStore({
    reducer: {
     products: productsReducer,
     basket:  basketReducer,
     orders: orderReducer,
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
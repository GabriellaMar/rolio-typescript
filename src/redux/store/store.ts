import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../product/productSlice";
import { basketReducer } from "../basket/basketSlice";
import { orderReducer } from "../order/orderSlise";
import { reviewReducer } from "../reviews/reviewSlise";

export const store = configureStore({
    reducer: {
     products: productsReducer,
     basket:  basketReducer,
     orders: orderReducer,
     reviews: reviewReducer,
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
import { RootState } from "../store/store";

export const selectBasketItem= (state: RootState) => state.basket;

export const selectBasketItemById = (productId: string) => (state: RootState) =>
  state.basket.basketItems.find((item) => item.productId === productId);

 
// export const selectBasketItem = (state: RootState) => state.basket;

// export const selectBasketItems = (state: RootState) => state.basket.items;
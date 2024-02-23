import { RootState } from "../store/store";

export const selectBasketItem= (state: RootState) => state.basket;

export const selectBasketItemById = (_id: string) => (state: RootState) =>
  state.basket.basketItems.find((item) => item._id === _id);


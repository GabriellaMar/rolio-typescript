import { Status } from "../product/types";

export type BasketItem = {
    productId: string;
    // title: string;
    // price: number;
    // img: string;
    // description?: string,
    // details?: string,
    quantity: number;
     totalPrice: number;
  };


  export  interface IBasketSliceState {
    items: BasketItem[];
    // totalPrice: number;
     status: Status;
  }
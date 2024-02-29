import {  Status } from "../product/types";

// export type BasketItem = {
//      productId: string;
//      quantity: number;
//    //   totalPrice: number;
//   };
export type BasketItem = {
      _id: string;
      title: string;
      img: string;
      price: number;
      quantity: number;
};

  export  interface IBasketSliceState {
   basketItems: BasketItem[];
     status: Status;
  }
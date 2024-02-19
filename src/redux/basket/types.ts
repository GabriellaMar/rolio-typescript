import {  Status } from "../product/types";

export type BasketItem = {
     productId: string;
     quantity: number;
   //   totalPrice: number;
  };
// export type BasketItem = {

//    product: Product; 
//     quantity: number;
// };

  export  interface IBasketSliceState {
   basketItems: BasketItem[];
    totalItems: number,
     status: Status;
  }
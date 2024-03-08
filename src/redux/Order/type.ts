import { BasketItem } from "../basket/types";
import { Status } from "../product/types";

export type Order = {
   _id?: string,
    userName: string;
    phone: string;
    products: BasketItem[],
    deliveryMethod: string,
    deliveryAddress: string,
};

export  interface IOrderSliceState {
  orders: Order[];
   status: Status;
}
import { RootState } from "../store/store";

export const selectOrders = (state: RootState) => state.orders;
export const selectOrderStatus = (state: RootState) => state.orders.status;
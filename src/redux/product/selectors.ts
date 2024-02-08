import { RootState } from "../store/store";

export const selectProductData= (state: RootState) => state.products;

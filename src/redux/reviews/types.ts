
import { Status } from "../product/types";

export type Review = {
   _id?: string,
    userName: string;
   comment: string;
};

export  interface IReviewsSliceState {
  reviews: Review[];
   status: Status;
}
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { Review } from "./types";

export const selectReviews = (state: RootState) => state.reviews;

export const selectReviewById = (_id: string) => createSelector(
    (state: RootState) => state.reviews.reviews,
    (reviews: Review[]) => reviews.find(review => review._id === _id)
  );
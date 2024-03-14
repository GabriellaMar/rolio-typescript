import { createSlice } from "@reduxjs/toolkit";
import { addReviewsThunk, fetchOReviewThunk, removeReviewThunk, resetReviewThunk, updateReviewThunk } from "../operations";
import { Status } from "../product/types";
import { IReviewsSliceState } from "./types";

const initialState: IReviewsSliceState = {
    reviews: [],
    status: Status.IDLE,

};

const reviewSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOReviewThunk.pending, (state) => {
                state.status = Status.LOADING;
            })
            .addCase(fetchOReviewThunk.fulfilled, (state, action) => {
                state.reviews= action.payload;
                state.status = Status.SUCCESS;
            })
            .addCase(fetchOReviewThunk.rejected, (state) => {
                state.status = Status.ERROR;
            })
            .addCase(addReviewsThunk.pending, (state) => {
                state.status = Status.LOADING;
            })
            .addCase(addReviewsThunk.fulfilled, (state, action) => {
                state.reviews.push(action.payload);  
                state.status = Status.SUCCESS;
            })
            .addCase(addReviewsThunk.rejected, (state) => {
                state.status = Status.ERROR;
            })
            .addCase(removeReviewThunk.pending, (state) => {
                state.status = Status.LOADING;
            })
            .addCase(removeReviewThunk.fulfilled, (state, action) => {
                state.reviews = state.reviews.filter(review => review._id !== action.payload._id);
                state.status = Status.SUCCESS;
            })
            .addCase(removeReviewThunk.rejected, (state) => {
                state.status = Status.ERROR;
            })
            .addCase(updateReviewThunk .pending, (state) => {
                state.status = Status.LOADING;
            })
            .addCase(updateReviewThunk.fulfilled, (state, action) => {
                const updatedReview = action.payload; 

                const updatedReviewIndex = state.reviews.findIndex(review => review._id === updatedReview._id);
        
                if (updatedReviewIndex !== -1) {
                    state.reviews[updatedReviewIndex] = updatedReview;
                }
                state.status = Status.SUCCESS;
            })
            .addCase(updateReviewThunk.rejected, (state) => {
                state.status = Status.ERROR;
            })
            .addCase(resetReviewThunk.pending, (state) => {
                state.status = Status.ERROR;
            })
            .addCase(resetReviewThunk.fulfilled, (state) => {
                state.reviews = [];
                state.status = Status.SUCCESS;
            })
            .addCase(resetReviewThunk.rejected, (state) => {
                state.status = Status.ERROR;
            })
    },
});

export const reviewReducer = reviewSlice.reducer;
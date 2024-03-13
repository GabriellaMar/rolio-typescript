import { createSlice } from "@reduxjs/toolkit";
import { addReviewsThunk, fetchOReviewThunk } from "../operations";
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
            // .addCase(removeOrderThunk.pending, (state) => {
            //     state.status = Status.LOADING;
            // })
            // .addCase(removeOrderThunk.fulfilled, (state, action) => {
            //     state.orders = state.orders.filter(order => order._id !== action.payload._id);
            //     state.status = Status.SUCCESS;
            // })
            // .addCase(removeBasketItemThunk.rejected, (state) => {
            //     state.status = Status.ERROR;
            // })
            // .addCase(updateOrderThunk .pending, (state) => {
            //     state.status = Status.LOADING;
            // })
            // .addCase(updateOrderThunk.fulfilled, (state, action) => {
            //     const updatedOrder = action.payload; 

            //     const updatedOrderIndex = state.orders.findIndex(order => order._id === updatedOrder._id);
        
            //     if (updatedOrderIndex !== -1) {
            //         state.orders[updatedOrderIndex] = updatedOrder;
            //     }
            //     state.status = Status.SUCCESS;
            // })
            // .addCase(updateOrderThunk .rejected, (state) => {
            //     state.status = Status.ERROR;
            // })
            // .addCase(resetOrderThunk.pending, (state) => {
            //     state.status = Status.ERROR;
            // })

            // .addCase(resetOrderThunk.fulfilled, (state) => {
            //     state.orders = [];
            //     state.status = Status.SUCCESS;
            // })
            // .addCase(resetOrderThunk.rejected, (state) => {
            //     state.status = Status.ERROR;
            // })
    },
});

export const reviewReducer = reviewSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { Status } from '../product/types';
import {  addOrderThunk, fetchOrdersThunk, removeBasketItemThunk, removeOrderThunk, resetOrderThunk, updateOrderThunk, } from '../operations';
import { IOrderSliceState } from './type';


const initialState: IOrderSliceState = {
    orders: [],
    status: Status.IDLE,

};

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrdersThunk.pending, (state) => {
                state.status = Status.LOADING;
            })
            .addCase(fetchOrdersThunk.fulfilled, (state, action) => {
                state.orders = action.payload;
                state.status = Status.SUCCESS;
            })
            .addCase(fetchOrdersThunk.rejected, (state) => {
                state.status = Status.ERROR;
            })
            .addCase(addOrderThunk.pending, (state) => {
                state.status = Status.LOADING;
            })
            .addCase(addOrderThunk.fulfilled, (state, action) => {
                state.orders.push(action.payload);  
                state.status = Status.SUCCESS;
            })
            .addCase(addOrderThunk.rejected, (state) => {
                state.status = Status.ERROR;
            })
            .addCase(removeOrderThunk.pending, (state) => {
                state.status = Status.LOADING;
            })
            .addCase(removeOrderThunk.fulfilled, (state, action) => {
                state.orders = state.orders.filter(order => order._id !== action.payload._id);
                state.status = Status.SUCCESS;
            })
            .addCase(removeBasketItemThunk.rejected, (state) => {
                state.status = Status.ERROR;
            })
            .addCase(updateOrderThunk .pending, (state) => {
                state.status = Status.LOADING;
            })
            .addCase(updateOrderThunk.fulfilled, (state, action) => {
                 const findOrder = state.orders.find(order => order._id === action.payload._id);
                 if (findOrder) {
                    state.orders = action.payload;
                 }
                state.status = Status.SUCCESS;
            })
            .addCase(updateOrderThunk .rejected, (state) => {
                state.status = Status.ERROR;
            })
            .addCase(resetOrderThunk.pending, (state) => {
                state.status = Status.ERROR;
            })

            .addCase(resetOrderThunk.fulfilled, (state) => {
                state.orders = [];
                state.status = Status.SUCCESS;
            })
            .addCase(resetOrderThunk.rejected, (state) => {
                state.status = Status.ERROR;
            })
    },
});

export const orderReducer = orderSlice.reducer;
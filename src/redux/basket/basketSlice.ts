import { createSlice } from '@reduxjs/toolkit';
import { IBasketSliceState } from '../basket/types';
import { Status } from '../product/types';
import { addBasketItemThunk, clearBasketThunk, fetchBasketItemsThunk, removeBasketItemThunk, updateBasketItemThunk, } from '../operations';


const initialState: IBasketSliceState = {
    basketItems: [],
    totalItems: 0,
    status: Status.IDLE,

};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBasketItemsThunk.pending, (state) => {
                state.status = Status.LOADING;
            })
            .addCase(fetchBasketItemsThunk.fulfilled, (state, action) => {
                state.basketItems = action.payload;
                state.status = Status.SUCCESS;
            })
            .addCase(fetchBasketItemsThunk.rejected, (state) => {
                state.status = Status.ERROR;
            })
            .addCase(addBasketItemThunk.pending, (state) => {
                state.status = Status.LOADING;
            })
            .addCase(addBasketItemThunk.fulfilled, (state, action) => {

                const findItem = state.basketItems.find(item => item._id === action.payload._id);
                if (findItem) {
                    findItem.quantity += 1;
                } else {
                    state.basketItems.push({ ...action.payload, quantity: 1 });
                }
                state.status = Status.SUCCESS;
            })
            .addCase(addBasketItemThunk.rejected, (state) => {
                state.status = Status.ERROR;
            })
            .addCase(removeBasketItemThunk.pending, (state) => {
                state.status = Status.LOADING;
            })
            .addCase(removeBasketItemThunk.fulfilled, (state, action) => {
                state.basketItems = state.basketItems.filter(item => item._id !== action.payload._id);
                state.status = Status.SUCCESS;
            })
            .addCase(removeBasketItemThunk.rejected, (state) => {
                state.status = Status.ERROR;
            })
            .addCase(updateBasketItemThunk.pending, (state) => {
                state.status = Status.LOADING;
            })
            .addCase(updateBasketItemThunk.fulfilled, (state, action) => {
                const findItem = state.basketItems.find(item => item._id === action.payload._id);
                if (findItem) {
                    findItem.quantity = action.payload.quantity;
                }
                state.status = Status.SUCCESS;
            })
            .addCase(updateBasketItemThunk.rejected, (state) => {
                state.status = Status.ERROR;
            })
            .addCase(clearBasketThunk.pending, (state) => {
                state.status = Status.ERROR;
            })

            .addCase(clearBasketThunk.fulfilled, (state) => {
                state.basketItems = [];
                state.status = Status.SUCCESS;
            })
            .addCase(clearBasketThunk.rejected, (state) => {
                state.status = Status.ERROR;
            })
    },
});

export const basketReducer = basketSlice.reducer;
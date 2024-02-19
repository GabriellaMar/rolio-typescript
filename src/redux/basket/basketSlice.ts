import { createSlice } from '@reduxjs/toolkit';
import {  IBasketSliceState } from '../basket/types';
import { Status } from '../product/types';
import { addBasketItemThunk, fetchBasketItemsThunk, removeBasketItemThunk } from '../operations';
// import { calculateProductItems } from '@/services/services';
// import { getTotalPrice } from '@/services/services';



const initialState: IBasketSliceState  = {
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
                // state.totalItems = calculateProductItems(action.payload);
                state.status = Status.SUCCESS;
            })
            .addCase(fetchBasketItemsThunk.rejected, (state) => {
                state.status = Status.ERROR;
            })
            .addCase(addBasketItemThunk.pending, (state) => {
                state.status = Status.LOADING;
            })
            .addCase(addBasketItemThunk.fulfilled, (state, action) => {

                const findItem = state.basketItems.find(item => item.productId === action.payload.productId);
                if (findItem) {
                    findItem.quantity += 1; 
                } else {
                    state.basketItems.push({...action.payload, quantity: 1});
                }
                state.status = Status.SUCCESS;
            })
            .addCase(addBasketItemThunk.rejected, (state) => {
                state.status = Status.ERROR;
            })
            .addCase(removeBasketItemThunk.pending, (state)=>{
                state.status = Status.LOADING;
            })
            .addCase(removeBasketItemThunk.fulfilled, (state, action) => {
                state.basketItems = state.basketItems.filter(item=>item.productId !== action.payload.productId);
                
            })
            .addCase(removeBasketItemThunk.rejected, (state) => {
                state.status = Status.ERROR;
            })
    },
});


// export const { addItem } = basketSlice.actions;
export const basketReducer =  basketSlice.reducer;
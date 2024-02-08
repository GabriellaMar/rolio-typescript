import { createSlice } from '@reduxjs/toolkit';
import {  IBasketSliceState } from '../basket/types';
import { Status } from '../product/types';
import { addBasketItemThunk, fetchBasketItemsThunk } from '../operations';
// import { getTotalPrice } from '@/services/services';



const initialState: IBasketSliceState  = {
   items: [],
//    totalPrice: 0,
   status: Status.LOADING,

};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
    //     addItem(state, action: PayloadAction<BasketItem>) {
    //         const findItem = state.items.find((obj) => obj.id === action.payload.id);
      
    //         if (findItem) {
    //           findItem.quantity++;
    //         } else {
    //           state.items.push({
    //             ...action.payload,
    //             quantity: 1,
    //           });
    //         }
      
    //         state.totalPrice = getTotalPrice(state.items);
    // }
},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBasketItemsThunk.pending, (state) => {
                state.status = Status.LOADING;
            })
            .addCase(fetchBasketItemsThunk.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = Status.SUCCESS;
            })
            .addCase(fetchBasketItemsThunk.rejected, (state) => {
                state.status = Status.ERROR;
            })
            .addCase(addBasketItemThunk.pending, (state) => {
                state.status = Status.LOADING;
            })
            .addCase(addBasketItemThunk.fulfilled, (state, action) => {

                const findItem = state.items.find(item => item.productId === action.payload.productId);
                if (findItem) {
                    findItem.quantity += 1; 
                } else {
                    state.items.push({...action.payload, quantity: 1});
                }
                state.status = Status.SUCCESS;
            })
            .addCase(addBasketItemThunk.rejected, (state) => {
                state.status = Status.ERROR;
            });
    },
});


// export const { addItem } = basketSlice.actions;
export const basketReducer =  basketSlice.reducer;
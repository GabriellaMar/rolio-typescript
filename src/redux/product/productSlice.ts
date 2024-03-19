import { createSlice } from '@reduxjs/toolkit';
import { fetchProductsThunk } from '../operations';
import { IProductSliceState, Status } from './types';

const initialState: IProductSliceState = {
    items: [],
    status: Status.IDLE,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsThunk.pending, (state) => {
                state.status = Status.LOADING;
            })
            .addCase(fetchProductsThunk.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = Status.SUCCESS;
            })
            .addCase(fetchProductsThunk.rejected, (state) => {
                state.status = Status.ERROR;
            });
    },
});

export const productsReducer =  productsSlice.reducer;
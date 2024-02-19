import { createSlice } from '@reduxjs/toolkit';
import { fetchProductsThunk } from '../operations';
import { IProductSliceState, Status } from './types';

// type Product = {
//     id: string,
//     title: string,
//     img: string,
//     description: string,
//     details: string,
//     price: number,
// };

// interface ProductsState {
//     entities: Product[];
//     loading: 'idle' | 'pending' | 'succeeded' | 'failed';
// }

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
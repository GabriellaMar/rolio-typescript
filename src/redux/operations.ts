// import { ProductTitle } from '@/shared/types';
import { createAsyncThunk } from '@reduxjs/toolkit';


import axios  from 'axios';
import { Product } from './product/types';
import { BasketItem} from './basket/types';

const instance = axios.create({
    baseURL: 'http://localhost:8000',
});


// type Product = {
//     id: string,
//     title: string,
//     img: string,
//     description: string,
//     details: string,
//     price: number,
   
// };

// type GetProductsResponse = {
//     data: Product [];
//   };


 

// Опис типу для повідомлення про помилку
interface ErrorPayload {
    message: string;
}

export const fetchProductsThunk = createAsyncThunk<Product[], void, { rejectValue: ErrorPayload }>(
    'products/fetchAllProducts',
    async (_, thunkApi) => {
        try {
            const { data } = await instance.get<Product[]>('/products');
            console.log(data);
            return data;
        } catch (error) {
            const errorMessage: string = (error as Error).message ;
            return thunkApi.rejectWithValue({ message: errorMessage });
        }
    }
);

// ----------Basket Thunks---------------------------


export const fetchBasketItemsThunk = createAsyncThunk<BasketItem[], void, { rejectValue: ErrorPayload }>('basket/fetchBasketItems',
    async (_, thunkApi) => {
        try {
            const { data } = await instance.get<BasketItem[]>('/basket');
            console.log("Basket data:", data)
            return data
        } catch (error) {
            const errorMessage: string = (error as Error).message ;
            return thunkApi.rejectWithValue({ message: errorMessage });
        }
    } 
    );




// export const addBasketItemThunk = createAsyncThunk<BasketItem, void, { rejectValue: ErrorPayload }>('basket/addBasketItem',
//     async (item, thunkApi) => {
//         try {
//             const { data } = await instance.post<BasketItem>('/basket', item);
//             console.log(data)
//             return data;

//         } catch (error) {
//             const errorMessage: string = (error as Error).message ;
//             return thunkApi.rejectWithValue({ message: errorMessage });
//         }
//     })

// export const addBasketItemThunk = createAsyncThunk<BasketItem, string, { rejectValue: ErrorPayload }>(
//     'basket/addBasketItem',
//     async (item, thunkApi) => {
//         try {
//             const { data } = await instance.post<BasketItem>('/basket',  item );
//             console.log(data);
//             return data;
//         } catch (error) {
//             const errorMessage: string = (error as Error).message;
//             return thunkApi.rejectWithValue({ message: errorMessage });
//         }
//     }
// );

export const addBasketItemThunk = createAsyncThunk<BasketItem, { productId: string, quantity: number }, { rejectValue: ErrorPayload }>(
    'basket/addBasketItem',
    async (item, thunkApi) => { 
        try {
            const { data } = await instance.post<BasketItem>('/basket', item); 
            console.log(data);
            return data;
        } catch (error) {
            const errorMessage: string = (error as Error).message;
            return thunkApi.rejectWithValue({ message: errorMessage });
        }
    }
);
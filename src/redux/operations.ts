// import { ProductTitle } from '@/shared/types';
import { createAsyncThunk } from '@reduxjs/toolkit';


import axios  from 'axios';
import { Product } from './product/types';
import { BasketItem} from './basket/types';

const instance = axios.create({
//    baseURL: 'http://localhost:8000',
     baseURL: 'https://rolio-backend-api.onrender.com'
});




 

// Опис типу для повідомлення про помилку
interface ErrorPayload {
    message: string;
}


interface UpdateBasketItemData {
    id: string;
    action: 'increment' | 'decrement';
}

export const fetchProductsThunk = createAsyncThunk<Product[], void, { rejectValue: ErrorPayload }>(
    'products/fetchAllProducts',
    async (_, thunkApi) => {
        try {
            const { data } = await instance.get<Product[]>('/products');
            //  console.log(data);
            return data;
        } catch (error) {
            const errorMessage: string = (error as Error).message ;
            return thunkApi.rejectWithValue({ message: errorMessage });
        }
    }
);

// ----------Basket Thunks---------------------------


export const fetchBasketItemsThunk = createAsyncThunk<BasketItem[], void, { rejectValue: ErrorPayload }>(
    'basket/fetchBasketItems',
    async (_, thunkApi) => {
        try {
    
            const { data } = await instance.get<BasketItem[]>('/basket');
          
            // console.log("Basket data:", data)
         
            return data
        } catch (error) {
            const errorMessage: string = (error as Error).message ;
            return thunkApi.rejectWithValue({ message: errorMessage });
        }
    } 
    );





export const addBasketItemThunk = createAsyncThunk<BasketItem, { _id: string, quantity: number }, { rejectValue: ErrorPayload }>(
    'basket/addBasketItem',
    async (product, thunkApi) => { 
        try {
            const { data } = await instance.post<BasketItem>('/basket', product); 
            // console.log("DATA!!!!!!:", data);
            return data as BasketItem;
        } catch (error) {
            const errorMessage: string = (error as Error).message;
            return thunkApi.rejectWithValue({ message: errorMessage });
        }
    }
);

export const removeBasketItemThunk = createAsyncThunk<BasketItem, string, { rejectValue: ErrorPayload }>(
    'basket/removeBasketItem',
    async (_id, thunkApi) => { 
        try {
            const { data } = await instance.delete(`/basket/${_id}`);
            // console.log("DAT:", data)
            // console.log(data);
            return data;
        } catch (error) {
            const errorMessage: string = (error as Error).message;
            return thunkApi.rejectWithValue({ message: errorMessage });
        }
    }
);

//  export const decrementBasketItemThunk =createAsyncThunk<BasketItem, string, { rejectValue: ErrorPayload }>('basket/decrementBasketItem',
//  async (id, thunkApi) => {
//     try {
//         const { data } = await instance.patch(`/basket/decrement/${id}`);
//         return data;

//     } catch (error) {
//         const errorMessage: string = (error as Error).message;
//             return thunkApi.rejectWithValue({ message: errorMessage });
//     }
//  })

export const updateBasketItemThunk = createAsyncThunk(
    'basket/updateBasketItem',
    async ({ id, action }: UpdateBasketItemData, thunkApi) => {
        try {
            const { data } = await instance.patch(`/basket/${action}/${id}`);
            return data;
        } catch (error) {
            const errorMessage = (error as Error).message;
            return thunkApi.rejectWithValue({ message: errorMessage });
        }
    }
);

 export const clearBasketThunk = createAsyncThunk<void, void, { rejectValue: ErrorPayload }>(
    'basket/clearBasket',
    async (_, thunkApi) => {
      try {
        await instance.delete(`/basket`); 
      } catch (error) {
        const errorMessage: string = (error as Error).message;
        return thunkApi.rejectWithValue({ message: errorMessage });
      }
    }
  );
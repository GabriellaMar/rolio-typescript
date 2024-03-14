// import { ProductTitle } from '@/shared/types';
import { createAsyncThunk } from '@reduxjs/toolkit';


import axios  from 'axios';
import { Product } from './product/types';
import { BasketItem, UpdateBasketItemData} from './basket/types';
import { Order } from './order/type';
import { Review } from './reviews/types';

const instance = axios.create({
//    baseURL: 'http://localhost:8000',
     baseURL: 'https://rolio-backend-api.onrender.com'
});




 

// Опис типу для повідомлення про помилку
interface ErrorPayload {
    message: string;
}


// ----------Products Thunks---------------------------

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

  // ----------Orders Thunks---------------------------

  export const fetchOrdersThunk = createAsyncThunk<Order[], void, { rejectValue: ErrorPayload }>(
    'orders/fetchAllOrders',
    async (_, thunkApi) => {
        try {
            const { data } = await instance.get<Order[]>('/orders');
            console.log(data);
            return data;
        } catch (error) {
            const errorMessage: string = (error as Error).message ;
            return thunkApi.rejectWithValue({ message: errorMessage });
        }
    }
);

export const addOrderThunk = createAsyncThunk<Order, 
// {userName: string, phone: string, deliveryAddress: string, deliveryMethod: string, products: BasketItem[] }
Order,
 { rejectValue: ErrorPayload }>(
    'orders/addOrderItem',
    async (order, thunkApi) => { 
        try {
            const { data } = await instance.post<Order>('/orders', order); 
            console.log("DATA!!!!!!:", data);
            return data as Order;
        } catch (error) {
            const errorMessage: string = (error as Error).message;
            return thunkApi.rejectWithValue({ message: errorMessage });
        }
    }
);

export const removeOrderThunk = createAsyncThunk<Order, string, { rejectValue: ErrorPayload }>(
    'orders/removeOrder',
    async (_id, thunkApi) => { 
        try {
            const { data } = await instance.delete(`/orders/${_id}`);
            // console.log("DAT:", data)
            // console.log(data);
            return data;
        } catch (error) {
            const errorMessage: string = (error as Error).message;
            return thunkApi.rejectWithValue({ message: errorMessage });
        }
    }
);


export const updateOrderThunk = createAsyncThunk(
    'orders/updateOrder',
    async (_id, thunkApi) => {
        try {
            const { data } = await instance.patch(`/orders/${_id}`);
            return data;
        } catch (error) {
            const errorMessage = (error as Error).message;
            return thunkApi.rejectWithValue({ message: errorMessage });
        }
    }
);

export const resetOrderThunk = createAsyncThunk<void, void, { rejectValue: ErrorPayload }>(
    'orders/clearOrders',
    async (_, thunkApi) => {
      try {
        await instance.delete(`/orders`); 
      } catch (error) {
        const errorMessage: string = (error as Error).message;
        return thunkApi.rejectWithValue({ message: errorMessage });
      }
    }
  );

   // ----------Reviews Thunks---------------------------


   export const fetchOReviewThunk = createAsyncThunk<Review[], void, { rejectValue: ErrorPayload }>(
    'reviews/fetchAllReviews',
    async (_, thunkApi) => {
        try {
            const { data } = await instance.get<Review[]>('/reviews');
            console.log(data);
            return data;
        } catch (error) {
            const errorMessage: string = (error as Error).message ;
            return thunkApi.rejectWithValue({ message: errorMessage });
        }
    }
);


export const addReviewsThunk = createAsyncThunk<Review, Review, { rejectValue: ErrorPayload }>(
    'reviews/addReview',
    async (review, thunkApi) => { 
        try {
            const { data } = await instance.post<Review>('/reviews', review); 
            // console.log("DATA!!!!!!:", data);
            return data as Review;
        } catch (error) {
            const errorMessage: string = (error as Error).message;
            return thunkApi.rejectWithValue({ message: errorMessage });
        }
    }
);


export const updateReviewThunk = createAsyncThunk(
    'reviews/updateReview',
    async (_id, thunkApi) => {
        try {
            const { data } = await instance.patch(`/reviews/${_id}`);
            return data;
        } catch (error) {
            const errorMessage = (error as Error).message;
            return thunkApi.rejectWithValue({ message: errorMessage });
        }
    }
);

export const removeReviewThunk = createAsyncThunk<Review, string, { rejectValue: ErrorPayload }>(
    'reviews/removeReview',
    async (_id, thunkApi) => { 
        try {
            const { data } = await instance.delete(`/reviews/${_id}`);
            // console.log("DAT:", data)
            // console.log(data);
            return data;
        } catch (error) {
            const errorMessage: string = (error as Error).message;
            return thunkApi.rejectWithValue({ message: errorMessage });
        }
    }
);


export const resetReviewThunk = createAsyncThunk<void, void, { rejectValue: ErrorPayload }>(
    'reviews/clearReviews',
    async (_, thunkApi) => {
      try {
        await instance.delete(`/reviews`); 
      } catch (error) {
        const errorMessage: string = (error as Error).message;
        return thunkApi.rejectWithValue({ message: errorMessage });
      }
    }
  );
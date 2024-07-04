import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import cartListReducer from './cartListSlice';
import dataReducer from './dataSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartList: cartListReducer,
    data: dataReducer,
  },
});

export default store;

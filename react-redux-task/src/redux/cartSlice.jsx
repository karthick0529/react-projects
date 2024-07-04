import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    resetCart: () => 0,
  },
});

export const { increment, decrement, resetCart } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const cartListSlice = createSlice({
  name: 'cartList',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    resetCartList: () => [],
  },
});

export const { addItem, removeItem, resetCartList } = cartListSlice.actions;
export default cartListSlice.reducer;

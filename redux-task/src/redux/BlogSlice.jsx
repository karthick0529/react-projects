import { createSlice } from "@reduxjs/toolkit";

function findIndex(array, id) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) return i;
    }
    return null;
  }

export const BlogSlice=createSlice({
    name:'blogs',
    initialState:[],
    reducers:{
        saveAllBlogs: (state, action) => {
            return action.payload;
          },
        increase_cart:(state,action)=>{
            let {id}=action.payload;
            let index=findIndex(state,id)
            if(index != null){
                state[index].quantity=(state[index].quantity || 1)+1;
            }

        },
        decrease_cart:(state,action)=>{
            let { id } = action.payload;
            let index = findIndex(state, id);
            if (index !== null && state[index].quantity > 1) {
              state[index].quantity -= 1;
            }
        },
        remove_cart: (state, action) => {
            const { id } = action.payload;
            return state.filter((product) => product.id !== id);

    },
}
})
export const {saveAllBlogs,increase_cart,decrease_cart,remove_cart}=BlogSlice.actions
export default BlogSlice.reducer
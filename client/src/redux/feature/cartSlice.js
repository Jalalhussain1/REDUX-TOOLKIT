import {createSlice} from '@reduxjs/toolkit'

const initialState  ={
    carts:[]
}
// cart slice
const cartSlice = createSlice({
    name:'cartSlice',
    initialState,
    reducers:{
         
        //add to cart
        addToCart:(state,action) => {
          state.carts = [...state.carts,action.payload]

        }
    }
})
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
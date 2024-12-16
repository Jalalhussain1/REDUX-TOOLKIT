import {createSlice} from '@reduxjs/toolkit'

const initialState  ={
    arr:[]
}
// cart slice
const cartSlice = createSlice({
    name:'cartSlice',
    initialState,
    reducers:{
         
        //add to cart
        addToCart:(state,action) => {

        }
    }
})
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carts: [],
};

// cart slice
const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    // Add to cart
    addToCart: (state, action) => {
      const IteamIndex = state.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );

      if (IteamIndex >= 0) {
        // If the item exists, increase its quantity
        state.carts[IteamIndex].qnty += 1;
      } else {
        // If the item does not exist, add it with quantity = 1
        const temp = { ...action.payload, qnty: 1 };
        state.carts.push(temp);
      }
    },

    // remove particular items
    removeToCart:(state,action) => {
        const data = state.carts.filter((ele)=>ele.id  !== action.payload);
        state.carts = data
    },
    // remove single item
    removeSingleIteams:(state,action) => {
        const IteamIndex_dec = state.carts.findIndex((iteam) =>iteam.id === action.payload.id);

        if(state.carts[IteamIndex_dec].qnty >=1) {
            state.carts[IteamIndex_dec].qnty -= 1
        }
    },
    // clear cart
    emptycartIteam :(state,action) => {
        state.carts = []
    }

  },
});

export const { addToCart, removeToCart,removeSingleIteams,emptycartIteam } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartState {
  isCartOpen: boolean;
}

const initialState: ICartState = {
  isCartOpen: false,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
  },
});

export const { closeCart, openCart } = CartSlice.actions;

export default CartSlice.reducer;

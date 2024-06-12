import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "Cart",
	initialState: {
		items: ["pizza" , "Burger" ,"Milk Shake"],
	},
	reducers: {
		addItems: (state, action) => state.items.push(action.payload),
		removeItems: (state) => state.items.pop(),
		clearCart: (state) => (state.items.length = 0),
	},
});

export default cartSlice.reducer;
export const { addItems, removeItems, clearCart } = cartSlice.actions;

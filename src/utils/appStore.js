import { configureStore } from "@reduxjs/toolkit";
import cartReducerItems from "./cartSlice";


const appStore = configureStore({
	reducer: {
		cart: cartReducerItems,
	},
});

export default appStore;

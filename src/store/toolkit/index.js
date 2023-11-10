import { configureStore } from "@reduxjs/toolkit";
import baseSlice from "./slices/baseSlice";
import storeSlice from "./slices/storeSlice";

const store = configureStore({
	reducer: {
		base: baseSlice,
		store: storeSlice,
	},
});

export default store;

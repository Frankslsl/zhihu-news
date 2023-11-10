import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
	name: "base",
	initialState: {
		list: null,
	},
	reducers: {},
});
export default storeSlice.reducer;

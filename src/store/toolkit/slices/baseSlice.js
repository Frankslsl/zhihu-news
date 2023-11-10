import { createSlice } from "@reduxjs/toolkit";

const baseSlice = createSlice({
	name: "base",
	initialState: {
		info: null,
	},
	reducers: {},
});
export default baseSlice.reducer;

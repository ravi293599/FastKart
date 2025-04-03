import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItem(state, action) {},
        deleteItem(state, action){},
    },
});
//console.log(cartSlice.actions)
export default cartSlice;
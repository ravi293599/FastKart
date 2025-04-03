import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: [],
    reducers: {
        login(state,action){
           state.push(action.payload);
            console.log(action.payload);
            console.log(state);
            let userName = sessionStorage.getItem('name');
            console.log(userName)
        },
        logout(state,action){
            // state.push(action.payload);
            // console.log(state)
        }
    }
})
export default authSlice
export const {login, logout} = authSlice.actions
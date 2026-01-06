import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    usersId:"",
    user:"",
    search: "",
    quantity:0
}

const userSlice = createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        getUserList:(state,action) => {
            state.users = action.payload
        }
    }
});

export const { getUserList } = userSlice.actions
export const userReducer = userSlice.reducer
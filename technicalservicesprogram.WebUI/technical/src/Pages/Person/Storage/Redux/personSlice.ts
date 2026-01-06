import { createSlice } from "@reduxjs/toolkit";
import personApi, { useGetPersonsQuery } from '../../Api/personApi'

const initialState = {
    persons: [],
    personId:"",
    person:"",
    search: "",
    quantity:0
}

const personSlice = createSlice({
    name:"person",
    initialState:initialState,
    reducers:{
        getPersonList:(state,action) => {
            state.persons = action.payload
        }
    }
})


export const { getPersonList } = personSlice.actions
export const personReducer = personSlice.reducer
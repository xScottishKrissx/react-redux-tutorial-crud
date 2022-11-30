import { createSlice } from "@reduxjs/toolkit";

import {UsersData} from '../fakedata'

const defaultState = UsersData

export const userSlice = createSlice({
    name:"user",
    initialState:{value:defaultState},
    // reducers -> different functions that do something to state
    reducers:{
        addUser:(state, action) =>{
            // console.log("Add User")
            state.value.push(action.payload)
        },

        updateUser:(state,action) =>{
            // console.log("Update State")
            // console.log(action)
            state.value.map((user) =>{
                if(user.id === action.payload.id){
                    user.username = action.payload.newname
                }
            })
        },

        deleteUser:(state,action) =>{
            // console.log("Delete User")
            state.value =  state.value.filter((user) => user.id != action.payload)
        }
    }
})

export const {addUser, updateUser, deleteUser} = userSlice.actions
export default userSlice.reducer
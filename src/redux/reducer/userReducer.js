import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem("userData") ? true : false,
    loader: true,
}
export const userReducer = createSlice({
    name: "userReducer",
    initialState,
    reducers: {
        userExist: (state) => {
            state.loader = false
            state.user = true
        },
       logout: (state) => {
        state.user = false
        localStorage.removeItem("userData")
       }
    }
})

export const { userExist, logout } = userReducer.actions
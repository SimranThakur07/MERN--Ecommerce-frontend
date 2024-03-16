import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebarOpen: false,
}
export const myReducer = createSlice({
    name: "myReducer",
    initialState,
    reducers: {
       toggleSidebar: (state) => {
        state.isSidebarOpen = !state.isSidebarOpen
       }
    },

})

export const {toggleSidebar}  = myReducer.actions
export default myReducer.reducer
import { configureStore } from "@reduxjs/toolkit";
import  myReducer  from "./reducer/reducer";
import { UserApi } from "./api/userApi";
import { LoginApi } from "./api/loginApi";
import { userReducer } from "./reducer/userReducer";
import { productApi } from "./api/productApi";
import { cartReducer } from "./reducer/cartReducer";
import { orderApi } from "./api/orderApi";
import { dashboardApi } from "./api/dashboardApi";

export const server = 'https://mern-ecommerce-backend-y2tl.onrender.com'

export const store = configureStore({
    reducer: {
        myReducer: myReducer,
        [userReducer.name]: userReducer.reducer,
        [cartReducer.name]: cartReducer.reducer,
        [UserApi.reducerPath]: UserApi.reducer,
        [LoginApi.reducerPath]: LoginApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        [dashboardApi.reducerPath]: dashboardApi.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([UserApi.middleware],[LoginApi.middleware],[productApi.middleware],[orderApi.middleware], [dashboardApi.middleware])
})
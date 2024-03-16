import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const LoginApi = createApi({
    reducerPath: "LoginApi",
    baseQuery: fetchBaseQuery({baseUrl: `https://mern-ecommerce-backend-y2tl.onrender.com/api/v1/login/`}),
    endpoints: (builder) => ({
        loginApi: builder.mutation({
           query: (user) => ({
            url: "auth",
            method: "POST",
            body: user
           })
        }),
    })
})

export const { useLoginApiMutation } = LoginApi
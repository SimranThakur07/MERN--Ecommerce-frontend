import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const UserApi = createApi({
    reducerPath: "UserApi",
    baseQuery: fetchBaseQuery({baseUrl: `https://mern-ecommerce-backend-y2tl.onrender.com/api/v1/user/`}),
    tagTypes: ["Users"],
    endpoints: (builder) => ({
        signupApi: builder.mutation({
           query: (user) => ({
            url: "new",
            method: "POST",
            body: user
           }),
           invalidatesTags: ["Users"]
        }),
        delete: builder.mutation({
            query: ({userId, adminId}) => ({
             url: `${userId}?_id=${adminId}`,
             method: "DELETE",
            }),
            invalidatesTags: ["Users"]
         }),
        allUser: builder.query({
           query: (id) => (`all?_id=${id}`),
           providesTags: ["Users"]
        }),
    })
})

export const { useSignupApiMutation, useAllUserQuery, useDeleteMutation } = UserApi
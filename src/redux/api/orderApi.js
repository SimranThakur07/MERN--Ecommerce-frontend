import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const orderApi = createApi({
    reducerPath: "orderApi",
    baseQuery: fetchBaseQuery({baseUrl: `https://mern-ecommerce-backend-y2tl.onrender.com/api/v1/orders/`}),
    tagTypes: ["orders"],
    endpoints: (builder) => ({
        newOrder: builder.mutation({
           query: (order) => ({
            url: "new",
            method: "POST",
            body: order
           }),
           invalidatesTags: ["orders"]
        }),
        updateOrder: builder.mutation({
           query: ({userId, orderId}) => ({
            url: `${orderId}?_id=${userId}`,
            method: "PUT",
           }),
           invalidatesTags: ["orders"]
        }),
        deleteOrder: builder.mutation({
           query: ({userId, orderId}) => ({
            url: `${orderId}?_id=${userId}`,
            method: "DELETE",
           }),
           invalidatesTags: ["orders"]
        }),
        myOrder: builder.query({
            query: (id) => (`myOrder?_id=${id}`),
            providesTags: ["orders"]
         }),
        allOrder: builder.query({
            query: (id) => (`allOrder?_id=${id}`),
            providesTags: ["orders"]
         }),
        orderDetails: builder.query({
            query: (id) => (`${id}`),
            providesTags: ["orders"]
         }),
    })
})

export const { useNewOrderMutation, useDeleteOrderMutation, useUpdateOrderMutation, useMyOrderQuery, useAllOrderQuery, useOrderDetailsQuery } = orderApi
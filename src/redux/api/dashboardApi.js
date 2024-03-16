import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dashboardApi = createApi({
    reducerPath: "dashboardApi",
    baseQuery: fetchBaseQuery({baseUrl: `https://mern-ecommerce-backend-y2tl.onrender.com/api/v1/dashboard/`}),
    endpoints: (builder) => ({
        stats: builder.query({
           query: (id) => (`stats?_id=${id}`),
           keepUnusedDataFor: 0
        }),
    })
})

export const { useStatsQuery} = dashboardApi
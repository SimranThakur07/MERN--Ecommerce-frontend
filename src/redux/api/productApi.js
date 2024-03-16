import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({baseUrl: `https://mern-ecommerce-backend-y2tl.onrender.com/api/v1/product/`}),
    tagTypes: ["product"],
    endpoints: (builder) => ({
        latestProduct: builder.query({
           query: () => ({
            url: "latest",
            method: "GET",
            providesTags: ["product"]
           })
        }),
        bestSeller: builder.query({
           query: () => ({
            url: "bestseller",
            method: "GET",
            providesTags: ["product"]
           })
        }),
        allProduct: builder.query({
           query: (id) => ({
            url: `admin-products?_id=${id}`,
            method: "GET",
            providesTags: ["product"]
           })
        }),
        allCategory: builder.query({
           query: () => ({
            url: `categories`,
            method: "GET",
            providesTags: ["product"]
           })
        }),
        searchAllProduct: builder.query({
           query: ({price, search, sort, category, page}) =>{
           
            let base = `all?search=${search}&page=${page}`

            if(price) base += `&price=${price}`
            if(sort) base += `&sort=${sort}`
            if(category) base += `&category=${category}`
            return base
           },
           providesTags: ["product"]
        }),
        productDetails: builder.query({
         query: (id) => ({
          url: id,
          method: "GET",
          providesTags: ["product"]
         })
      }),
        newProduct: builder.mutation({
         query: ({formData, id}) => ({
          url: `new?_id=${id}`,
          method: "POST",
          body: formData
         }),
         invalidatesTags:["product"]
      }),
        updateProduct: builder.mutation({
         query: ({formData, userId, productId}) => ({
          url: `${productId}?_id=${userId}`,
          method: "PUT",
          body: formData
         }),
         invalidatesTags:["product"]
      }),
        deleteProduct: builder.mutation({
         query: ({userId, productId}) => ({
          url: `${productId}?_id=${userId}`,
          method: "DELETE",
         }),
         invalidatesTags:["product"]
      }),
    })
})

export const { useLatestProductQuery, useAllProductQuery, useBestSellerQuery, useAllCategoryQuery, useSearchAllProductQuery, useNewProductMutation, useProductDetailsQuery, useUpdateProductMutation, useDeleteProductMutation } = productApi
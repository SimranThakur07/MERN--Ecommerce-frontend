import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   loading: false,
   cartItems: [],
   subTotal: 0,
   tax: 0,
   shippingCharges: 0,
   discount: 0,
   total: 0,
   shippingInfo: {
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
   }
}

const parsePrice = (priceString) => {
  const numericString = priceString.replace(/[^0-9.-]+/g,"");
  return parseFloat(numericString);
};
export const cartReducer = createSlice({
    name: "cartReducer",
    initialState,
    reducers: {
       addToCart: (state, actions) => {
        state.loading=true

        const index = state.cartItems.findIndex((i) => i.productId === actions.payload.productId)
        if(index !== -1) state.cartItems[index] = actions.payload
         else  state.cartItems.push(actions.payload)
        state.loading=false
       },

       removeCartItem: (state, actions) => {
        state.loading=true
       state.cartItems = state.cartItems.filter((i) => i.productId !== actions.payload)
        state.loading=false
       },
       calculatePrice: (state) => {
         const subTotal = state.cartItems.reduce((total, item) => total + parsePrice(item.price) * item.quantity, 0)
        
         state.subTotal = subTotal
         state.shippingCharges =  (state.subTotal < 1000 && state.subTotal > 0) ? 200 : 0
         state.tax = Math.round(state.subTotal * 0.18)
         state.total = state.subTotal + state.shippingCharges +  state.tax - state.discount
       },
       applyDiscount: (state, actions) => {
         state.discount = actions.payload
        },
        saveShippingInfo: (state, action) => {
          state.shippingInfo = action.payload
        },
        resetCart: () => initialState
    }
})

export const {addToCart, removeCartItem, calculatePrice, applyDiscount , saveShippingInfo, resetCart } = cartReducer.actions
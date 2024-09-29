import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            //state --> initial state state.cart --> cart array
            //action ->1)type 2)payload :object
            //type:"cart/addToCart"
            console.log("action",action)
            console.log("state",state.cart)
            state.cart.push(action.payload)

        }
    }
})
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./redux/cartSlice";
import bankSlice from "./redux/bankSlice";
import employeeDataSlice from "./redux/employeeDataSlice";

export const store = configureStore({
    reducer:{
        cart:cartSlice,
        bank:bankSlice,
        content:employeeDataSlice
           
    }
})
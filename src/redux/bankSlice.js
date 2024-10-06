import { createSlice } from "@reduxjs/toolkit"


const bankSlice = createSlice({
    name:"bank",
    initialState:{
        balance:0
    },
    reducers:{
        deposit:(state,action)=>{
            state.balance += action.payload
        }
    }
})
export const {deposit} = bankSlice.actions
export default bankSlice.reducer
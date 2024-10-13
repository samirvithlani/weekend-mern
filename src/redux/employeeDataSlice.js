import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEmployeeData = createAsyncThunk(
    "employeeData/fetchEmployeeData",
    async()=>{
        const res = await axios.get("http://localhost:3001/users/user")
        return res.data.data
    }
    
)

const employeeDataSlice = createSlice({
    name:"employeeData",
    initialState:{
        employeeData:[],
        error:null,
        isLoading:false
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchEmployeeData.pending,(state,action)=>{
            state.isLoading = true
        })
        builder.addCase(fetchEmployeeData.fulfilled,(state,action)=>{
            state.isLoading = false
            state.employeeData = action.payload
        })
        builder.addCase(fetchEmployeeData.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export default employeeDataSlice.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IGenericResponse, ILoginData,IAuthInitialState } from "../interfaces";
import { getCurrentUserData, login } from "../utils/api.utils";
import Cookies from "js-cookie"
import { getCurrentUserDataThunk } from "./user.slice";


const initialState:IAuthInitialState = {
    isUserAuthenticated:Cookies.get("accessToken")?true:false
}

export const loginThunk = createAsyncThunk("auth/login",async (loginData:ILoginData,thunkAPI):Promise<IGenericResponse>=>{
    const response = await login(loginData);
    thunkAPI.dispatch(getCurrentUserDataThunk())
    return response
})
export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout: (state)=>{
            Cookies.remove("accessToken")
            Cookies.remove("userId")
            state.isUserAuthenticated = false;
        }
    },
    extraReducers: builder=>{
        builder
        .addCase(loginThunk.fulfilled, (state,action)=>{
            state.isUserAuthenticated = action.payload.success;
        })
    }
})


export const {logout} = authSlice.actions
export default authSlice.reducer
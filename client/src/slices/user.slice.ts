import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IGenericResponse,ILoginData,IUserGetReponseData,IUserInitialState} from "../interfaces";
import { getCurrentUserData } from "../utils/api.utils";
import authSlice, { loginThunk } from "./auth.slice";



const initialState:IUserInitialState = {
    id:'',
    name:'',
    username:'',
    role:-1
}

export const getCurrentUserDataThunk = createAsyncThunk("user/getCurrentUserData",async ():Promise<IUserGetReponseData>=>{
    return await getCurrentUserData();
})
export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{

    },
    extraReducers: builder=>{
        builder
        .addCase(getCurrentUserDataThunk.fulfilled, (state,action)=>{
            console.log(action.payload.data)
            state.name=action.payload.data.name
            state.id=action.payload.data.id
            state.role=action.payload.data.role
            state.username=action.payload.data.username
            
        })
    }
})



export default userSlice.reducer
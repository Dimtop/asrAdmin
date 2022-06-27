import { createSlice } from "@reduxjs/toolkit";
import { IAppInitialState } from "../interfaces";




const initialState:IAppInitialState = {
    isMenuOpen:false
}


export const appSlice = createSlice({
    name:"app",
    initialState,
    reducers:{
        toggleMenu:(state)=>{
            console.log(state.isMenuOpen)
            state.isMenuOpen = !state.isMenuOpen
        }
    }
})


export const {toggleMenu} = appSlice.actions
export default appSlice.reducer
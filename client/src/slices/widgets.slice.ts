import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IWidgetsInitialState,ITotalInspectionsNumberGetReponseData,ITotalSprayersNumberGetReponseData, ITotalTodaysInspectionsNumberGetReponseData, IPendingSubscriptionsNumberGetResponseData} from "../interfaces";
import { getPendingSubscriptionsNumber, getTotalInspectionsNumber,getTotalSprayersNumber,getTotalTodaysInspectionsNumber} from "../utils/api.utils";


const initialState:IWidgetsInitialState = {
    totalInspectionsNumber:0,
    totalInspectionsNumberLoading:true,

    totalTodaysInspectionsNumber:0,
    totalTodaysInspectionsNumberLoading:true,

    totalSprayersNumber:0,
    totalSprayersNumberLoading:true,

    pendingSubscriptionsNumber:0,
    pendingSubscriptionsNumberLoading:true
}

export const getTotalInspectionsNumberThunk = createAsyncThunk("widgets/getTotalInspectionsData",async ():Promise<ITotalInspectionsNumberGetReponseData>=>{
    return await getTotalInspectionsNumber();
})
export const getTotalTodaysInspectionsNumberThunk = createAsyncThunk("widgets/getTotalTodaysInspectionsData",async ():Promise<ITotalTodaysInspectionsNumberGetReponseData>=>{
    return await getTotalTodaysInspectionsNumber();
})
export const getTotalSprayersNumberThunk = createAsyncThunk("widgets/getTotalSprayersNumber",async ():Promise<ITotalSprayersNumberGetReponseData>=>{
    return await getTotalSprayersNumber();
})
export const getPendingSubscriptionsNumberThunk = createAsyncThunk("widgets/getPendingSubscriptionsNumber",async ():Promise<IPendingSubscriptionsNumberGetResponseData>=>{
    return await getPendingSubscriptionsNumber();
})
export const widgetsSlice = createSlice({
    name:"widgets",
    initialState,
    reducers:{

    },
    extraReducers: builder=>{
        builder
        .addCase(getTotalInspectionsNumberThunk.fulfilled, (state,action)=>{
            console.log(action.payload.data)
            state.totalInspectionsNumber = action.payload.data.totalNumber
            state.totalInspectionsNumberLoading = false
        })
        .addCase(getTotalSprayersNumberThunk.fulfilled, (state,action)=>{
            console.log(action.payload.data)
            state.totalSprayersNumber = action.payload.data.totalNumber
            state.totalSprayersNumberLoading = false
        })
        .addCase(getTotalTodaysInspectionsNumberThunk.fulfilled, (state,action)=>{
            console.log(action.payload.data)
            state.totalTodaysInspectionsNumber = action.payload.data.totalNumber
            state.totalTodaysInspectionsNumberLoading = false
        })
        .addCase(getPendingSubscriptionsNumberThunk.fulfilled, (state,action)=>{
            console.log(action.payload.data)
            state.pendingSubscriptionsNumber = action.payload.data.pendingSubscriptions
            state.pendingSubscriptionsNumberLoading = false
        })
    }
})



export default widgetsSlice.reducer
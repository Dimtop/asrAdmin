import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { Panel } from "rsuite"
import { getPendingSubscriptionsNumberThunk, getTotalInspectionsNumberThunk, getTotalSprayersNumberThunk, getTotalTodaysInspectionsNumberThunk } from "../../slices/widgets.slice";
import Text from "../text/text.component";
import Widget from "./widget.component";
import "./dashboard.css"




const Dashboard = (props:any)=>{

    const dispatch = useDispatch<any>();
    const totalInspectionsNumber = useSelector((state:any)=>state.widgets.totalInspectionsNumber)
    const totalInspectionsNumberLoading = useSelector((state:any)=>state.widgets.totalInspectionsNumberLoading)

    const totalTodaysInspectionsNumber = useSelector((state:any)=>state.widgets.totalTodaysInspectionsNumber)
    const totalTodaysInspectionsNumberLoading = useSelector((state:any)=>state.widgets.totalTodaysInspectionsNumberLoading)

    const totalSprayersNumber = useSelector((state:any)=>state.widgets.totalSprayersNumber)
    const totalSprayersNumberLoading = useSelector((state:any)=>state.widgets.totalSprayersNumberLoading)

    const pendingSubscriptionsNumber = useSelector((state:any)=>state.widgets.pendingSubscriptionsNumber)
    const pendingSubscriptionsNumberLoading = useSelector((state:any)=>state.widgets.pendingSubscriptionsNumberLoading)

    useEffect(()=>{
        dispatch(getTotalInspectionsNumberThunk())
    },[totalInspectionsNumber,dispatch])

    useEffect(()=>{
        dispatch(getTotalSprayersNumberThunk())
    },[totalSprayersNumber,dispatch])

    useEffect(()=>{
        dispatch(getTotalTodaysInspectionsNumberThunk())
    },[totalTodaysInspectionsNumber,dispatch])

    useEffect(()=>{
        dispatch(getPendingSubscriptionsNumberThunk())
    },[pendingSubscriptionsNumber,dispatch])

    return(
        <div id="dashboard">
            <Widget title="Total inspections number" loading={totalInspectionsNumberLoading}>
                <Text size="3rem">{totalInspectionsNumber}</Text>
            </Widget>
            <Widget title="Total sprayers number" loading={totalSprayersNumberLoading}>
                <Text size="3rem">{totalSprayersNumber}</Text>
            </Widget>
            <Widget title="Inspections today" loading={totalTodaysInspectionsNumberLoading}>
                <Text size="3rem">{totalTodaysInspectionsNumber}</Text>
            </Widget>
            <Widget title="Pending subscriptions" loading={pendingSubscriptionsNumberLoading}>
                <Text size="3rem">{pendingSubscriptionsNumber}</Text>
            </Widget>
        </div> 
    )
}


export default Dashboard
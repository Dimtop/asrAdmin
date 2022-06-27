import Cookies from "js-cookie"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getCurrentUserDataThunk } from "../slices/user.slice"

const useCurrentUserData = ()=>{
    const currentUserData = useSelector((state:any)=>state.user)
    const dispatch = useDispatch<any>()

    useEffect(()=>{
        if((!currentUserData.id||currentUserData.id==="")&&Cookies.get("accessToken")){
            dispatch(getCurrentUserDataThunk())
        }
    },[])
}


export default  useCurrentUserData
import { ILoginData,IGenericResponse, IUserGetReponseData, ITotalInspectionsNumberGetReponseData } from "../interfaces";
import { toaster } from "rsuite"
import Error from "../components/error/error.component" 
import Cookies from "js-cookie";
import { IPendingSubscriptionsNumberGetResponseData, ITotalSprayersNumberGetReponseData, ITotalTodaysInspectionsNumberGetReponseData } from "../interfaces/api.interfaces";

const getHeaders = (isAuthenticatedEndpoint:boolean)=>{

    let authenticationHeaders = {};
    if(isAuthenticatedEndpoint){
        authenticationHeaders = {
            "Authorization": `Bearer ${Cookies.get("accessToken")}`
        }
    }
    return{
        "Accept":"application/json",
        "Content-Type":"application/json",
        "Accept-Language":"en",
        ...authenticationHeaders
    }
}

const makeApiCall = async (isAuthenticatedEndpoint:boolean,method:string,path:string,body?:any,callback?:(...args:any[])=>any)=>{

    return await fetch(path,{
        method:method,
        body:method==='POST' || method==='PUT'?JSON.stringify(body):null,
        headers:getHeaders(isAuthenticatedEndpoint)
    })
    .then(res=>res.json())
    .then(res=>{
        if(!res.success){
            toaster.push(<Error message={res.message}/>)
            setTimeout(()=>{
                toaster.clear()
            },1000)
        }
        return res;
    })

  
}



export const login = async (loginData: ILoginData):Promise<IGenericResponse>=> await makeApiCall(false,"POST","/auth/login",loginData)
export const getCurrentUserData =  async():Promise<IUserGetReponseData>=> await makeApiCall(true,"GET",`/users/${Cookies.get("userId")}`)

export const getTotalInspectionsNumber = async():Promise<ITotalInspectionsNumberGetReponseData>=> await makeApiCall(true,"GET","/widgets/totalInspectionsNumber")
export const getTotalTodaysInspectionsNumber = async():Promise<ITotalTodaysInspectionsNumberGetReponseData>=> await makeApiCall(true,"GET","/widgets/totalTodaysInspectionsNumber")
export const getTotalSprayersNumber = async():Promise<ITotalSprayersNumberGetReponseData>=> await makeApiCall(true,"GET","/widgets/totalSprayersNumber")
export const getPendingSubscriptionsNumber = async():Promise<IPendingSubscriptionsNumberGetResponseData>=> await makeApiCall(true,"GET","/widgets/pendingSubscriptionsNumber")
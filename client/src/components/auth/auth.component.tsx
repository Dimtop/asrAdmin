import Cookies from "js-cookie"
import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import Forbidden from "../default/forbidden.component"
import { protectedRoutes } from "../../config/router.config"
import { routes } from "../../constants/router.constants"


const Auth = (props:any)=>{
    const isUserAuthenticated = useSelector((state:any) => state.auth.isUserAuthenticated)
    const location = useLocation();


    if(!isUserAuthenticated||!Cookies.get("accessToken")){
        if(protectedRoutes.redirect.includes(location.pathname)){
            return <Navigate to={routes.LOGIN_ROUTE}/>
        }
        return <Forbidden/>
    }

    return <Outlet/>
}


export default Auth
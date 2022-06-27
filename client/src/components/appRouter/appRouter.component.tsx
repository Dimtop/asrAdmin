import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../login/login.component"
import Auth from "../auth/auth.component";
import Text from "../text/text.component";
import NotFound from "../default/notFound.component";
import Layout from "../layout/layout.component";
import Dashboard from "../dashboard/dashboard.component";
import { routes } from "../../constants/router.constants";


const AppRouter = ()=>{
    return(
        <>
        <Routes>
            <Route element={<Auth/>}>
                <Route element={<Layout/>}>
                    <Route  path={routes.ROOT_ROUTE} element={<Dashboard/>}/>
                    <Route  path={routes.TEST_ROUTE} element={<Dashboard/>}/>
                </Route>
            </Route>
            <Route path={routes.LOGIN_ROUTE} element={<Login />}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </>
    )
}



export default AppRouter
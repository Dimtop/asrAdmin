import Header from "./header.component"
import { Outlet } from "react-router-dom";
import  Sidebar  from "./sidebar.component";
import { useState } from "react";


const Layout = (props:any)=>{


    return(
        <>
            <Header/>
            <Sidebar/>
            <Outlet/>
        </>
    )
}

export default Layout;
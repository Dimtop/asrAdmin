import { useState } from 'react';
import { Button, Input,Panel} from 'rsuite';
import Text from "../text/text.component"
import { loginThunk } from '../../slices/auth.slice';
import "./login.css"
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom"

const Login = (props:any)=>{
    
    const [loginData,setLoginData] = useState({username:"",password:""})
    const dispatch = useDispatch<any>();
    const isUserAuthenticated = useSelector((state:any) => state.auth.isUserAuthenticated)

    return(
        isUserAuthenticated?
        <Navigate to="/" replace/>
        :
        <Panel id="login" bordered shaded>
            <Text size="2rem" weight="bold">Login</Text>
            <Text  marginTop="2rem">Username</Text>
            <Input type="text" onChange={(v)=>setLoginData({...loginData,username:v})}/>
            <Text  marginTop="2rem">Password</Text>
            <Input type="password" onChange={(v)=>setLoginData({...loginData,password:v})}/>
            <Button id="loginButton" className="mainButton" onClick={async ()=>{
                await dispatch(loginThunk(loginData))
            }}>Login</Button>
        </Panel>
        
    )
}


export default Login;
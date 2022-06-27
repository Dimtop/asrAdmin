import { Nav, Navbar } from "rsuite";
import "./header.css"
import AdminIcon from '@rsuite/icons/Admin';
import ExitIcon from '@rsuite/icons/Exit';
import MenuIcon from '@rsuite/icons/Menu';
import { useSelector } from "react-redux";
import {userRoleToString} from "../../utils/app.utils"
import { useDispatch } from "react-redux";
import { logout } from "../../slices/auth.slice";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar.component";
import { toggleMenu } from "../../slices/app.slice";

const Header  = (props:any)=>{

    const name = useSelector((state:any)=>state.user.name)
    const role = useSelector((state:any)=>state.user.role)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return(
        <>
        <Navbar id="header">
            <Nav>
                <Nav.Item icon={<MenuIcon/>} onClick={()=>dispatch(toggleMenu())}></Nav.Item>
            </Nav>
            <Navbar.Brand>ASRV2 Admin</Navbar.Brand>
            <Nav pullRight>
                <Nav.Menu icon={<AdminIcon/>} title={`${name} - ${userRoleToString(role)}`}>
                    <Nav.Item icon={<ExitIcon/>} onClick={()=>{
                        dispatch(logout())
                        navigate("/login")
                    }}>Logout</Nav.Item>
                </Nav.Menu>
            </Nav>
        </Navbar>
        </>
    )

}


export default Header;
import { Nav, Sidenav, Drawer } from "rsuite";
import DashboardIcon from "@rsuite/icons/Dashboard"
import TimeRoundIcon from "@rsuite/icons/TimeRound"
import PeoplesIcon from "@rsuite/icons/Peoples"
import CloseOutlineIcon from "@rsuite/icons/CloseOutline"
import GearIcon from "@rsuite/icons/Gear"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../slices/app.slice";
import "./sidebar.css"

const Sidebar = (props:any)=>{

    const isMenuOpen = useSelector((state:any)=>state.app.isMenuOpen)
    const dispatch = useDispatch()

    return(
        <>
        <Drawer open={isMenuOpen} placement="left" size="xs" onClose={() => dispatch(toggleMenu())}>
            <Drawer.Header>
            <Drawer.Title>Menu</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
                <Sidenav>
                    <Sidenav.Body>
                        <Nav activeKey="1">
                            <Nav.Item eventKey="1" icon={<DashboardIcon/>}>
                                Dashboard
                            </Nav.Item>
                            <Nav.Menu eventKey="2" title="Users" icon={<PeoplesIcon/>}>
                                <Nav.Item eventKey="2-1">Subscriptions</Nav.Item>
                                <Nav.Item eventKey="2-1">Data</Nav.Item>
                                <Nav.Item eventKey="2-1">Contact</Nav.Item>
                            </Nav.Menu>
                            <Nav.Item eventKey="2" icon={<CloseOutlineIcon/>}>
                                Delete reports
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<GearIcon/>}>
                                Settings
                            </Nav.Item>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
            </Drawer.Body>
        </Drawer>
        </>

    )
}


export default Sidebar;
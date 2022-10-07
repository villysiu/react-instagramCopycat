import { Nav, Offcanvas, Button } from "react-bootstrap"
import User from './User'
import AddPhoto from './AddPhoto';
 import { useContext } from "react";
import { AppContext } from "../App";
const RightPanelCanvas = ({toggleRightPanel})=>{
    const {currUser, setFiltered}=useContext(AppContext)
    return (
        <>
            <Offcanvas.Header closeButton onClick={()=>toggleRightPanel(false)} >
                <Offcanvas.Title>
                    {currUser && <Button variant="primary" onClick={()=>setFiltered(true)} > {currUser.name[0].toUpperCase()} </Button> }
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <User toggleRightPanel={toggleRightPanel} /> 
                </Nav>
            
                {currUser &&  <div><hr /><AddPhoto toggleRightPanel={toggleRightPanel} /></div> }
            
            </Offcanvas.Body>
            </>
    )
}
export default RightPanelCanvas
import { Nav,Navbar, Offcanvas, Button } from "react-bootstrap"
import User from './User'
import AddPhoto from './AddPhoto';
 import { useContext } from "react";
import { AppContext } from "../App";
const RightPanelCanvas = ({rightPanel, toggleRightPanel, handleClick, setPhotos, setFiltered})=>{
    const {currUser}=useContext(AppContext)
    return (
        <Navbar.Offcanvas 
            id={`offcanvasNavbar`} aria-labelledby={`offcanvasNavbarLabel`} placement="end"
            show={rightPanel} scroll="true" onHide={()=>toggleRightPanel(false)} >
            <Offcanvas.Header closeButton onClick={handleClick} >
                <Offcanvas.Title id={`offcanvasNavbarLabel`}>
                    {currUser && <Button variant="primary" onClick={()=>setFiltered(true)} > {currUser.name[0]} </Button> }
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <User toggleRightPanel={toggleRightPanel} setFiltered={setFiltered}/> 
                </Nav>
            
                {currUser &&  <div><hr /><AddPhoto toggleRightPanel={toggleRightPanel} setPhotos= {setPhotos} /></div> }
            
            </Offcanvas.Body>
        </Navbar.Offcanvas>
    )
}
export default RightPanelCanvas
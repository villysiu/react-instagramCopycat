import { Nav,Navbar, Offcanvas, Button } from "react-bootstrap"
import User from './User'
import AddPhoto from './AddPhoto';
import { useContext, createContext } from "react";
import { UserContext } from "../App";

export const CanvasContext = createContext()

const RightPanelCanvas = ({rightPanel, toggleRightPanel, handleClick})=>{
    const {currUser, setUserPhotos}=useContext(UserContext)
    
    const filterPhoto=e=>{
        e.preventDefault()
        
        setUserPhotos(true)
    }
     
return (
    <Navbar.Offcanvas 
        id={`offcanvasNavbar`} aria-labelledby={`offcanvasNavbarLabel`} placement="end"
        show={rightPanel} scroll="true" onHide={()=>toggleRightPanel(false)} >
        <Offcanvas.Header closeButton onClick={handleClick} >
            <Offcanvas.Title id={`offcanvasNavbarLabel`}>
                {currUser && <Button variant="primary" onClick={filterPhoto} > {currUser.name[0]} </Button> }
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <User toggleRightPanel={toggleRightPanel}/> 
                </Nav>
            
                {currUser &&  <div><hr /><AddPhoto toggleRightPanel={toggleRightPanel} /></div> }
            
        </Offcanvas.Body>
    </Navbar.Offcanvas>
)
}
export default RightPanelCanvas
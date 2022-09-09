
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { useState, createContext, useContext } from 'react';
import User from './User'
import AddPhoto from './AddPhoto';

import {UserContext} from '../App'
export const CanvasContext = createContext()

const Header = ({setPhotos }) =>{
    const [rightpanel, toggleRightPanel]=useState(false)
    const {currUser}=useContext(UserContext)
    
    const handleClick=(e)=>{
        e.preventDefault()
        toggleRightPanel(!rightpanel)
    }

    return (
        
        <Navbar key="false" bg="light" expand="false" fixed="top" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Instagram Copycat</Navbar.Brand>

              {currUser? 
                <Button variant="primary" onClick={handleClick}> {currUser.name[0]} </Button> 
                :
                <Navbar.Toggle aria-controls={`offcanvasNavbar`} onClick={handleClick} />
              }

            <Navbar.Offcanvas 
              id={`offcanvasNavbar`} aria-labelledby={`offcanvasNavbarLabel`} placement="end"
              show={rightpanel} scroll="true" onHide={()=>toggleRightPanel(false)} >
              <Offcanvas.Header closeButton onClick={handleClick} >
                <Offcanvas.Title id={`offcanvasNavbarLabel`}>
                  {currUser? <Button variant="primary"> {currUser.name[0]} </Button> : null }
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <CanvasContext.Provider value={toggleRightPanel}>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <User /> 
                </Nav>
                
                {currUser?  <div><hr /><AddPhoto setPhotos={setPhotos} /></div> :  null }
                </CanvasContext.Provider>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    );
    
}
export default Header

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

const Header = ({photos, setFilteredPhotos }) =>{
    const [rightpanel, toggleRightPanel]=useState(false)
    
    const {currUser}=useContext(UserContext)
    
    const handleClick=(e)=>{
        e.preventDefault()
        toggleRightPanel(!rightpanel)
    }
    const filterPhoto=e=>{
      e.preventDefault()
     
      setFilteredPhotos(photos.filter(photo=>photo.user_id===currUser.id))
    }
    const allPhoto=e=>{
      e.preventDefault()
     
      setFilteredPhotos(photos)
    }
    

    return (
        
        <Navbar key="false" bg="light" expand="false" fixed="top" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#" onClick={allPhoto} >Instagram Copycat</Navbar.Brand>

              {currUser? 
                <Button variant="primary" onClick={handleClick} > {currUser.name[0]} </Button> 
                :
                <Navbar.Toggle aria-controls={`offcanvasNavbar`} onClick={handleClick} />
              }

            <Navbar.Offcanvas 
              id={`offcanvasNavbar`} aria-labelledby={`offcanvasNavbarLabel`} placement="end"
              show={rightpanel} scroll="true" onHide={()=>toggleRightPanel(false)} >
              <Offcanvas.Header closeButton onClick={handleClick} >
                <Offcanvas.Title id={`offcanvasNavbarLabel`}>
                  {currUser && <Button variant="primary" onClick={filterPhoto} > {currUser.name[0]} </Button> }
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <CanvasContext.Provider value={toggleRightPanel}>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <User /> 
                </Nav>
            
                {currUser &&  <div><hr /><AddPhoto setFilteredPhotos={setFilteredPhotos} /></div> }
                </CanvasContext.Provider>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    );
    
}
export default Header
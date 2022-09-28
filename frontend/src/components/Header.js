import {Container, Navbar, Button } from 'react-bootstrap';
import { React, memo, useState, useContext } from 'react';

import {UserContext} from '../App'
import RightPanelCanvas from './RightPanelCanvas';

const Header = () =>{
    const [rightPanel, toggleRightPanel]=useState(false)
    const {currUser, setUserPhotos}=useContext(UserContext)
    
    const handleClick=(e)=>{
        e.preventDefault()
        toggleRightPanel(!rightPanel)
    }
    const allPhoto=e=>{
      e.preventDefault()
      setUserPhotos(false)
    }
    
    return (
        <Navbar key="false" bg="light" expand="false" fixed="top" className="mb-3" style={{ background: "linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.1))" }}>
          <Container fluid>
            <Navbar.Brand href="#" onClick={allPhoto} className="font-face-bb">Instagram Copycat</Navbar.Brand>

              {currUser? 
                <Button variant="primary" onClick={handleClick} > {currUser.name[0]} </Button> 
                :
                <Navbar.Toggle aria-controls={`offcanvasNavbar`} onClick={handleClick} />
               
              }

              <RightPanelCanvas rightPanel={rightPanel} toggleRightPanel={toggleRightPanel} handleClick={handleClick} />
            
          </Container>
        </Navbar>
    );
    
}
export default memo(Header)
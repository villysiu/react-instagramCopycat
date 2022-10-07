import {Container, Navbar, Button } from 'react-bootstrap';
import { React, useState, useContext, useMemo } from 'react';
import {AppContext} from '../App'
import RightPanelCanvas from './RightPanelCanvas';

const Header = () =>{
    const [rightPanel, toggleRightPanel]=useState(false)
    const {currUser, setFiltered} =useContext(AppContext)
    

  return useMemo(()=>{
    return (
        <Navbar key="false" bg="light" expand="false" fixed="top" className="mb-3" style={{ background: "linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.1))" }}>
          <Container fluid>
            <Navbar.Brand href="#" onClick={()=>setFiltered(false)} className="font-face-bb">Instagram Copycat</Navbar.Brand>
            <div onClick={()=>toggleRightPanel(true)} >
              {
                currUser?  <Button variant="primary" > {currUser.name[0].toUpperCase()} </Button> 
                :
                <Navbar.Toggle aria-controls={`offcanvasNavbar`} />
              }
              </div>

              
              <Navbar.Offcanvas id={`offcanvasNavbar`} placement="end"
                                show={rightPanel} scroll="true" onHide={()=>toggleRightPanel(false)} >
                <RightPanelCanvas toggleRightPanel={toggleRightPanel} />
              </Navbar.Offcanvas>
          </Container>
        </Navbar>
    );
  },[currUser, rightPanel, setFiltered] )  
}
export default Header
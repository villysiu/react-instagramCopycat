import {Container, Navbar, Button } from 'react-bootstrap';
import { React, useState, useContext, useMemo } from 'react';
import {AppContext} from '../App'
import RightPanelCanvas from './RightPanelCanvas';

const Header = ({setPhotos, setFiltered} ) =>{
    const [rightPanel, toggleRightPanel]=useState(false)
    const {currUser} =useContext(AppContext)
    

  return useMemo(()=>{
    return (
        <Navbar key="false" bg="light" expand="false" fixed="top" className="mb-3" style={{ background: "linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.1))" }}>
          <Container fluid>
            <Navbar.Brand href="#" onClick={()=>setFiltered(false)} className="font-face-bb">Instagram Copycat</Navbar.Brand>
              {
                currUser? 
                <Button variant="primary" onClick={()=>toggleRightPanel(true)} > {currUser.name[0]} </Button> 
                :
                <Navbar.Toggle aria-controls={`offcanvasNavbar`} onClick={()=>toggleRightPanel(true)} />
              }
              <RightPanelCanvas rightPanel={rightPanel} toggleRightPanel={toggleRightPanel} handleClick={()=>toggleRightPanel(false)} setPhotos={setPhotos} setFiltered={setFiltered}/>
          </Container>
        </Navbar>
    );
  },[currUser, rightPanel,setPhotos, setFiltered ] )  
}
export default Header
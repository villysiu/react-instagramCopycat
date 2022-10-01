import {Container, Navbar, Button } from 'react-bootstrap';
import { React, memo, useState, useContext } from 'react';

import {AppContext} from '../App'

import RightPanelCanvas from './RightPanelCanvas';

const Header = ({setPhotos, setFiltered} ) =>{
    const [rightPanel, toggleRightPanel]=useState(false)
    const {currUser} =useContext(AppContext)
    const handleClick=(e)=>toggleRightPanel(!rightPanel)
    
    return (
        <Navbar key="false" bg="light" expand="false" fixed="top" className="mb-3" style={{ background: "linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.1))" }}>
          <Container fluid>
            <Navbar.Brand href="#" onClick={()=>setFiltered(false)} className="font-face-bb">Instagram Copycat</Navbar.Brand>
              {
                currUser? 
                <Button variant="primary" onClick={handleClick} > {currUser.name[0]} </Button> 
                :
                <Navbar.Toggle aria-controls={`offcanvasNavbar`} onClick={handleClick} />
              }
              <RightPanelCanvas rightPanel={rightPanel} toggleRightPanel={toggleRightPanel} handleClick={handleClick} setPhotos={setPhotos} setFiltered={setFiltered}/>
          </Container>
        </Navbar>
    );
    
}
export default memo(Header)
import {Container, Navbar, Button } from 'react-bootstrap';
import { useState, useContext } from 'react';

import {UserContext} from '../App'
import RightPanelCanvas from './RightPanelCanvas';

const Header = ({photos, setFilteredPhotos }) =>{
    const [rightPanel, toggleRightPanel]=useState(false)
    const {currUser}=useContext(UserContext)
    
    const handleClick=(e)=>{
        e.preventDefault()
        toggleRightPanel(!rightPanel)
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

              <RightPanelCanvas rightPanel={rightPanel} toggleRightPanel={toggleRightPanel} handleClick={handleClick} />
            
          </Container>
        </Navbar>
    );
    
}
export default Header
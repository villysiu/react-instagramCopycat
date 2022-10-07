import {  ThreeDots } from "react-bootstrap-icons"
import { Container, Row, Col, Modal } from "react-bootstrap"
import EditPhotoModal from './EditPhotoModal'
import { AppContext } from "../App"
import { useContext, useState } from "react"

const PhotoHeader=({owner_name, owner_id, photo_id, url, descState, setDescState})=>{
    const {currUser}=useContext(AppContext)
    const [show, setShow]=useState(false)
    
    return(
        <Container ><Row>
          <Col><h5>{owner_name} </h5></Col> 

          <Col align="right">
            {currUser && currUser.id===owner_id && 
            <ThreeDots style = {{transform: 'rotate(90deg)' }} onClick={()=>setShow(true)} /> }
            <Modal show={show} onHide={() => setShow(false)}>
              <EditPhotoModal setShow={setShow}  photo_id={photo_id} url={url} descState={descState} setDescState={setDescState} />
            </Modal>
          </Col>
        </Row></Container>)
}
export default PhotoHeader
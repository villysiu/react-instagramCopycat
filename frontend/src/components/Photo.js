import React from "react";
import { useState } from "react";
import {Container, Col, Row, Card} from 'react-bootstrap';
import {ThreeDots} from 'react-bootstrap-icons'
import HeartLike from "./HeartLike";
import EditPhotoModal from "./EditPhotoModal";

const Photo= ({photo, currUser, setPhotos})=>{
  
  const {id, url, photo_uid, user, users_liked}=photo
  const [desc, setDesc] = useState(photo.desc);
  const [show, setShow] = useState(false);
  
    return (
      <Card style={{ background: "linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5))" }}>
        <Container ><Row>
          <Col><h5>{user} </h5></Col> 
          <Col align="right">
            {currUser && currUser.id===photo_uid && 
            <ThreeDots style = {{transform: 'rotate(90deg)' }} onClick={()=>setShow(true)} /> }

            <EditPhotoModal show={show} setShow={setShow}  photo={{id, url, desc}} setDesc={setDesc} setPhotos={setPhotos} />
          </Col>
        </Row></Container>
        
        <Card.Img style={{size: 'cover'}} variant="top" src={'http://localhost:3000'+url} />
        <HeartLike currUser={currUser} photo_id={id} likeLength={users_liked.length} likeObj={currUser? users_liked.find(u=>u.user_id===currUser.id) : null} /> 
        <Card.Text> {desc} </Card.Text>
     
      </Card> 
     
    )
}
export default React.memo(Photo)
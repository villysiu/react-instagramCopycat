import React from "react";
import { useState, useContext } from "react";
import {Container, Col, Row, Card, Modal, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {ThreeDots, Heart} from 'react-bootstrap-icons'

import EditPhotoModal from "./EditPhotoModal";
import HeartLike from './HeartLike'
import { AppContext } from "../App";

const Photo= (props)=>{  
 
  const {currUser}=useContext(AppContext)

  const {desc, liked_users, owner_id, owner_name, photo_id, url}=props

  const [descState, setDescState] = useState(desc);
  const [likedUsers, setLikedUsers]=useState(liked_users)
  const [show, setShow] = useState(false);
    return (
      <Card style={{ background: "linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5))" }}>
        <Container ><Row>
          <Col><h5>{owner_name} </h5></Col> 
          <Col align="right">
            {currUser && currUser.id===owner_id && 
            <ThreeDots style = {{transform: 'rotate(90deg)' }} onClick={()=>setShow(true)} /> }
            <Modal show={show} onHide={() => setShow(false)}>
              <EditPhotoModal setShow={setShow}  photo_id={photo_id} url={url} descState={descState} setDescState={setDescState} />
            </Modal>
          </Col>
        </Row></Container>
        
        <Card.Img style={{size: 'cover'}} variant="top" src={'http://localhost:3000'+url} />
        <Container ><Row>
          <Col>
        {currUser? 
          <HeartLike photo_id={photo_id} setLikedUsers={setLikedUsers} likeObj={likedUsers.find(u=>u.liked_user_id===currUser.id)} /> 
         :
          <OverlayTrigger placement="top" overlay={ <Tooltip>Please login or signup.</Tooltip>}>
              <Heart className='heart' color="black"/>
          </OverlayTrigger>
        }

        <OverlayTrigger placement="top" overlay={
        <Tooltip >
          {
            likedUsers.length===0 ?
            <div>No like yet.</div>:
            likedUsers.map(likedUser=><div key={likedUser.liked_user_id}>{likedUser.liked_user_name}</div>)}
        </Tooltip>}>  
        
            <span style={{ marginLeft: '.5rem' }}> {likedUsers.length} likes </span>
        </OverlayTrigger>
        </Col></Row></Container>
        <Card.Text> {descState} </Card.Text>
     
      </Card> 
     
    )
}
export default React.memo(Photo)
import React from "react";
import { useState } from "react";
import {Container, Col, Row, Card} from 'react-bootstrap';
import {ThreeDots} from 'react-bootstrap-icons'
import { Heart } from 'react-bootstrap-icons'
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import EditPhotoModal from "./EditPhotoModal";
import HeartLike from './HeartLike'
// import LikeFeature from "./LikeFeature";

const Photo= ({photo, currUser, setPhotos})=>{
  
  const {id, url, photo_uid, user, users_liked}=photo
  const [desc, setDesc] = useState(photo.desc);
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(users_liked.length)
  const renderTooltip = props => <Tooltip {...props}>Please login or signup.</Tooltip>
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
        {currUser? 
        <HeartLike photo_id={id} setCount={setCount} likeObj={users_liked.find(u=>u.user_id===currUser.id)} /> 
        
         :
          <OverlayTrigger placement="top" overlay={renderTooltip}>
              <Heart color="red" />
          </OverlayTrigger>
        }
        <div className="d-inline-block">
          {count} likes
        </div>

        <Card.Text> {desc} </Card.Text>
     
      </Card> 
     
    )
}
export default React.memo(Photo)
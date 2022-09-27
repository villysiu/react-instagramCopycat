import { memo, useContext, useState } from "react";
import {Container, Col, Row, Card} from 'react-bootstrap';
import { UserContext } from "../App";
import {ThreeDots} from 'react-bootstrap-icons'
import HeartLike from "./HeartLike";
import EditPhotoModal from "./EditPhotoModal";

const Photo= (photo)=>{
const {id, url, photo_uid, user, users_liked}=photo

  const {currUser} = useContext(UserContext)
  const [desc, setDesc] = useState(photo.desc);
  const [show, setShow] = useState(false);
  
    return (
      
      <Card>
        <Container><Row>
          <Col><h5>{user} </h5></Col> 
          <Col align="right">
            {currUser && currUser.id===photo_uid && 
            <ThreeDots style = {{transform: 'rotate(90deg)' }} onClick={() => setShow(true)} /> }
            <EditPhotoModal show={show} setShow={setShow}  photo={{id, url, desc}} setDesc={setDesc}  />
          </Col>
        </Row></Container>
        
        <Card.Img style={{objectFit: 'cover'}}variant="top" src={'http://localhost:3000'+url} />
        <HeartLike photo_id={id} likeLength={users_liked.length} likeObj={currUser? users_liked.find(u=>u.user_id===currUser.id) : null} /> 
      
        <Card.Text> {desc} </Card.Text>
     
      </Card> 
     
    )
}
export default memo(Photo)
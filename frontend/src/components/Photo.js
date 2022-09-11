import { memo, useContext, useState } from "react";
import {Container, Col, Row, Card} from 'react-bootstrap';
import { UserContext } from "../App";
import {ThreeDots} from 'react-bootstrap-icons'
import HeartLike from "./HeartLike";
import EditPhoto from "./EditPhoto";

const Photo= (photo)=>{
const {id, url, photo_uid, user, users_liked}=photo
  console.log(`photo ${id}`)
  const {currUser} = useContext(UserContext)
  const [desc, setDesc] = useState(photo.desc);
  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    return (
      <Col xs={12} md={3}>
      <Card>
        <Container><Row>
          <Col><h5>{user} </h5></Col> 
          <Col align="right">
            {currUser && currUser.id===photo_uid && 
            <ThreeDots style = {{transform: 'rotate(90deg)' }} onClick={handleShow} /> }
            <EditPhoto show={show} setShow={setShow}  photo={{id, url, desc}} setDesc={setDesc}  />
          </Col>
        </Row></Container>
        
        <Card.Img variant="top" src={url} />
        <HeartLike photo_id={id} users_liked={users_liked} /> 
      
        <Card.Text> {desc} </Card.Text>
     
      </Card> 
      </Col>
    )
}


export default memo(Photo)
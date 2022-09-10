import { memo, useContext } from "react";
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'
import HeartLike from "./HeartLike";
import { UserContext } from "../App";
import {ThreeDots} from 'react-bootstrap-icons'

const Photo= ({id, url, desc, photo_uid, user, users_liked })=>{

  console.log(`photo ${id}`)
  const {currUser} = useContext(UserContext)
  // console.log(currUser.id)
    return (
      <Col xs={12} md={3}>
      <Card>
      
      {/* <Card.Body> */}
      
        {/* <Card.Header> */}
          <Container><Row>
         <Col><h5>{user} </h5></Col> 
        <Col align="right">
        {currUser && currUser.id===photo_uid && <ThreeDots style = {{transform: 'rotate(90deg)' }}/> }
        </Col>
        </Row></Container>
        {/* </Card.Header> */}
        <Card.Img variant="top" src={url} />
        
        {/* <Card.Footer className="text-muted"> */}
            <HeartLike photo_id={id} users_liked={users_liked} /> 
        {/* </Card.Footer> */}
        <Card.Text> {desc} </Card.Text>
      {/* </Card.Body> */}
      </Card>
      
           
      </Col>
    )
}


export default memo(Photo)
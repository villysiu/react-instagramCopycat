import { memo } from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import HeartLike from "./HeartLike";

const Photo= ({id, url, desc, user, users_liked })=>{
  
    return (
      <Col xs={12} md={3}>
      <Card>
      
      <Card.Body>
        <Card.Title>{user} </Card.Title>
        <Card.Img variant="top" src={url} />
        <Card.Text> {desc} </Card.Text>
        <Card.Footer className="text-muted">
            <HeartLike photo_id={id} users_liked={users_liked} /> 
        </Card.Footer>
      </Card.Body>
      </Card>
           
      </Col>
    )
}


export default memo(Photo)
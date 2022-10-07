import React from "react";
import { useState } from "react";
import { Card } from 'react-bootstrap';
import HeartFeature from './HeartFeature'
import PhotoHeader from "./PhotoHeader";

const Photo= (props)=>{  
  const {desc, liked_users, owner_id, owner_name, photo_id, url}=props

  const [descState, setDescState] = useState(desc);

    return (
      <Card style={{ background: "linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5))" }}>
        <PhotoHeader owner_name={owner_name} owner_id={owner_id} photo_id={photo_id} url={url} descState={descState} setDescState={setDescState} />
        <Card.Img style={{size: 'cover'}} variant="top" src={'http://localhost:3000'+url} />
        <HeartFeature photo_id={photo_id} liked_users={liked_users}/>
        <Card.Text> {descState} </Card.Text>
      </Card> 
     
    )
}
export default React.memo(Photo)
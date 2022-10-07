import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap"
import { Heart } from "react-bootstrap-icons"
import HeartLike from "./HeartLike"
import { AppContext } from "../App"
import { useState, useContext } from "react"
const HeartFeature=({liked_users, photo_id})=>{
    const {currUser}=useContext(AppContext)
    const [likedUsers, setLikedUsers]=useState(liked_users)
    return (
        <Container ><Row><Col>
            <OverlayTrigger placement="top" overlay={ 
                <Tooltip > 
                { likedUsers.length===0 ? <div>No like yet.</div>:
                    likedUsers.map(likedUser=><div key={likedUser.liked_user_id}>{likedUser.liked_user_name}</div>)}
                </Tooltip>}>
                <span>{
                    currUser? 
                    <HeartLike photo_id={photo_id} setLikedUsers={setLikedUsers} likeObj={likedUsers.find(u=>u.liked_user_id===currUser.id)} /> 
                    :
                    <Heart className='heart' color="black"/>
                }</span>
            </OverlayTrigger>
            <span style={{ marginLeft: '.5rem' }}> {likedUsers.length} likes </span>
        </Col></Row></Container>
        
    )
}
export default HeartFeature
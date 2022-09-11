import { useState, useContext } from 'react'
import { Heart, HeartFill } from 'react-bootstrap-icons'
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import { UserContext } from '../App'
import { toggleHeart } from './actions';

const HeartLike =({photo_id, users_liked})=>{
    const {currUser}=useContext(UserContext)
    const [numLikes, setNumLikes]=useState(users_liked.length)
    const [currUserLiked, setCurrUserLiked]=useState(currUser && users_liked.find(u=>u.user_id===currUser.id))

    
    
    const handleClick=e=>{
        e.preventDefault()
        toggleHeart(photo_id, setNumLikes, currUserLiked, setCurrUserLiked)
    }

    const renderTooltip = props => <Tooltip {...props}>Please login or signup.</Tooltip>

    return (
        <>
        {currUser? 
            <div>
                {currUserLiked ? <HeartFill color="red"  onClick={handleClick}/> : <Heart color="red"  onClick={handleClick} /> } 
                <b> &nbsp; &nbsp;{numLikes} likes</b> 
            </div>
            :
            <div>
                <OverlayTrigger placement="top" overlay={renderTooltip}>
                    <Heart color="red" />
                </OverlayTrigger>
                <b> &nbsp; &nbsp;{numLikes} likes</b> 
            </div>
        }       
        
        </>
    )
}
           
export default HeartLike
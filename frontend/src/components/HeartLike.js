import { useEffect, useState } from 'react'
import { Heart } from 'react-bootstrap-icons'
import { HeartFill } from 'react-bootstrap-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { UserContext } from '../App'
import { useContext } from 'react'

const HeartLike =({photo_id, users_liked})=>{
    const {currUser}=useContext(UserContext)
    const [numLikes, setNumLikes]=useState(0)
    const [currUserLiked, setCurrUserLiked]=useState(null)
    
    useEffect(()=>{
        setNumLikes(users_liked.length)
        setCurrUserLiked(currUser ? users_liked.find(u=>u.user_id===currUser.id) : null)
    },[currUser, users_liked ])

    const toggleHeart=async ()=>{
        const url=currUserLiked? 
            `http://localhost:3000/photos/${photo_id}/likes/${currUserLiked.liked_id}`
            :
            `http://localhost:3000/photos/${photo_id}/likes`

        try {
            const response = await fetch(url, {
                method: currUserLiked? "delete": "post",
                headers: {
                    'Content-type': "application/json",
                    'Authorization': localStorage.getItem('token'),
                },
            })
            if(!response.ok) throw Error
            const data=await response.json()
            
            setCurrUserLiked(data)
            setNumLikes(prev=>currUserLiked? prev-1 : prev+1)
            
        } catch (error) {
            console.log(error)
            window.location.reload(false)
        }
    }
    
    const handleClick=e=>{
        e.preventDefault()
        toggleHeart()
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
import { useState, useEffect } from 'react'
import { Heart, HeartFill } from 'react-bootstrap-icons'
import { like, unlike } from './actions/photoActions';

const HeartLike =(props)=>{
    const { photo_id, setLikedUsers, likeObj } = props
    const [currUserLiked, setCurrUserLiked] = useState(null)
    const url=`http://localhost:3000/photos/${photo_id}/likes`

    useEffect(() => { setCurrUserLiked(likeObj)}, [likeObj] )
    
    const handleClick=e=>{
        e.preventDefault()
        currUserLiked ? 
        unlike(`${url}/${currUserLiked.liked_id}`, setLikedUsers, setCurrUserLiked)
        :
        like(url, setLikedUsers, setCurrUserLiked)
    }

    return (
        <span onClick={handleClick} >
            { currUserLiked ? <HeartFill color="red" /> : 
            <Heart className='heart' color="black" /> } 
        </span>
    )
}
           
export default HeartLike
import { useState, useEffect } from 'react'
import { Heart, HeartFill } from 'react-bootstrap-icons'
import { toggleHeart } from './actions/photoActions';

const HeartLike =(props)=>{
    const { photo_id, setCount, likeObj } = props
    const [currUserLiked, setCurrUserLiked] = useState(null)
    const url=`http://localhost:3000/photos/${photo_id}/likes`

    useEffect(() => { setCurrUserLiked(likeObj)}, [likeObj] )
    
    const handleClick=e=>{
        e.preventDefault()
        currUserLiked ? 
        toggleHeart(`${url}/${currUserLiked.liked_id}`, "delete", setCount, setCurrUserLiked)
        :
        toggleHeart(url, "post", setCount, setCurrUserLiked)
    }

    return (
        <div  onClick={handleClick}>
            { currUserLiked ? <HeartFill color="red" /> : <Heart color="red" /> } 
        </div>
    )
}
           
export default HeartLike
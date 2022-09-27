import { useState, useContext, useRef } from "react"
import {Form, Button} from 'react-bootstrap'
import { UserContext } from "../App";
import { addPhoto } from "./actions/photoActions";

const AddPhoto=({toggleRightPanel})=>{
    const {currUser, setPhotos, setFilteredPhotos} = useContext(UserContext)
    const [image, setImage]=useState(null)
    const [descInput, setDescInput] = useState('')
    const [error, setError] =useState(null)
    const inputRef = useRef(null);
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData=new FormData()
        formData.append('user_id', currUser.id)
        formData.append('desc', descInput)
        formData.append('url', image)
        
        
        addPhoto(formData, setPhotos, setFilteredPhotos, setError, toggleRightPanel  )
        e.target.reset()
        setImage(null)
        
    }
    const handleImageChange=e=>{
        e.preventDefault();
        if(e.target.files.length===0) 
            return
        else
        setError(null)
        setImage(e.target.files[0])
        
    }
    const handleDescChange=e=>{
        e.preventDefault();
         setDescInput(e.target.value)
         setError(null)
    }
    const handleRemoveImg=(e)=>{
        setImage(null)
        inputRef.current.value = null;
    }
    return (
        <div>
            <h2>Add a new photo</h2>
            {error && <div className="text-danger">{error}</div> }
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3">
                    <Form.Control ref={inputRef} type="file" name="url" accept="image/*" onChange={handleImageChange}/>
                </Form.Group>
                {image && <><img src={URL.createObjectURL(image)} alt="name" height="120px" border="1px" />
                <Button varaint="primary" size="sm" onClick={handleRemoveImg}>Remove</Button></> }

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control  as="textarea" name="desc" placeholder="Description" onChange={handleDescChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Photo
                </Button>
        
            </Form>
        </div>
    )
    
}
export default AddPhoto
import { useState, useContext, useRef } from "react"
import { Form, Button } from 'react-bootstrap'
import { AppContext } from "../App";
import { addPhoto } from "./actions/photoActions";

const AddPhoto=({toggleRightPanel, setPhotos })=>{
    const {currUser} = useContext(AppContext)
    const [preview, setPreview]=useState(null)
    const [descInput, setDescInput] = useState('')
    const [error, setError] =useState(null)
    const inputRef = useRef(null);
     
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData=new FormData()
        formData.append('user_id', currUser.id)
        formData.append('desc', descInput)
        formData.append('url', preview)
    
        addPhoto(formData, setPhotos, setError, toggleRightPanel)
        e.target.reset()
        setPreview(null)
    }
    const handleImageChange=e=>{
        e.preventDefault();
        if(e.target.files.length===0) 
            return
        
        setError(null)
        setPreview(e.target.files[0])
        
    }
    const handleDescChange=e=>{
        e.preventDefault();
        setDescInput(e.target.value)
        setError(null)
    }
    const handleRemoveImg=(e)=>{
        setPreview(null)
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
                {preview && <><img src={URL.createObjectURL(preview)} alt="name" height="120px" border="1px" />
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
import { useState, useContext } from "react"
import {Form, Button} from 'react-bootstrap'
import { CanvasContext } from './RightPanelCanvas'
import { UserContext } from "../App";
import { addPhoto } from "./actions";

const AddPhoto=()=>{
    const toggleRightPanel = useContext(CanvasContext)
    const {currUser, setPhotos, setFilteredPhotos} = useContext(UserContext)
    const [image, setImage]=useState(null)
    const [desc, setDesc] = useState('')
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        const photo={photo:{
            url: image, desc: desc, user_id: currUser.id
        }}
        console.log(photo)
        addPhoto(photo, setPhotos, setFilteredPhotos )
        e.target.reset()
        toggleRightPanel(false)
    }
    const handleImageChange=e=>{
        e.preventDefault();
        console.log(e.target.files)
         setImage(URL.createObjectURL(e.target.files[0]))
    }
    const handleDescChange=e=>{
        e.preventDefault();
         setDesc(e.target.value)
    }
    return (
        <div>
            <h2>Add a new photo</h2>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3">
                    <Form.Label>Photo url</Form.Label>
                    <Form.Control type="file" name="url" multiple accept="image/*" onChange={handleImageChange}/>
                    {/* <Form.Control type="text" name="url" placeholder="URL" required /> */}
                </Form.Group>
                {image && <img src={image} alt="name" height="120px" border="1px" /> }

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
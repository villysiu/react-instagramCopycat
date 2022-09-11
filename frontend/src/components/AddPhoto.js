import { useRef, useContext } from "react"
import {Form, Button} from 'react-bootstrap'
import { CanvasContext } from "./Header";
import { UserContext } from "../App";
import { addPhoto } from "./actions";

const AddPhoto=()=>{
    const toggleRightPanel = useContext(CanvasContext)
    const {currUser, setFilteredPhotos} = useContext(UserContext)
    
    const formRef=useRef()

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData=new FormData(formRef.current)
        const {url, desc}=Object.fromEntries(formData)
        
        const photo={photo:{
            url: url, desc: desc, user_id: currUser.id
        }}
        addPhoto(photo, setFilteredPhotos, toggleRightPanel)
        e.target.reset()
    }
    return (
        <div>
            <h2>Add a new photo</h2>
            <Form onSubmit={handleSubmit} ref={formRef} >
                <Form.Group className="mb-3">
                    <Form.Label>Photo url</Form.Label>
                    <Form.Control type="text" name="url" placeholder="URL" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control  as="textarea" name="desc"  placeholder="Description" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Photo
                </Button>
        
            </Form>
        </div>
    )
    
}
export default AddPhoto
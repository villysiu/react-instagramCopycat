import { useRef, useContext } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { CanvasContext } from "./Header";
import { UserContext } from "../App";

const AddPhoto=({ setPhotos })=>{
    const toggleRightPanel = useContext(CanvasContext)
    const {currUser} = useContext(UserContext)
    
    const formRef=useRef()

    const addPhoto=async (photo)=>{
        const url='http://localhost:3000/photos'
        try {
            const response=await fetch(url, {
                method: 'post',
                headers: {
                    "content-type": 'application/json',
                    "Authorization": localStorage.getItem("token")
                },
                body: JSON.stringify(photo)
            })
            if(!response.ok) throw Error
            
            const data=await response.json()
        
            setPhotos((prev)=>[...prev, data])
            toggleRightPanel(false)
        }catch(error){
            console.log("error", error)
            window.location.reload(false)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData=new FormData(formRef.current)
        const {url, desc}=Object.fromEntries(formData)
        
        const photo={photo:{
            url: url, desc: desc, user_id: currUser.id
        }}
        addPhoto(photo)
    }
    return (
        <div>
            <h2>Add a new photo</h2>
            <form onSubmit={handleSubmit} ref={formRef} >
                <Form.Group className="mb-3">
                    <Form.Label>Photo url</Form.Label>
                    <Form.Control type="text" name="url" placeholder="URL" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="desc" placeholder="Description" />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit">
                        Add Photo
                    </Button>
                </div>
        
            </form>
        </div>
    )
    
}
export default AddPhoto
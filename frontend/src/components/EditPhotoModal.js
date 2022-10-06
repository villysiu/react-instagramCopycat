import { Modal, Button, Image, Form } from  'react-bootstrap';
import { useState, useContext} from 'react';
import {updatePhoto, deletePhoto } from './actions/photoActions'
import { AppContext } from '../App';

const EditPhotoModal=({setShow, photo_id, url, descState, setDescState})=>{
    const {dispatch}=useContext(AppContext)
    const [descBox, setDescBox]=useState( descState)

    const handleSubmit=e=>{
        e.preventDefault()
        const formData=new FormData()
        formData.append("desc", e.target.descBox.value)
        updatePhoto(photo_id, formData, setDescState, setShow )
        e.target.reset()
    }
    const handleDelete=e=>{
        e.preventDefault()
        deletePhoto(photo_id, setShow, dispatch)
    }
    return (
        <>
            <Modal.Header closeButton>
            <Modal.Title><Image src={'http://localhost:3000'+url} width="100" /></Modal.Title>
            </Modal.Header>
            {/* <div class="text-danger">{error}</div> */}
            <Form onSubmit={handleSubmit} >
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="descBox"  as="textarea" value={descBox} onChange={e=>setDescBox(e.target.value)} />
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                    <Button variant="primary" type='submit'>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Form>
        </>
    )
}
export default EditPhotoModal
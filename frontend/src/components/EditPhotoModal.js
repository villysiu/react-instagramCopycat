import { Modal, Button, Image, Form } from  'react-bootstrap';
import { useState } from 'react';
import {updatePhoto, deletePhoto } from './actions/photoActions'


const EditPhotoModal=({show, setShow, photo, setDesc, setPhotos})=>{
    const {id, url}=photo
    const [descBox, setDescBox]=useState( photo.desc )

    const handleSubmit=e=>{
        e.preventDefault()
        const formData=new FormData()
        formData.append("desc", e.target.descBox.value)
        updatePhoto(id, formData, setDesc, setShow )
        e.target.reset()
    }
    const handleDelete=e=>{
        e.preventDefault()
        deletePhoto(id, setShow, setPhotos)
    }
    return (
        <Modal show={show} onHide={() => setShow(false)}>
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
        </Modal>
    )
}
export default EditPhotoModal
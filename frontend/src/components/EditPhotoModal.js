import { Modal, Button, Image, Form } from  'react-bootstrap';
import { useState, useContext } from 'react';
import {updatePhoto, deletePhoto } from './actions'
import { UserContext } from '../App';

const EditPhotoModal=({show, setShow, photo, setDesc})=>{
    const {id, url}=photo
    const {setPhotos, setFilteredPhotos}=useContext(UserContext)
    const [descBox, setDescBox]=useState( photo.desc )
    // const [error, setError]=useState( null)
    
    const handleSubmit=e=>{
        e.preventDefault()
        updatePhoto(id, e.target.descBox.value, setDesc, setShow )
        e.target.reset()
    }
    const handleDelete=e=>{
        e.preventDefault()
        deletePhoto(id, setShow, setPhotos, setFilteredPhotos)
    
    }
    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
            <Modal.Title><Image src={url} width="100" /></Modal.Title>
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
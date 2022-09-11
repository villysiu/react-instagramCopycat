import { Modal, Button, Image, Form } from  'react-bootstrap';
import { useState, useContext } from 'react';
import {updatePhoto, deletePhoto } from './actions'
import { UserContext } from '../App';

const EditPhoto=({show, setShow, photo, setDesc})=>{
   const {id, url}=photo
   const {setFilteredPhotos}=useContext(UserContext)
    const [descBox, setDescBox]=useState( photo.desc )
    const [error, setError]=useState( null)
    const handleClose = () => setShow(false);
    
    const handleSubmit=e=>{
        e.preventDefault()
        updatePhoto(id, e.target.descBox.value, setDesc, setShow, setError )
    }
    const handleDelete=e=>{
        e.preventDefault()
        deletePhoto(id, setShow, setFilteredPhotos, setError)
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title><Image src={url} width="100" /></Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmit} >
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="descBox"  as="textarea" value={descBox} onChange={e=>setDescBox(e.target.value)} />
                    </Form.Group>
                    {/* {error && <p class="text-danger">{error}</p>}  */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                    <Button variant="primary" type='submit'>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    )
}
export default EditPhoto
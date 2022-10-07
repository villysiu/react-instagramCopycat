import Photo from "./Photo"
import { Container, Row } from 'react-bootstrap';

const PhotoList=({photos})=>{
    return (
        <Container>
            <Row>
                {photos.map((photo)=><Photo key={photo.photo_id} {...photo} /> )}
            </Row>
        </Container>
    )
}

export default PhotoList

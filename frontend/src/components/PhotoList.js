import Photo from "./Photo"
import { Container, Row } from 'react-bootstrap';

const PhotoList=({photos, currUser, setPhotos})=>{
    console.log("photoList")
    console.log(photos)
    console.log(currUser)
    return (
        <Container>
            <Row>
                {photos.map((photo)=><Photo key={photo.id} photo={photo} currUser={currUser} setPhotos={setPhotos} />)}
            </Row>
        </Container>
    )
}

export default PhotoList

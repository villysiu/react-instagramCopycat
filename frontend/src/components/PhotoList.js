import Photo from "./Photo"
import { Container, Row } from 'react-bootstrap';

const PhotoList=({photos})=>{
    console.log("photoList")
    console.log(photos)

    return (
        <Container>
            <Row>
                {/* {photos.map((photo)=><Photo key={photo.photo_id} desc={photo.desc} liked_users={photo.liked_users} owner_id={photo.owner_id}
                owner_name={photo.owner_name} photo_id={photo.photo_id} url={photo.url} />)} */}
{photos.map((photo)=><Photo key={photo.photo_id} {...photo} /> )}
            </Row>
        </Container>
    )
}

export default PhotoList

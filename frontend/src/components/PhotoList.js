// import { memo } from "react";
import Photo from "./Photo"
import { Container, Row } from 'react-bootstrap';


const PhotoList=({photos})=>{

    return (
        <Container>
            <Row sm="1" md="2">
                {photos.map((photo)=><Photo key={photo.id} {...photo} />)}
            </Row>
        </Container>
    )
}

export default PhotoList

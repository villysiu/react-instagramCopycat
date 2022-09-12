import { memo } from "react";
import Photo from "./Photo"
import { Container, Row } from 'react-bootstrap';

const PhotoList=({filteredPhotos})=>{
    return (
        <Container>
            <Row>
                {filteredPhotos.map((photo)=><Photo key={photo.id} {...photo} />)}
            </Row>
        </Container>
    )
}

export default memo(PhotoList);

import { memo } from "react";
import Photo from "./Photo"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
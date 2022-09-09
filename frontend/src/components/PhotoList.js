import { useEffect } from "react"
import { memo } from "react";
import Photo from "./Photo"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const PhotoList=({photos, setPhotos})=>{
    useEffect(()=>{
        const getPhotos=async () =>{
            const url="http://localhost:3000/photos.json"
            try{
                const response=await fetch(url)
                if(!response.ok) throw Error

                const data=await response.json()
                setPhotos(data)
            } catch(error){
                console.log(error)
            }
        }
        getPhotos()
    },[setPhotos])

    return (
        <Container>
            <Row>
                {photos.map((photo)=><Photo key={photo.id} {...photo} />)}
            </Row>
        </Container>
    )
}

export default memo(PhotoList);
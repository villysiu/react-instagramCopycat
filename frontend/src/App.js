import { useEffect, useState, createContext, useCallback } from 'react';
import {fetchUser, fetchPhotos} from './components/actions'
import './App.css';
import PhotoList from './components/PhotoList';
import Header from './components/Header';

import Spinner from 'react-bootstrap/Spinner';
export const UserContext = createContext();

const App=()=>{
  
  const [currUser, setCurrUser]=useState(null);
  const [loading, setLoading]=useState(false)
  const [photos, setPhotos]=useState([])
  const [filteredPhotos, setFilteredPhotos]=useState([])
  useEffect(()=>{
    fetchUser(setCurrUser, setLoading)
  } , [])
  useEffect(()=>{
    fetchPhotos(setPhotos, setFilteredPhotos)
    
  }, [])
  // const addPhotoToList = useCallback((photo) => {
  //   setFilteredPhotos(prev => [...prev, photo]);
  // }, []);

  // const deletePhotoFromList = useCallback((id) => {
  //   setFilteredPhotos(prev => prev.filter(p=>p.id!==id));
  // }, []);

  return (
    
    <div className="App">
      <UserContext.Provider value={{setCurrUser:setCurrUser, currUser: currUser, setFilteredPhotos:setFilteredPhotos }} >
        {loading? 
          
            <div><Spinner animation="border" /></div>
            :
            <Header photos={photos} setFilteredPhotos={setFilteredPhotos}/>             
        }
        <br /><br /><br />
        <PhotoList filteredPhotos={filteredPhotos} />
      </UserContext.Provider>
    </div> 
    
  );
}

export default App;

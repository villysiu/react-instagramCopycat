import { useEffect, useState, createContext } from 'react';
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
    if(localStorage.getItem('token'))
      fetchUser(setCurrUser, setLoading)
  } , [])

  useEffect(()=>{
    fetchPhotos(setPhotos, setFilteredPhotos)
  }, [])


  return (
    
    <div className="App">
      <UserContext.Provider value={{setCurrUser:setCurrUser, currUser: currUser, photos: photos, setFilteredPhotos:setFilteredPhotos }} >
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

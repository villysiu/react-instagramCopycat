import { useEffect, useState, createContext } from 'react';
import {fetchPhotos} from './components/actions/photoActions'
import { fetchUser } from './components/actions/userActions'
import './App.css';
import bubble_bd from './data/bubble_bd.png'
import PhotoList from './components/PhotoList';
import Header from './components/Header';
import Spinner from 'react-bootstrap/Spinner';

export const UserContext = createContext();

const App=()=>{
  const [currUser, setCurrUser]=useState(null);
  const [loading, setLoading]=useState(false)
  const [photos, setPhotos]=useState([])
  const [userPhotos, setUserPhotos]=useState(false)

  useEffect(()=>{
    if(localStorage.getItem('expiredAt')>Date.now)
      fetchUser(setCurrUser, setLoading)
    else{
      localStorage.removeItem('token')
      localStorage.removeItem('expiredAt')
      setCurrUser(null)
      setLoading(false)
    }
  } , [])

  useEffect(()=>{
    fetchPhotos(setPhotos)
  }, [])


  return (
    
    <div className="App" style={{ backgroundImage: `url(${bubble_bd})`, backgroundSize: 'cover'}}>
      <UserContext.Provider value={{ currUser: currUser, setCurrUser:setCurrUser, photos: photos, setPhotos: setPhotos, setUserPhotos:setUserPhotos }} >
        {loading? 
          
            <div><Spinner animation="border" /></div>
            :
            <Header />
        }
        <br /><br /><br />
        { userPhotos ? 
        <PhotoList photos={photos.filter(photo=>photo.photo_uid===currUser.id)} /> : <PhotoList photos={photos} /> }
      </UserContext.Provider>
    </div> 
    
  );
}

export default App;

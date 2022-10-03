import { useEffect, useState, createContext } from 'react';
import {fetchPhotos} from './components/actions/photoActions'
import './App.css';
import bubble_bd from './data/bubble_bd.png'
import PhotoList from './components/PhotoList';
import Header from './components/Header';
import Spinner from 'react-bootstrap/Spinner';

export const AppContext = createContext();
const App=()=>{
  const [currUser, setCurrUser]=useState(null);
  const [loading, setLoading]=useState(true)
  const [pLoading, setPLoading]=useState(true)
  const [photos, setPhotos]=useState([])
  const [filtered, setFiltered]=useState(false)

  useEffect(()=>{
    if(localStorage.getItem('expiredAt')>Date.now){
      setCurrUser(JSON.parse(localStorage.getItem('currUser')))
    }else{
      localStorage.clear()
      setCurrUser(null)
      
    }
    setLoading(false)
  } , [])

  useEffect(()=>{
    fetchPhotos(setPhotos, setPLoading)
  }, [])

  return (
    
    <div className="App" style={{ backgroundImage: `url(${bubble_bd})`, backgroundSize: 'cover'}}>
        {loading || pLoading? 
          
            <div><Spinner animation="border" /></div>
            :
            <div>
              <AppContext.Provider value={{ currUser: currUser, setCurrUser:setCurrUser }} >
                <Header setPhotos={setPhotos} setFiltered={setFiltered}/>
              </AppContext.Provider>

              <br /><br /><br />
              <PhotoList currUser={currUser} setPhotos={setPhotos} photos={filtered? photos.filter(photo=>photo.photo_uid===currUser.id) : photos} /> 
            </div>
        }
    </div> 
    
  );
}

export default App;

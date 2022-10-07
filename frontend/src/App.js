import { useEffect, useState, createContext, useReducer } from 'react';
import {fetchPhotos} from './components/actions/photoActions'
import './App.css';
import bubble_bd from './data/bubble_bd.png'
import PhotoList from './components/PhotoList';
import Header from './components/Header';
import Spinner from 'react-bootstrap/Spinner';
import { reducer } from './components/reducers/reducer';
import Footer from './components/Footer';
export const AppContext = createContext();


const App=()=>{
  const [currUser, setCurrUser]=useState(null);
  const [loading, setLoading]=useState(true)
  const [filtered, setFiltered]=useState(false)
  const initialState={loading: true, photos:[],error:null}
  const [state, dispatch]=useReducer(reducer, initialState)
  useEffect(()=>{
    if(localStorage.getItem('exp')>Date.now()){
      setCurrUser(JSON.parse(localStorage.getItem('currUser')))
    }else{
      localStorage.clear()
      setCurrUser(null)
    }
    setLoading(false)
  } , [])

  useEffect(()=>{
    fetchPhotos(dispatch)
  }, [])

  return (
    
    <div className="App" style={{ backgroundImage: `url(${bubble_bd})`, backgroundSize: 'cover'}}>
        {loading || state.loading? 
          
            <div><Spinner animation="border" /></div>
            :
            <div>
              <AppContext.Provider value={{ currUser: currUser, setCurrUser:setCurrUser, setFiltered:setFiltered, state: state, dispatch:dispatch }} >
                <Header setFiltered={setFiltered}  />
              

                <br /><br /><br />
                <PhotoList photos={filtered? state.photos.filter(photo=>photo.owner_id===currUser.id) : state.photos} /> 
                <br /><br /><br /><br /><br /><br />
                <Footer />
              </AppContext.Provider>
            </div>
        }
    </div> 
    
  );
}

export default App;

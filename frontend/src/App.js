import { useEffect, useState, createContext } from 'react';
import './App.css';
import PhotoList from './components/PhotoList';
import Header from './components/Header';

import Spinner from 'react-bootstrap/Spinner';
export const UserContext = createContext();

const App=()=>{
  
  const [currUser, setCurrUser]=useState(null);
  const [loading, setLoading]=useState(false)
  const [photos, setPhotos]=useState([])
  
  useEffect(()=>{
    const fetchUser=async ()=>{
      setLoading(true)
      try{
        const response=await fetch("http://localhost:3000/private/getLoginUser", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token"),
            },
        })
        if (!response.ok) throw Error
        const {id, name}=await response.json()
        
        setCurrUser({id:id,name:name})
        setLoading(false) 
        
      } catch(error){
        console.log("error", error) //("Unauthorized Request. Must be signed in.")
        setLoading(false) 
      }   
    }
    fetchUser()
  } , [])
  
  return (
    
    <div className="App">
      <UserContext.Provider value={{setCurrUser:setCurrUser, currUser: currUser }} >
        {loading? 
          
            <div><Spinner animation="border" /></div>
            :
            <Header setPhotos={setPhotos} />             
        }
        <br /><br /><br />
        <PhotoList photos={photos} setPhotos={setPhotos} />
      </UserContext.Provider>
    </div> 
    
  );
}

export default App;

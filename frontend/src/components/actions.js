export const fetchUser=async (setCurrUser, setLoading)=>{
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
    } catch(error){
      console.log("error", error) //("Unauthorized Request. Must be signed in.")
      setCurrUser(null) 
    } finally {
      setLoading(false);
    }  
    
}

export const fetchPhotos=async (setPhotos, setFilteredPhotos) =>{
    const url="http://localhost:3000/photos.json"
    try{
        const response=await fetch(url)
        if(!response.ok) throw Error

        const data=await response.json()
        setPhotos(data)
        setFilteredPhotos(data)
    } catch(error){
        console.log(error)
        setPhotos([])
        setFilteredPhotos([])
    } 
}
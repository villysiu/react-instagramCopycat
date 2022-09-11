export const fetchUser=async (setCurrUser, setLoading)=>{
    setLoading(true)
    try{
      const response=await fetch("http://localhost:3000/private/getLoginUser", {
          headers: {
              "Content-Type": "application/json",
              "Authorization": localStorage.getItem("token"),
          },
      })
      if (!response.ok) {
        console.log("not login")
      throw "not login"}
      const {id, name}=await response.json()
      
      setCurrUser({id:id,name:name})
    } catch(error){
      console.log(error) //("Unauthorized Request. Must be signed in.")
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
export const updatePhoto=async (id, descBox, setDesc, setShow, setError)=>{
    const url=`http://localhost:3000/photos/${id}`
    try{
        const response=await fetch(url, {
            method:'PATCH',
            headers: {
                'Content-type': "application/json",
                'accept': "application/json",
                'Authorization': localStorage.getItem('token'),
            },
            body: JSON.stringify({
                desc: descBox
            })
        })
        if(!response.ok) throw Error
        const data=await response.json()
        setDesc(data.desc)
        setShow(false)
    } catch (error) {
        setError(error)
    }
}
export const deletePhoto=async (id, setShow, setFilteredPhotos, setError)=>{
    const url=`http://localhost:3000/photos/${id}`
    try {
        const response=await fetch(url, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
        
        })
        if(!response.ok) throw Error
        setFilteredPhotos(prev => prev.filter(p=>p.id!==id));
        setShow(false)
    } catch (error) {
        setError(error)
    }
}
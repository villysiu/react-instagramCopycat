const url="http://localhost:3000"

export const fetchUser=async (setCurrUser, setLoading)=>{
    setLoading(true)
    try{
      const response=await fetch(`${url}/private/getLoginUser`, {
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
      localStorage.removeItem('token')

    } finally {
      setLoading(false);
    }  
    
}

export const fetchPhotos=async (setPhotos, setFilteredPhotos) =>{
    
    try{
        const response=await fetch(`${url}/photos.json`)
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
export const addPhoto=async (photo, setFilteredPhotos, toggleRightPanel)=>{
    
    try {
        const response=await fetch(`${url}/photos`, {
            method: 'post',
            headers: {
                "content-type": 'application/json',
                "Authorization": localStorage.getItem("token")
            },
            body: JSON.stringify(photo)
        })
        if(!response.ok) throw Error
        
        const data=await response.json()
        setFilteredPhotos(prev=>[...prev, data])
        toggleRightPanel(false)
    }catch(error){
        console.log("Oops! Something wetn wrong. Please try again")
        window.location.reload()
    }
}
export const updatePhoto=async (id, descBox, setDesc, setShow )=>{
    
    try{
        const response=await fetch(`${url}/photos/${id}`, {
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
        // console.log("Oops! Something wetn wrong. Please try again.")
        
        window.location.reload()
    }
}
export const deletePhoto=async (id, setShow, setFilteredPhotos)=>{
    
    try {
        const response=await fetch(`${url}/photos/${id}`, {
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
        // setError("Oops! Something went wrong. Please try again.")
        window.location.reload()
    }
}

export const toggleHeart=async (id, setNumLikes, currUserLiked, setCurrUserLiked)=>{
    const actionAttributes =currUserLiked? 
        {link: `${url}/photos/${id}/likes/${currUserLiked.liked_id}`, do: "delete"}
        :
        {link: `${url}/photos/${id}/likes`, do: "post"}

    try {
        const response = await fetch(actionAttributes.link, {
            method: actionAttributes.do,
            headers: {
                'Content-type': "application/json",
                'Authorization': localStorage.getItem('token'),
            },
        })
        if(!response.ok) throw Error
        const data=await response.json()
        
        setCurrUserLiked(data)
        setNumLikes(prev=>currUserLiked? prev-1 : prev+1)
        
    } catch (error) {
        setCurrUserLiked(null)
        setNumLikes(prev=>prev)
        window.location.reload()
    }
}
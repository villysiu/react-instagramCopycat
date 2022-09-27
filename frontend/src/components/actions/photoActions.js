const url="http://localhost:3000"



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
export const addPhoto=async (formData, setPhotos, setFilteredPhotos, setError, toggleRightPanel)=>{
    
    try {
        const response=await fetch(`${url}/photos`, {
            method: 'POST',
            headers: {
                // "content-type": 'application/json',
                "Authorization": localStorage.getItem("token")
            },
            body: formData
        })
        const data=await response.json()
        if(!response.ok) throw data.error
        
        setFilteredPhotos(prev=>[...prev, data])
        setPhotos(prev=>[...prev, data])
        setError(null)
        toggleRightPanel(false)
    }catch(error){
        console.log(error)
        setError("Oops! Something went wrong. Please try again")
        // window.location.reload()
    }
}
export const updatePhoto=async (id, formData, setDesc, setShow )=>{
    console.log("in updaye")
    try{
        const response=await fetch(`${url}/photos/${id}`, {
            method:'PATCH',
            headers: {
                // 'Content-type': "application/json",
                // 'accept': "application/json",
                'Authorization': localStorage.getItem('token'),
            },
            body: formData
        })
        const data=await response.json()
        if(!response.ok) throw data.error
        setDesc(formData.get('desc'))
        setShow(false)
    } catch (error) {
         console.log(error)
        
        window.location.reload()
    }
}
export const deletePhoto=async (id, setShow, setPhotos, setFilteredPhotos)=>{
    
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
        setPhotos(prev => prev.filter(p=>p.id!==id));
        setShow(false)
    } catch (error) {
        window.location.reload()
    }
}

export const toggleHeart=async (id, setNumLikes, currUserLiked, setCurrUserLiked )=>{

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
        const data=await response.json()
        if(!response.ok) throw data.error
        
        setCurrUserLiked(data)
        setNumLikes(prev=>currUserLiked? prev-1 : prev+1)
        
    } catch (error) {
        setCurrUserLiked(null)
        setNumLikes(prev=>prev)
        window.location.reload()
    }
}
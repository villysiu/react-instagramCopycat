const url="http://localhost:3000"



export const fetchPhotos=async (setPhotos, setPLoading) =>{
    setPLoading(true)
    try{
        const response=await fetch(`${url}/photos.json`)
        const data=await response.json()
        if(!response.ok) throw data.error
        setPhotos(data)
    } catch(error){
        console.log(error)
        setPhotos([])
    }
    finally{
        setPLoading(false)
    }
}
export const addPhoto=async (formData, setPhotos, setError, toggleRightPanel)=>{
    
    try {
        const response=await fetch(`${url}/photos`, {
            method: 'POST',
            headers: {
                "Authorization": localStorage.getItem("token")
            },
            body: formData
        })
        const data=await response.json()
        if(!response.ok) throw data.error
        
        setPhotos(prev=>[data, ...prev])
        setError(null)
        toggleRightPanel(false)
    }catch(error){
        console.log(error)
        setError("Oops! Something went wrong. Please try again")
    }
}
export const updatePhoto=async (id, formData, setDesc, setShow )=>{
    try{
        const response=await fetch(`${url}/photos/${id}`, {
            method:'PATCH',
            headers: {
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
export const deletePhoto=async (id, setShow, setPhotos)=>{
    
    try {
        const response=await fetch(`${url}/photos/${id}`, {
            method: 'delete',
            headers: {
                // 'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
        })
        const data=await response.json()
        if(!response.ok) throw data.error

        setPhotos(prev => prev.filter(p=>p.id!==id));
        setShow(false)
    } catch (error) {
        console.log(error)
    }
}

export const unlike=async (url, likeId, setCount, setUsersLiked, setCurrUserLiked )=>{
    
    try {
        const response = await fetch(url, {
            method: "delete",
            headers: {
                'Content-type': "application/json",
                'Authorization': localStorage.getItem('token'),
            },
        })
        const data=await response.json()
        if(!response.ok) throw data.error
        console.log(data)
        setCurrUserLiked(null)
        setCount(prev=>prev-1)
        setUsersLiked(prev=>prev.filter(obj=>obj.liked_id!==data))
        
    } catch (error) {
        setCurrUserLiked(null)
        
        // window.location.reload()
    }
}
export const like=async (url, setCount, setUsersLiked, setCurrUserLiked )=>{
    
    try {
        const response = await fetch(url, {
            method: "post",
            headers: {
                'Content-type': "application/json",
                'Authorization': localStorage.getItem('token'),
            },
        })
        const data=await response.json()
        if(!response.ok) throw data.error
        console.log(data)
        setCurrUserLiked(data)
        setCount(prev=>prev+1)
        setUsersLiked(prev=>[...prev, data])
        
    } catch (error) {
        setCurrUserLiked(null)
    }
}
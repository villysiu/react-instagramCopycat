const url="http://localhost:3000"

export const fetchPhotos=async (dispatch) =>{
    try{
        const response=await fetch(`${url}/photos.json`)
        const data=await response.json()
        if(!response.ok) throw data.error
        dispatch({type:"FETCH_PHOTOS", payload: data})
        
    } catch(error){
        console.log(error)
        dispatch({type:"FETCH_ERROR", payload: error})
    }
}
export const addPhoto=async (formData, dispatch, toggleRightPanel)=>{
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
        dispatch({type: 'ADD_PHOTO', payload: data})
        toggleRightPanel(false)
    }catch(error){
        console.log(error)
        dispatch({type: 'ADD_ERROR', payload: "Oops! Something went wrong. Please try again"})
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
export const deletePhoto=async (id, setShow, dispatch)=>{
    
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

        dispatch({type:'DELETE_PHOTO', payload:id})
        setShow(false)
    } catch (error) {
        console.log(error)
    }
}

export const unlike=async (url, setLikedUsers, setCurrUserLiked )=>{
    
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
        setCurrUserLiked(null)
        setLikedUsers(prev=>prev.filter(obj=>obj.liked_id!==data))
        
    } catch (error) {
        setCurrUserLiked(null)
    }
}
export const like=async (url, setLikedUsers, setCurrUserLiked )=>{
    
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
        setCurrUserLiked(data)
        setLikedUsers(prev=>[...prev, data])
        
    } catch (error) {
        setCurrUserLiked(null)
    }
}
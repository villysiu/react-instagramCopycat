const url="http://localhost:3000"
export const login=async (userInfo, setCurrUser, setError, toggleRightPanel)=>{
    
    try{
        const response=await fetch(`${url}/login`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        const data=await response.json()
        if(!response.ok) throw data.error

        localStorage.setItem("token", response.headers.get("Authorization"))
        localStorage.setItem('currUser', JSON.stringify(data))
        localStorage.setItem('expiredAt', Date.now+30*60*1000)
        // {id: 1, email: 'mickey@disney.com', name: 'mickey'}
        setCurrUser(data)
        toggleRightPanel(false)

    }catch(error){
        setError("Email address not existed or incorrect password. Please try again.")
    }
}
export const signup=async (userInfo, setCurrUser, setError, toggleRightPanel)=>{
    
    try{
        const response=await fetch(`${url}/signup`, {
            method: 'POST',
            headers: {
                "content-type": 'application/json',
                "accept": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        const data=await response.json()
        if(!response.ok) throw data.error

        localStorage.setItem('token', response.headers.get("Authorization"))
        localStorage.setItem('currUser', JSON.stringify(data))
        localStorage.setItem('expiredAt', Date.now+30*60*1000)
        setCurrUser(data)
        toggleRightPanel(false)
    } catch (error){
        setError(error)
    }
}

export const logout=async (setCurrUser, setError, toggleRightPanel)=>{
    try{
        const response=await fetch(`${url}/logout`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
        
        if(!response.ok) throw Error
    
        localStorage.clear()
        setCurrUser(null)
        toggleRightPanel(false)
        
    }catch(error){
        setError("Logout failed")
    }
}
// export const fetchUser=async (setCurrUser, setLoading)=>{
//     setLoading(true)
//     try{
//       const response=await fetch(`${url}/private/getLoginUser`, {
//           headers: {
//               "Content-Type": "application/json",
//               "Authorization": localStorage.getItem("token"),
//           },
//       })
//       if (!response.ok) throw Error
//       const {id, name}=await response.json()
      
//       setCurrUser({id:id,name:name})
//     } catch(error){
//       console.log(error)
//       setCurrUser(null) 
//       localStorage.removeItem('token')
//       localStorage.removeItem('expiredAt')

//     } finally {
//       setLoading(false);
//     }  
    
// }
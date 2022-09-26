export const login=async (userInfo, setCurrUser, setError, toggleRightPanel)=>{
    const url="http://localhost:3000/login"
    try{
        const response=await fetch(url, {
            method: "post",
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        const data=await response.json()
        if(!response.ok) throw data.error

        localStorage.setItem("token", response.headers.get("Authorization"))
        localStorage.setItem('expiredAt', Date.now+10*60*1000)
        // {id: 1, email: 'mickey@disney.com', name: 'mickey'}
        setCurrUser(data)
        toggleRightPanel(false)

    }catch(error){
        setError("Email address not existed or incorrect password. Please try again.")
    }
}
export const signup=async (userInfo, setCurrUser, setError, toggleRightPanel)=>{
    const url="http://localhost:3000/signup"
    try{
        const response=await fetch(url, {
            method: 'post',
            headers: {
                "content-type": 'application/json',
                "accept": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        const data=await response.json()
        if(!response.ok) throw data.error

        localStorage.setItem('token', response.headers.get("Authorization"))
        localStorage.setItem('expiredAt', Date.now+10*60*1000)
        setCurrUser(data)
        toggleRightPanel(false)
    } catch (error){
        setError(error)
    }
}

export const logout=async (setCurrUser, setError, toggleRightPanel)=>{
    const url="http://localhost:3000/logout"
    try{
        const response=await fetch(url, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
        
        if(!response.ok) throw Error
        
        localStorage.removeItem('token')
        localStorage.removeItem('expiredAt')
        setCurrUser(null)
        toggleRightPanel(false)
        
    }catch(error){
        setError("Logout failed")
    }
}
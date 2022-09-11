import { useContext } from "react";
import { UserContext } from '../App'
import { CanvasContext } from "./Header";
import Button from "react-bootstrap/Button";
const Logout =()=>{
    const {setCurrUser} = useContext(UserContext);
    const toggleRightPanel = useContext(CanvasContext)
    const logout=async ()=>{
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
            setCurrUser(null)
            toggleRightPanel(false)
            
        }catch(error){
            console.log("error", error)
        }
    }
    const handleClick=e=>{
        e.preventDefault()
        logout()
    }
    return (
        <div>
            <Button variant="primary" type="Logout" onClick={handleClick} > Logout </Button>
        </div>
    )
}
export default Logout
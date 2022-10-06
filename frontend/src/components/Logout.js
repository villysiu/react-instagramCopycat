import { useContext } from "react";
import { AppContext } from '../App'
import Button from "react-bootstrap/Button";
import { logout } from "./actions/userActions";
const Logout =({setError,toggleRightPanel})=>{
    const {setCurrUser, setFiltered} = useContext(AppContext);
    
    const handleClick=e=>{
        e.preventDefault()
        logout(setCurrUser,setFiltered, setError, toggleRightPanel)
    }
    return (
        <div>
            <Button variant="primary" type="Logout" onClick={handleClick} > Logout </Button>
        </div>
    )
}
export default Logout
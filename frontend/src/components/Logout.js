import { useContext } from "react";
import { UserContext } from '../App'
import Button from "react-bootstrap/Button";
import { logout } from "./actions/userActions";
const Logout =({setError,toggleRightPanel})=>{
    const {setCurrUser} = useContext(UserContext);
    
    const handleClick=e=>{
        e.preventDefault()
        logout(setCurrUser, setError, toggleRightPanel)
    }
    return (
        <div>
            <Button variant="primary" type="Logout" onClick={handleClick} > Logout </Button>
        </div>
    )
}
export default Logout
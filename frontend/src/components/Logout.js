import { useContext } from "react";
import { AppContext } from '../App'
import Button from "react-bootstrap/Button";
import { logout } from "./actions/userActions";
const Logout =({setError,toggleRightPanel, setFiltered})=>{
    const {setCurrUser} = useContext(AppContext);
    
    const handleClick=e=>{
        e.preventDefault()
        logout(setCurrUser, setError, toggleRightPanel)
        setFiltered(false)
    }
    return (
        <div>
            <Button variant="primary" type="Logout" onClick={handleClick} > Logout </Button>
        </div>
    )
}
export default Logout
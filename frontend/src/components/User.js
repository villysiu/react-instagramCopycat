import Signup from "./Signup";
import Login from './Login'
import Logout from './Logout'
import { useState, useContext } from "react";
import { UserContext } from "../App";
const User = () => {
    const {currUser}=useContext(UserContext)
    const [error, setError]=useState(null)
    const [login, toggleLogin] = useState(true)

    if(currUser) {
        return (
            <div>
                <h2>Hello {currUser.name}</h2>
                <Logout />
            </div>
        )}
    
    return (
        
        <div>
            <div>{error}</div>
            <div>
                {login ? 
                    <Login setError={setError} toggleLogin={toggleLogin}  />
                    :
                    <Signup setError={setError} toggleLogin={toggleLogin} />
                }
            </div>
        </div>
    )
}
export default User
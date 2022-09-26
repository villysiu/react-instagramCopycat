import Signup from "./Signup";
import Login from './Login'
import Logout from './Logout'
import { useState, useContext } from "react";
import { UserContext } from "../App";
const User = ({toggleRightPanel}) => {
    const {currUser}=useContext(UserContext)
    const [error, setError]=useState(null)
    const [login, toggleLogin] = useState(true)



    if(currUser) {
        return (
            <div>
                <h2>Hello {currUser.name}</h2>
                <Logout setError={setError} toggleRightPanel={toggleRightPanel} />
            </div>
        )}
    
    return (
        
        <div>
            <div className="text-danger">{error}</div>
            <div>
                {login ? 
                    <Login error={error} setError={setError} toggleLogin={toggleLogin} toggleRightPanel={toggleRightPanel} />
                    :
                    <Signup error={error} setError={setError} toggleLogin={toggleLogin} />
                }
            </div>
        </div>
    )
}
export default User
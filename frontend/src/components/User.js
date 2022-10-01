import Signup from "./Signup";
import Login from './Login'
import Logout from './Logout'
import { useState, useContext } from "react";
import { AppContext } from "../App";
const User = ({toggleRightPanel, setFiltered}) => {
    const {currUser}=useContext(AppContext)
    const [error, setError]=useState(null)
    const [login, toggleLogin] = useState(true)
    
    if(currUser) {
        return (
            <div>
                <h2>Hello {currUser.name}</h2>
                <Logout setError={setError} toggleRightPanel={toggleRightPanel} setFiltered={setFiltered}/>
            </div>
        )}
    
    return (
        
        <div>
            <div className="text-danger">{error}</div>
            <div>
                {login ? 
                    <Login setError={setError} toggleLogin={toggleLogin} toggleRightPanel={toggleRightPanel} />
                    :
                    <Signup setError={setError} toggleLogin={toggleLogin} />
                }
            </div>
        </div>
    )
}
export default User
import { useRef, useContext } from "react" 
import {Form, Button} from 'react-bootstrap'
import { AppContext } from '../App'
import { login } from "./actions/userActions";
 const Login = ({ setError, toggleLogin,toggleRightPanel }) =>{
    
    const {setCurrUser} = useContext(AppContext);
    const formRef=useRef()
    
    const handleSubmit=e=>{
        e.preventDefault()
        const formData=new FormData(formRef.current)

        login({user: Object.fromEntries(formData)}, setCurrUser, setError, toggleRightPanel)
        e.target.reset() 
    }
    const handleSignup=e=>{
        e.preventDefault()
        toggleLogin(false)
        setError(null)
    }

    return(
        <div>
            <h2>Welcome back! </h2>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="name@example.com" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="password" required/>
                </Form.Group>
                
                <Button variant="primary" type="submit"> Login </Button>
  
            </Form>
            <br />
            <div>Not registered yet, <a href="#signup" onClick={handleSignup} >Signup</a> here</div>
        </div>

    )
}
export default Login
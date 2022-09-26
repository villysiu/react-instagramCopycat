import { useRef, useContext } from "react"
import {Form, Button} from 'react-bootstrap'
import { UserContext } from '../App'
import { signup } from "./actions/userActions"
const Signup=({setError, toggleLogin, toggleRightPanel })=>{
   
    const {setCurrUser} = useContext(UserContext);

    const formRef = useRef()
    
    const handleSubmit=e=>{
        e.preventDefault()
        const formData=new FormData(formRef.current)
        const {name, email, password}=Object.fromEntries(formData)
         
         const user={
            "user":{ name: name, email: email, password: password }
         }
         signup(user, setCurrUser, setError, toggleRightPanel)
         e.target.reset()
    }
    const handleLogin=e=>{
        e.preventDefault();
        toggleLogin(true)
        setError(null)
    }
    return(
        <div>
            <h2>Sign up for free.</h2>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="name@example.com" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name="name" placeholder="name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="password"  required minLength="6"/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Signup
                </Button>
                
            </Form>
            <br />
            <div>Already registered, <a href="#login" onClick={handleLogin} >Login</a> here.</div>
        </div>

    )
    
}
export default Signup
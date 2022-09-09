import { useRef, useContext } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { UserContext } from '../App'
import { CanvasContext } from "./Header";

const Signup=({setError, toggleLogin })=>{
   
    const {setCurrUser} = useContext(UserContext);
    const toggleRightPanel = useContext(CanvasContext)

    const signup=async (user)=>{
        const url="http://localhost:3000/signup"
        try{
            const response=await fetch(url, {
                method: 'post',
                headers: {
                    "content-type": 'application/json',
                    "accept": "application/json"
                },
                body: JSON.stringify(user)
            })
            if(!response.ok) throw Error

            const {id, name}=await response.json()
            localStorage.setItem('token', response.headers.get("Authorization"))
        
            setCurrUser({id:id,name:name})
            toggleRightPanel(false)
        } catch (error){
            console.log("error", error)
            setError("Email is already in use.")
        }
    }
    const formRef = useRef()
    
    const handleSubmit=e=>{
        e.preventDefault()
        const formData=new FormData(formRef.current)
        const {name, email, password}=Object.fromEntries(formData)
         
         const user={
            "user":{
                name: name, email: email, password: password
            }
         }
         signup(user)
         e.target.reset()
    }
    const handleClick=e=>{
        e.preventDefault();
        toggleLogin(true)
        setError(null)
    }
    return(
        <div>
            <h2>Sign up for free.</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="name@example.com" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>name</Form.Label>
                    <Form.Control type="name" name="name" placeholder="name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="password"  required minLength="6"/>
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit">
                        Signup
                    </Button>
                </div>
            </form>
            <br />
            <div>Already registered, <a href="#login" onClick={handleClick} >Login</a> here.</div>
        </div>

    )
    
}
export default Signup
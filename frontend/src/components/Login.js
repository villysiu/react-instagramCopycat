import { useRef, useContext } from "react" 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { UserContext } from '../App'
import { CanvasContext } from "./RightPanelCanvas";

 const Login = ({setError, toggleLogin }) =>{
    
    const {setCurrUser} = useContext(UserContext);
    const toggleRightPanel = useContext(CanvasContext)
    const formRef=useRef()
    
    const login=async (userInfo)=>{
        const url="http://localhost:3000/login"
        try{
            const response=await fetch(url, {
                method: "post",
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
            
            if(!response.ok) throw Error

            const {id,name}=await response.json()
            localStorage.setItem("token", response.headers.get("Authorization"))

            setCurrUser({id:id, name:name})
            toggleRightPanel(false)
            
        }catch(error){
           setError("Email address not existed or incorrect password. Please try again.")
        }
    }

    const handleSubmit=e=>{
        e.preventDefault()
        const formData=new FormData(formRef.current)
        const {email, password}=Object.fromEntries(formData)
        
        login({user: { email: email, password: password }})
        e.target.reset()

    }
    const handleClick=e=>{
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
            <div>Not registered yet, <a href="#signup" onClick={handleClick} >Signup</a> here</div>
        </div>

    )
}
export default Login
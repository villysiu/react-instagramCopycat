import { Button } from "react-bootstrap"
const Footer=()=>{
    const email="villysiu@gmail.com"

    return(
        <div>
            2022 Instagram Copycat created by
            <Button variant="link" onClick={()=>window.open(`mailto:${email}`)}>Villy Siu</Button>
                
        </div>
    )
}
export default Footer
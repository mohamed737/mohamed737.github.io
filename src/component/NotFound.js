import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap"
import {  useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';

const NotFound = () => {
 

    
const {pathname} = useLocation()


const USER = useSelector(state => state.User)
const { logedIn } = USER
 
    return (
        <div>
          <h1>404 Not Found</h1>  
        
          {!logedIn &&  <div> <h4>Please Login To Continue</h4> 
           <Button variant="secondary" size="lg" block >
           <Link to='/login'> login</Link>
   </Button> </div>}
         
          
        </div>
    )
}

export default NotFound

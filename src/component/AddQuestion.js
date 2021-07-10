import { useState } from "react";
import { Form, Button, Container} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { AddQuestionAction } from "../actions/AddQuestionAction";
import { withRouter } from 'react-router-dom';


const AddQuestion = (props) => {

    const dispatch = useDispatch();


const [first, setFirst] = useState()
const [second, setSecond] = useState()


  const User = useSelector(state => state.User)
  const {  user } = User

    const handleSubmit = (e) => {
      e.preventDefault()
     
    
        const question = {author:user,
        optionOneText:first,
        optionTwoText:second}
 
      dispatch(AddQuestionAction(question))
      console.log('before')

      props.history.push('/')
    
      }
    return (
        <Container style={{padding:12}}>
        <Form   onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Would You Rather</Form.Label>
          <Form.Control required type="text" placeholder="First Option" onChange={e => setFirst(e.target.value)}/>       
        </Form.Group>    
        <Form.Group className="mb-3" >
          <Form.Label>or</Form.Label>
          <Form.Control required type="text" placeholder="Second Option" onChange={e => setSecond(e.target.value)}/>
        </Form.Group>     
          <Button variant="primary" type="submit"> SUBMIT </Button>
       
      </Form>
      </Container>
    )
}

export default withRouter(AddQuestion)

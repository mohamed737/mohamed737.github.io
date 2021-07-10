import {  ProgressBar, Col, Row, Container, Card, Image, Button } from "react-bootstrap";
import { useSelector } from "react-redux";


function QuestionStatus(props) {

    const {match} = props
    const DATA = useSelector(state => state.Data)
    const { questions, users } = DATA
    const USER = useSelector(state => state.User)
    const { user } = USER
console.log('match for status', match)

    return (
        <Container style={{padding:12}}>
            {console.log('see return', questions.find(({ id }) => id === match))}
            {questions.find(({ id }) => id === match)
                &&
                [questions.find(({ id }) => id === match)]
                    .filter(x => x.optionOne.votes.find(element => element === user) === user
                        || x.optionTwo.votes.find(element => element === user) === user)
                    .map(x =>
                        <Card style={{padding:12}} key={x.id + 34566}>
                            <Card.Header>Asked by {users.find(({ id }) => id === x.author).name}</Card.Header>
                            <Card.Body>
                                <Container>
                                    <Row>
                                        <Col md="auto">
                                            <Image src={users.find(({ id }) => id === x.author).avatarURL} roundedCircle width="95" height="95" />
                                        </Col>
                                        <Col xs lg="9"> <Card.Title>Results:</Card.Title>
                                            <Card style={{padding:12}} border={x.optionOne.votes.find(element => element === user) && 
                                                      'danger'} >
                                                <Card.Body>
                                                    <Card.Title>{x.optionOne.text}?{x.optionOne.votes.find(element => element === user) && 
                                                     <Button variant="success" size="sm" disabled>Your Aswer</Button>}</Card.Title>
                                                    <ProgressBar now={100 * (x.optionOne.votes.length) / (x.optionOne.votes.length + x.optionTwo.votes.length)}
                                                        label={`${100 * (x.optionOne.votes.length) / (x.optionOne.votes.length + x.optionTwo.votes.length)}%`} />
                                                    <Card.Text>
                                                        {x.optionOne.votes.length} Vote out of {x.optionOne.votes.length + x.optionTwo.votes.length}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                            <Card style={{padding:12}} border={x.optionTwo.votes.find(element => element === user) && 
                                                     'danger'} >
                                                <Card.Body>
                                                    <Card.Title>{x.optionTwo.text}?{x.optionTwo.votes.find(element => element === user) &&
                                                     <Button variant="success"  size="sm" disabled>Your Aswer</Button>}</Card.Title>
                                                   
                                                    <ProgressBar now={100 * (x.optionTwo.votes.length) / (x.optionOne.votes.length + x.optionTwo.votes.length)}
                                                        label={`${100 * (x.optionTwo.votes.length) / (x.optionOne.votes.length + x.optionTwo.votes.length)}%`} />
                                                    <Card.Text></Card.Text>
                                                    <Card.Text>
                                                        {x.optionTwo.votes.length} Vote out of {x.optionOne.votes.length + x.optionTwo.votes.length}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>

                    )
            }
        </Container>
    )
}

export default QuestionStatus


{/* <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text> */}
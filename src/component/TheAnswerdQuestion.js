import { Card, Image, Col, Row, Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

function TheAnswerdQuestion() {

    const DATA = useSelector(state => state.Data)
    const { questions, users } = DATA
    const USER = useSelector(state => state.User)
    const { user } = USER

    return (
        <Container style={{padding:12}}>
            {
                questions.filter(x => x.optionOne.votes.find(element => element === user) === user
                    || x.optionTwo.votes.find(element => element === user) === user
                ).map((y) =>
                    <Card style={{ padding: 20 }} key={y.id + 54645}>
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col>
                                        <Image src={users.find(({ id }) => id === y.author).avatarURL} roundedCircle width="95" height="95" />
                                    </Col>

                                    <Col>
                                        
                                            <h2>{users.find(({ id }) => id === y.author).name} Asks</h2>
                                            <h2> Would You Rather</h2>
                                            <div>{y.optionOne.text}</div>
                                            <div>or</div>
                                            <div>{y.optionTwo.text}</div>
                                       
                                        <Button variant="primary" size="lg" block as ={Link} to={`/questions/${y.id}`}>
                                        View Poll
                                        </Button>

                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                )}
        </Container>
    )
}

export default TheAnswerdQuestion

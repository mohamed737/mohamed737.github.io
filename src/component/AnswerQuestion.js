import { useState } from "react";
import { Form, Button, Col, Row, Container, Card, Image, } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { AnswerQuestionAction } from '../actions/AnswerQuestionAction';


function AnswerQuestion(props) {

    const {match} = props

    const DATA = useSelector(state => state.Data)
    const { questions, users } = DATA
    const USER = useSelector(state => state.User)
    const { user } = USER

    const [answer, setAnswer] = useState()

    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('match for answer', match)
        const submitAnswer = {authedUser: user,
            qid:match,
            answer:answer}
            console.log('optionOne', submitAnswer)

            dispatch(AnswerQuestionAction(submitAnswer))

        console.log(answer)
    }

    return (
        <Container style={{padding:12}}>
            {console.log('see return', questions.find(({ id }) => id === match))}
            {questions.find(({ id }) => id === match)

                &&
                [questions.find(({ id }) => id === match)]
                    .filter(x => x.optionOne.votes.find(element => element === user) === undefined
                        && x.optionTwo.votes.find(element => element === user) === undefined).map(x =>

                            <Card key={x.id +45646762}>
                                <Card.Header>{users.find(({ id }) => id === x.author).name} Asks</Card.Header>
                                <Card.Body>
                                    <Container>
                                    <Row>
                                        <Col md="auto">
                                            <Image src={users.find(({ id }) => id === x.author).avatarURL} roundedCircle width="95" height="95" />
                                        </Col>
                                        <Col xs lg="9"> <Card.Title>Would You Rather...</Card.Title>



                                            <Form onSubmit={handleSubmit}>
                                                <fieldset>
                                                    <Form.Group as={Row} className="mb-3">
                                                       
                                                        <Col sm={5}>

                                                            <Form.Check
                                                                key={x.id + 1567}
                                                                type="radio"
                                                                label={`${x.optionOne.text}?`}
                                                                name="formHorizontalRadios"
                                                                id="optionOne"
                                                                onChange={e => setAnswer(e.target.id)} />
                                                            <Form.Check
                                                                key={x.id + 752}
                                                                type="radio"
                                                                label={`${x.optionTwo.text}?`}
                                                                name="formHorizontalRadios"
                                                                id="optionTwo"
                                                                onChange={e => setAnswer(e.target.id)} />

                                                        </Col>
                                                    </Form.Group>
                                                </fieldset>
                                                <Form.Group as={Row} className="mb-3">
                                                    <Col sm={{ span: 10, offset: 2 }}>
                                                        <Button type="submit">submit</Button>
                                                    </Col>
                                                </Form.Group>
                                            </Form>

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

export default AnswerQuestion


{/* <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text> */}
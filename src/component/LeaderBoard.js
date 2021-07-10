import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function LeaderBoard() {

    const DATA = useSelector(state => state.Data)
    const { users } = DATA

    return (
        <Container style={{ padding: 20 }}>{users.map((x) => (
            {
                id: x.id,
                name: x.name,
                addedQuestions: x.questions.length,
                answerd: Object.keys(x.answers).length,
                sum: x.questions.length + Object.keys(x.answers).length,
                avatarURL: x.avatarURL
            })
        ).sort((a, b) => -a.sum + b.sum).map((v) =>

            <Card style={{ padding: 20 }} key={v.id +567}>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Image src={v.avatarURL} roundedCircle width="95" height="95" />
                            </Col>

                            <Col>
                                
                                    <h2>{v.name}</h2>
                                    <div>answerd: {v.answerd}</div>
                                    <div>added: {v.addedQuestions}</div>
                                    <div>sum: {v.sum}</div>
                                

                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        )}
        </Container>
    )
}

export default LeaderBoard

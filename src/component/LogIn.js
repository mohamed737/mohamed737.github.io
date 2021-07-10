import { Card, Dropdown, Container, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LogInAction } from "../actions/UserActions";



const LogIn = () => {

    const dispatch = useDispatch();

    const DATA = useSelector(state => state.Data)
    const { users } = DATA

const HandleClick = (m) => {
    dispatch(LogInAction(m))

}

    return (
        <Container style={{padding:12}}>
            <Card className="text-center">
                <Card.Header>Welcome to Would You Rather</Card.Header>
                <Card.Body>
                    <Card.Title>Chose Your Character</Card.Title>

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            LogIN
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          
                            {users.map((x) =>
                                <Dropdown.Item key={x.id +456} onClick={() => HandleClick(x.id) }>
                                    <Image key={x.id + 1} src={x.avatarURL} roundedCircle width="35" height="35" />
                                    {x.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Body>

            </Card>
        </Container>

    )
}

export default LogIn


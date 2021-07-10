import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogOutAction } from "../actions/UserActions";



const Header = () => {

    const dispatch = useDispatch();
    const DATA = useSelector(state => state.Data)
    const { users } = DATA
    const USER = useSelector(state => state.User)
    const { user } = USER



    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Would You Rather</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link  as={Link}  to='/'> Home</Nav.Link>
                        <Nav.Link  as={Link}  to='/leaderboard'>  Leader Board</Nav.Link>
                        <Nav.Link  as={Link}  to='/add'> add Question</Nav.Link>
                    </Nav>
                    {users.find(({ id }) => id === user) && [users.find(({ id }) => id === user)].map(x =>
                        <Nav className='m-auto' key ={x.id + 86457}>
                            <NavDropdown title={x.name} id="basic-nav-dropdown" >
                 <NavDropdown.Item  onClick={() => dispatch(LogOutAction())}>LogOut</NavDropdown.Item>
                            </NavDropdown>
                            <Image src={x.avatarURL} roundedCircle width="40" height="40" />
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header

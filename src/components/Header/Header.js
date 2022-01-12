import React from 'react'
import Logo from './image 1.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Navbar } from 'react-bootstrap';
import './header.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const history = useNavigate();

    return (
        <Navbar className='bg-none mt-3 lg-12 xl-12 md-12 ' >
            <Container>
                <Navbar.Brand href="#">
                    <img
                        alt=""
                        src={Logo}
                        width="58"
                        height="58"
                        className="d-inline-block align-center "
                    />{' '}
                    <span className='logo-head '>Ever Hub</span>
                </Navbar.Brand>
                <Form className="d-flex">
                    <Button className="signoutbutton" variant="primary" onClick={() => history("/sign-in")}>Sign In</Button>
                </Form>
            </Container>
        </Navbar>
    )
}

export default Header

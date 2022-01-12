import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import Logo from '../Header/image 1.png'
import './signin.css'

const Signin = () => {
    return (
            <Container>
                <div className='logindetail'>
                    <div className='logowithimage'>
                        <img
                            alt=""
                            src={Logo}
                            width="58"
                            height="58"
                            className="d-inline-block align-center image"
                        />{' '}
                        <h1 className='loginhead'>EverHub</h1>
                    </div>
                    <p className='loginpara'>Welcome to EverHub</p>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className='loginform' type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className='loginform' type="password" placeholder="Password" />
                        </Form.Group>
                        <div className='loginbutton'>
                            <Button className='loginbutton1' variant="primary" type="submit">
                                Sign In
                            </Button>
                            <Button className='loginbutton2' variant="light" type="submit">
                                <i class="google fab fa-google"></i> Sign In with Google
                            </Button>
                        </div>
                    </Form>
                </div>
            </Container>
    )
}

export default Signin

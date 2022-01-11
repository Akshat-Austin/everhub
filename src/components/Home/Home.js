import React from 'react'
import { Button, Container, Form, FormControl } from 'react-bootstrap'
import './home.css'

const Home = () => {
    return (
        <div className='mt-5'>
            <Container>
                <div className='home-head'>
                    <h1 className='homeheading-2 text-primary'>Welcome Amy!</h1>
                    <div className='form d-flex md-12 lg-12 xl-12'>
                        <h4 className='homeheading-1'>My Linkedin:</h4>
                        <h4 className='linkedinlink'>www.linkedin.com/in/</h4>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="searchbar"
                                aria-label="Search"
                            />
                            <Button className="savebutton" variant="primary">Save</Button>
                        </Form>
                    </div>
                    <div className='requestcontainer'>
                        <h3 className='requestcontainerheading'>Request warm introductions to startups.</h3>
                        <p className='requestcontainerparagraph'>Have questions about a role? Contact your Talent Expert at <b>meet@ever.careers</b> to <br/> discuss any of the list opportunities in more detail.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Home

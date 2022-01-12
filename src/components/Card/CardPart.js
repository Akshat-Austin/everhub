import React, {useState, useEffect} from 'react'
import CardImage from './image 2.png'
import { Container, Button } from 'react-bootstrap'
import './card.css'

const CardPart = () => {
    const [showModal, setShowModal] = useState("d-none")
    
    useEffect(() => {
        window.onclick = function (event) {
            if (event.target.className === "modal d-block") {
                setShowModal("d-none")
            }
        }
        return () => {
            setShowModal("d-none")
        }
    }, [])

    return (
        <div  className='maincardcontainer'>
            <Container>
                <div className='home-head'>
                    <h1 className='cardheading-2 text-dark'>Sorted for You</h1>
                    <p className='cardparagraph'>Don’t see any openings that match what you’re looking for? Reach out to your Talent Expert at <br/> meet@ever.careers to expore other options.</p>
                </div>
                <div className='cardgroup'>
                    <div className='card'>
                        <img
                            alt=""
                            src={CardImage}
                            width="58"
                            height="58"
                            className="d-inline-block align-center cardimage"
                        />
                        <h1 className='cardhead'>Anthropic</h1>
                        <p className='subhead'>Senior Security <br /> Engineer</p>
                        <Button className="requestbutton" variant="primary" onClick={() => setShowModal("d-block") }>
                            Request Intro
                        </Button>
                    </div>
                    <div className='card'>
                        <img
                            alt=""
                            src={CardImage}
                            width="58"
                            height="58"
                            className="d-inline-block align-center cardimage"
                        />
                        <h1 className='cardhead'>Anthropic</h1>
                        <p className='subhead'>Senior Security <br /> Engineer</p>
                        <Button className="requestbutton" variant="primary" onClick={() => setShowModal("d-block")} >
                            Request Intro
                        </Button>
                    </div>
                    <div className='card'>
                        <img
                            alt=""
                            src={CardImage}
                            width="58"
                            height="58"
                            className="d-inline-block align-center cardimage"
                        />
                        <h1 className='cardhead'>Anthropic</h1>
                        <p className='subhead'>Senior Security <br /> Engineer</p>
                        <Button className="requestbutton" variant="primary" onClick={() => setShowModal("d-block")} >
                            Request Intro
                        </Button>
                    </div>
                    <div className='card'>
                        <img
                            alt=""
                            src={CardImage}
                            width="58"
                            height="58"
                            className="d-inline-block align-center cardimage"
                        />
                        <h1 className='cardhead'>Anthropic</h1>
                        <p className='subhead'>Senior Security <br /> Engineer</p>
                        <Button className="requestbutton" variant="primary" onClick={() => setShowModal("d-block")} >
                            Request Intro
                        </Button>
                    </div>
                </div>
                <div className='jobgroup'>
                    <div className='card'>
                        <img
                            alt=""
                            src={CardImage}
                            width="58"
                            height="58"
                            className="d-inline-block align-center cardimage"
                        />
                        <h1 className='cardhead'>Anthropic</h1>
                        <p className='subhead'>Senior Security <br /> Engineer</p>
                        <Button className="requestbutton" variant="primary" onClick={() => setShowModal("d-block") }>
                            Request Intro
                        </Button>
                    </div>
                    <div className='card'>
                        <img
                            alt=""
                            src={CardImage}
                            width="58"
                            height="58"
                            className="d-inline-block align-center cardimage"
                        />
                        <h1 className='cardhead'>Anthropic</h1>
                        <p className='subhead'>Senior Security <br /> Engineer</p>
                        <Button className="requestbutton" variant="primary" onClick={() => setShowModal("d-block")} >
                            Request Intro
                        </Button>
                    </div>
                    <div className='card'>
                        <img
                            alt=""
                            src={CardImage}
                            width="58"
                            height="58"
                            className="d-inline-block align-center cardimage"
                        />
                        <h1 className='cardhead'>Anthropic</h1>
                        <p className='subhead'>Senior Security <br /> Engineer</p>
                        <Button className="requestbutton" variant="primary" onClick={() => setShowModal("d-block")} >
                            Request Intro
                        </Button>
                    </div>
                    <div className='card'>
                        <img
                            alt=""
                            src={CardImage}
                            width="58"
                            height="58"
                            className="d-inline-block align-center cardimage"
                        />
                        <h1 className='cardhead'>Anthropic</h1>
                        <p className='subhead'>Senior Security <br /> Engineer</p>
                        <Button className="requestbutton" variant="primary" onClick={() => setShowModal("d-block")} >
                            Request Intro
                        </Button>
                    </div>
                </div>
                <div id="myModal" className={`modal ${showModal}`}>
                    <div className="modalcontent">
                        <h3 className="modalheading">Note for Ever Team</h3>
                        <p className="modalparagraph">In a few sentences, please tell the Ever team why you’re interested in the role, why you think you’rea good <br/> fit, and any other relevant information we should take into account when making the introduction.</p>
                        <textarea className='textarea1' rows="4" cols="50"></textarea>
                        <Button className="requestbutton1" variant="primary" onClick={() => setShowModal("d-none")}>
                            Request Intro
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CardPart

import React, {Component} from "react";

import {Container,Row,Col} from 'react-bootstrap';

import Github from './images/github-logo.png';

import Linked from './images/Linkedin-logo.png';

import Phone from './images/phone.png';

import Gmail from './images/Gmail-Logo.jpg';

import './css/contact.css';

import Profile from './images/profilePic.JPEG';

class contact extends Component {

    render(){

        return(

            <div className="contactForm">

                <Container>

                    <Row>

                        <Col lg="12" className="banner">
                    
                            Contact Me
                    
                        </Col>

                    </Row>

                <div className="back">
    
                    <Row className="margin">

                         <Col lg="12">
                        
                            <img src={Profile} alt="Profile" height="240px" width="250px" className="contactPic"/>

                        </Col>

                     </Row>

                     <Row className="margin">

                        <Col lg="12" className="github">
                        
                         <img src={Github} alt="git" height="20px" width="20px" className="gitHubLogo"/> Github : <a href="https://github.com/justindurocher" className="git" target="_blank"> justindurocher</a>
                        
                        </Col>

                     </Row>

                     <Row className="margin">

                        <Col lg="12" className="linkedin">
                        
                        <img src={Linked} alt="git" height="20px" width="20px" className="linkedLogo"/> LinkedIn : <a href="https://www.linkedin.com/in/justin-durocher-a34946197" className="link" target="_blank"> justin-durocher</a>
                        
                        </Col>

                     </Row>

                     <Row className="margin">

                        <Col lg="12" className="email">

                        <img src={Gmail} alt="git" height="20px" width="20px" className="gmailLogo"/> Email : <a className="yourEmail" href="https://www.google.com/gmail" target="_blank"> justduro@gmail.com </a>

                        </Col>

                     </Row>

                     <Row className="margin">

                        <Col lg="12" className="phone">
                        
                        <img src={Phone} alt="git" height="20px" width="20px" className="phoneLogo"/> Phone : <a className="yourPhone" href="https://support.apple.com/explore/messages" target="_blank"> 1-(860)-(808)-(4596) </a>
                        
                        </Col>

                     </Row>

                </div>

                <Row>

                        <Col lg="12" className="footer">
                    
                            Copyright©

                        </Col>

                    </Row>

                </Container>

            </div>

        )

    }

}

export default contact;
import React, {Component} from "react";

import {Container,Row,Col} from 'react-bootstrap';

import './css/contact.css';

import Profile from './images/profilePic.JPEG';

class contact extends Component {

    render(){

        return(

            <div className="contactForm">

                <Container>

                    <Row>

                        <Col sm="12" className="banner">
                    
                            Contact Me
                    
                        </Col>

                    </Row>

                <div className="back">
    
                    <Row>

                         <Col sm="12">
                        
                            <img src={Profile} alt="Profile" height="240px" width="250px" className="contactPic"/>

                        </Col>

                     </Row>

                     <Row>

                        <Col sm="12" className="github">
                        
                          Github : <a href="https://github.com/justindurocher" className="git"> justindurocher</a>
                        
                        </Col>

                     </Row>

                     <Row>

                        <Col sm="12" className="linkedin">
                        
                          LinkedIn : <a href="https://www.linkedin.com/in/justin-durocher-a34946197" className="link"> justin-durocher</a>
                        
                        </Col>

                     </Row>

                     <Row>

                        <Col sm="12" className="email">

                            Email : justduro@gmail.com

                        </Col>

                     </Row>

                     <Row>

                        <Col className="phone">
                        
                            Phone : 1-(860)-(808)-(4596) 
                        
                        </Col>

                     </Row>

                </div>

                <Row>

                        <Col className="footer">
                    
                            Copyright©

                        </Col>

                    </Row>

                </Container>

            </div>
            
            // <div className="contactForm">

            //     <div className="contactMe">Contact Me:</div>

            //     <br></br>

            //     <div className="list">

            //         GitHub : <a href="https://github.com/justindurocher"> justindurocher</a>

            //         <br></br>

            //         LinkedIn : <a href="https://www.linkedin.com/in/justin-durocher-a34946197/">justin-durocher</a>

            //         <br></br>

            //         Email : justduro@gmail.com


            //         <br></br>

            //         Phone : 1-(860)-(808)-(4596)

            //     </div>
            // </div>

        )

    }

}

export default contact;
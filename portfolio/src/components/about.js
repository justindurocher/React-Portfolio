import React, {Component} from "react";

import {Container, Col, Row} from "react-bootstrap";

import Profile from './images/profilePic.JPEG';

import './css/aboutMe.css'

class about extends Component {

    render() {

        return(

            <div className="aboutMePage">

            <Container>

                <Row>

                    <Col lg="12" className="banner">
                    
                        React.js Portfolio
                    
                    </Col>

                </Row>

                <div className="back">

                <Row>

                    <Col lg="12" className="profile">
                    
                        <img className="profilePic" src={Profile} height="240px" width="250px" alt="Profile Pic"/>

                    </Col>

                </Row>

                <Row>

                    <Col lg="12" className="intro">
                    
                        Hello, my name is Justin Durocher and I am 20 years old and live in the Greater Hartford area in Connecticut. I currently am employed as a overnight supervisor at UPS, and a valet attendant at the Marriot Hotel and Captial Grille in Downtown Hartford.

                    </Col>

                </Row>

                <Row>

                    <Col lg="12" className="intro">
                    
                        I have been learning how to code for the past year and have been actively seeking a full-time job in that professional field when I am older. I have just completed a full stack web development bootcamp at UCONN; learning how to build prograssive web applications in React.js and Node.js.
                    
                    </Col>

                </Row>

                <Row>

                    <Col lg="12" className="intro">
                    
                        When I am not coding or working, I am usually outside enjoying the weather, playing sports with friends, or watching television with the family at home.
                    
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

export default about;
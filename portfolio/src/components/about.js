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

                    <Col sm="12" className="banner">
                    
                        About Me
                    
                    </Col>

                </Row>

                <div className="back">

                <Row>

                    <Col sm="12" className="profile">
                    
                        <img className="profilePic" src={Profile} height="240px" width="250px" alt="Profile Pic"/>

                    </Col>

                </Row>

                <Row>

                    <Col sm="12" className="intro">
                    
                        Hello, my name is Justin Durocher and I am 20 years old and live in Hartford CT. I currently am employed as a overnight supervisor at UPS, and a valet attendant at the Marriot Hotel in Downtown Hartford.

                    </Col>

                </Row>

                <Row>

                    <Col sm="12" className="intro">
                    
                        I have been learning how to code for the past year and want to work in that professional field when I am older. I currently am in a full stack web development bootcamp learning how to build prograssive web applications in React.js and Node.js.
                    
                    </Col>

                </Row>

                <Row>

                    <Col sm="12" className="intro">
                    
                        When I am not coding or working, I am usually outside enjoying the weather, playing sports with friends, or watching television with the family at home.
                    
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

        )

    }

}

export default about;
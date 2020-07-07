import  React, {Component} from "react";

import {Container,Row,Col,Card,Button} from 'react-bootstrap';

import videogame from './images/Capture3.PNG';

import Weather from './images/weather.png';

import Planner from './images/Capture.PNG'

import './css/portfolio.css'

class portfolio extends Component{

    render() {

        return(

            <div className="portfolio">

                <Container>

                    <Row>

                        <Col lg="12" className="banner">
                        
                            Projects
                        
                        </Col>

                    </Row>

                    <div className="back2">

                        <Container>

                            <Row>

                                <Col lg="4" className="margin-bottom">

                                <Card style={{ width: '18rem' }} className="card">

                                    <Card.Img variant="top" src={videogame} height="160px" width="180px"/>

                                    <Card.Body>

                                    <Card.Title className="font">Gaming News Search App</Card.Title>

                                    <Card.Text className="text">

                                            In this application, the user is able to search any video game ever created

                                                to see the most recent news atricles on that particular game.

                                    </Card.Text>

                                        <Button variant="info" href="https://justindurocher.github.io/Video-Game-Search-App" target="_blank">View</Button>

                                        <Row className="spacing">

                                            <Col>
                                            
                                                Github Link:
                                            
                                            </Col>

                                        </Row>

                                        <Row>


                                            <Col>
                                            
                                                <a className="githubLink" href="https://github.com/justindurocher/Video-Game-Search-App" target="_blank">Game News App</a> 
                                            
                                            </Col>

                                        </Row>

                                    </Card.Body>

                                </Card>


                                    </Col>

                                <Col lg="4" className="margin-bottom">

                                <Card style={{ width: '18rem' }} className="card">

                                    <Card.Img variant="top" src={Weather} height="160px" width="180px"/>

                                    <Card.Body>

                                    <Card.Title className="font">Weather Dashboard</Card.Title>

                                    <Card.Text className="text">

                                            In this application, the user is able input their current city location to 
                                            see the current weather, as well as a five day forcast.

                                    </Card.Text>

                                        <Button variant="info" href="https://justindurocher.github.io/Weather-Dashboard/" target="_blank">View</Button>

                                        <Row className="spacing">

                                            <Col>

                                                Github Link:

                                            </Col>

                                            </Row>

                                            <Row>


                                            <Col>

                                                <a className="githubLink" href="https://github.com/justindurocher/Weather-Dashboard" target="_blank">Weather Dashboard</a> 

                                            </Col>

                                            </Row>

                                    </Card.Body>

                                </Card>
           
                                </Col>

                                <Col lg="4" className="margin-bottom">

                                <Card style={{ width: '18rem' }} className="card">

                                    <Card.Img variant="top" src={Planner} height="160px" width="180px" />

                                    <Card.Body>

                                    <Card.Title className="font">Day Planner</Card.Title>

                                    <Card.Text className="text">

                                            In this application, the user is able to plan out their nine to five day schedules.
                                            As the day goes on, the blocks will be color coated to show the time of day.

                                    </Card.Text>

                                        <Button variant="info" href="https://justindurocher.github.io/Day-Planner/" target="_blank">View</Button>

                                        <Row className="spacing">

                                            <Col>

                                                Github Link:

                                            </Col>

                                            </Row>

                                            <Row>


                                            <Col>

                                                <a className="githubLink" href="https://github.com/justindurocher/Day-Planner" target="_blank">Day Planner</a> 

                                            </Col>

                                            </Row>

                                    </Card.Body>

                                </Card>
            
                                </Col>

                            </Row>

                        </Container>

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

export default portfolio;
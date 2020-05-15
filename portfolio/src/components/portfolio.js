import  React, {Component} from "react";

import {Container,Row,Col,Card,Button} from 'react-bootstrap';

import videogame from './images/Capture3.PNG';

import NBA from './images/game.PNG';

import Living from './images/living.png'

import './css/portfolio.css'

class portfolio extends Component{

    render() {

        return(

            <div className="portfolio">

                <Container>

                    <Row>

                        <Col sm="12" className="banner">
                        
                            Projects
                        
                        </Col>

                    </Row>

                    <div className="back2">

                        <Container>

                            <Row>

                                <Col sm="4">

                                <Card style={{ width: '18rem' }} className="card">

                                    <Card.Img variant="top" src={videogame} height="160px" width="180px"/>

                                    <Card.Body>

                                    <Card.Title className="font">Gaming News Search App</Card.Title>

                                    <Card.Text className="text">

                                            In this application, the user is able to search any video game ever created

                                                to see the most recent news atricles on that particular game.

                                    </Card.Text>

                                        <Button variant="info" href="https://justindurocher.github.io/Video-Game-Search-App">View</Button>

                                    </Card.Body>

                                </Card>


                                    </Col>

                                <Col sm="4">

                                <Card style={{ width: '18rem' }} className="card">

                                    <Card.Img variant="top" src={NBA} height="160px" width="180px"/>

                                    <Card.Body>

                                    <Card.Title className="font">NBA Javascript Game</Card.Title>

                                    <Card.Text className="text">

                                            In this application, the user is able choose from all well known NBA Players

                                            to play in a computer basketball shooting contest. Highest Score Wins!

                                    </Card.Text>

                                        <Button variant="info" href="https://justindurocher.github.io/NBA-Game/public/">View</Button>

                                    </Card.Body>

                                </Card>
           
                                </Col>

                                <Col sm="4">

                                <Card style={{ width: '18rem' }} className="card">

                                    <Card.Img variant="top" src={Living} height="160px" width="180px" />

                                    <Card.Body>

                                    <Card.Title className="font">Living.js</Card.Title>

                                    <Card.Text className="text">

                                            In this application, the user is able to compare their current cities living wages, population,

                                            and much more. The application also shows prior search history.

                                    </Card.Text>

                                        <Button variant="info">View</Button>

                                    </Card.Body>

                                </Card>
            
                                </Col>

                            </Row>

                        </Container>

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

export default portfolio;
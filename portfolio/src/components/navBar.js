import React, { Component } from "react";

import {Nav, Navbar} from 'react-bootstrap';

import './css/navBar.css';



class navbar extends Component {
    render(){
        return(

            <Navbar bg="info" variant="dark" sticky="top">
            <Navbar.Brand href="#home">Justin Durocher</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">About Me</Nav.Link>
              <Nav.Link href="/portfolio">Projects</Nav.Link>
              <Nav.Link href="https://docs.google.com/document/d/16A5Z64eX0jHCl3c2y4zLkMO4XZwj6elAXm6BUK64ct4/edit?usp=sharing" target="_blank">Resume</Nav.Link>
              <Nav.Link href="/contact">Contact Me</Nav.Link>
            </Nav>
            </Navbar>

        )
    }
}

export default navbar;
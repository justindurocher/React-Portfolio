import React, { Component } from "react";

import {Nav, Navbar} from 'react-bootstrap';

import './css/navBar.css';



class navbar extends Component {
    render(){
        return(

            <Navbar bg="info" variant="dark" sticky="top" className="navBar">
            <Navbar.Brand href="/">Justin Durocher</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">About</Nav.Link>
              <Nav.Link href="/portfolio">Projects</Nav.Link>
              <Nav.Link href="https://docs.google.com/document/d/1UMHiCTgOPS13G1IGwFrsokOrGqnUoS7_xnGHHGNJYaM/edit?usp=sharing" target="_blank">Resume</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            </Navbar>

        )
    }
}

export default navbar;
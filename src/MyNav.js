import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
const MyNav = () => {
  return(
    <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Low light</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
  </>
  )
}

export default MyNav;
import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const MyNav = () => {
  return(
    <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Low-light image enhancement</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/about">
          <Link to="/about">
            about us
          </Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  </>
  )
}

export default MyNav;
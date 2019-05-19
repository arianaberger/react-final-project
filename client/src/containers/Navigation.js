import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'

function Navigation() {
  return(
    <>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src=""
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        Savvy Saver (logo)
      </Navbar.Brand>

      <Nav className="mr-auto">
        <Nav.Link href="#home">+ Add Deposit</Nav.Link>
        <Nav.Link href="#home">+ Add Transaction</Nav.Link>
      </Nav>
      </Navbar>
    </>
  )
}

export default Navigation

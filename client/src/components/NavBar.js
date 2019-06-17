import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import '../css/App.css'

const NavBar = () => {
  return(
    <>
      <div className="splash"></div>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Navbar.Brand href="/" className="logo">Savvy Saver</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
           <Nav.Link href="/">Dashboard</Nav.Link>
           <NavDropdown title="Add Transaction" id="basic-nav-dropdown">
           <NavDropdown.Item href="/debit">Debit</NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item href="/credit">Credit</NavDropdown.Item>
           </NavDropdown>
           <Nav.Link href="/about">About</Nav.Link>
         </Nav>
       </Navbar.Collapse>
      </Navbar>
    </>

  )
}

export default NavBar

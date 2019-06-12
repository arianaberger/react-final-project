import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import splash from '../images/splash.png'

const NavBar = () => {
  return(
    <>
      <img src={splash} alt="Splash"/>
      <Navbar bg="light" variant="light" expand="sm">
        <Navbar.Brand>Savvy Saver</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
           <Nav.Link href="/">View Accounts</Nav.Link>
           <NavDropdown title="Add Transaction" id="basic-nav-dropdown">
           <NavDropdown.Item href="/debit">Debit</NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item href="/credit">Credit</NavDropdown.Item>
           </NavDropdown>
         </Nav>
       </Navbar.Collapse>
      </Navbar>
    </>

  )
}

export default NavBar

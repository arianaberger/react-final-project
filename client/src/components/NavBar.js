import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";


const NavBar = () => {
  return(
    <>
      <div className="splash"></div>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Navbar.Brand className="logo">Savvy Saver</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" >
              Dashboard
            </Nav.Link>
           <NavDropdown title="Add Transaction" id="basic-nav-dropdown">
             <NavDropdown.Item>
               <LinkContainer to="/debit">
                 <NavItem>
                   Debit
                 </NavItem>
               </LinkContainer>
             </NavDropdown.Item>
             <NavDropdown.Divider />
             <NavDropdown.Item>
               <LinkContainer to="/credit">
                 <NavItem>
                   Credit
                 </NavItem>
               </LinkContainer>
             </NavDropdown.Item>
           </NavDropdown>
           <Nav.Link as={Link} to="/about" >
             About
           </Nav.Link>
         </Nav>
       </Navbar.Collapse>
      </Navbar>
    </>

  )
}

export default NavBar

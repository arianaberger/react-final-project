import React from 'react';
import {Navbar} from 'react-bootstrap'

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
      </Navbar>
    </>
  )
}

export default Navigation

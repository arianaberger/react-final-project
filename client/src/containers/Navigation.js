import React from 'react';
import {Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';


const Navigation = () => {
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

    <div className="navbar">
     <NavLink to="/">Home</NavLink>
     <NavLink to="/movies">Movies</NavLink>
     <NavLink to="/directors">Directors</NavLink>
     <NavLink to="/actors">Actors</NavLink>
    </div>
    </>
  )
}

export default Navigation

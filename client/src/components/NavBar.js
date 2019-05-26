import React from 'react';
// import {Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return(
    <>
    <div className="navbar">
     <NavLink to="/">[ Home]</NavLink>
     <NavLink to="/addtransaction">[ + Add transaction ]</NavLink>
    </div>
    </>
  )
}

export default NavBar

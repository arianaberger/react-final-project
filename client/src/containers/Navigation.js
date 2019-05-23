import React from 'react';
// import {Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return(
    <>
    <div className="navbar">
     <NavLink to="/">[ Home]</NavLink>
     <NavLink to="/add-deposit">[ + Add Deposit ]</NavLink>
     <NavLink to="/add-payment">[ + Add Payment ]</NavLink>
    </div>
    </>
  )
}

export default Navigation

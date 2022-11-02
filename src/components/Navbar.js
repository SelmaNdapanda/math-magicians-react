import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

const Navbar = () => (
  <header className="nav-header">
    <h1>Math Magicians</h1>
    <nav className="nav-bar">
      <NavLink className="nav-link" to="/">Home</NavLink>
      <NavLink className="nav-link" to="/calculator">Calculator</NavLink>
      <NavLink className="nav-link" to="/quote">Quote</NavLink>
    </nav>
  </header>
);

export default Navbar;

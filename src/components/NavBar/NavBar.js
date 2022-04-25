import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <div className="navigation">
    <h1>Air pollutiion</h1>
    <nav>
      <ul className="navLinks">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="details">Details</NavLink>
        </li>
      </ul>

    </nav>
  </div>
);

export default NavBar;

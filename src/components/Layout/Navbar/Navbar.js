import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const NavbarList = ['Home', 'Water Polo Club', 'Recipe Engine'];
  return (
    <div className="portfolio-navbar">
      <h1 className="portfolio-name">SE-TO HO MAN</h1>
      <div className="row navber-list">
        {NavbarList.map((list, i) => {
          return list === 'Home' ? (
            <NavLink to="/" className="nav-button" key={i}>
              <div className="colactive">{list}</div>
            </NavLink>
          ) : (
            <NavLink
              to={`/${list.toLowerCase().split(' ').join('')}`}
              className="nav-button"
              key={i}
            >
              <div className="col">{list}</div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;

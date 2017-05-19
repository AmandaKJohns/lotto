import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink exact to="/">SignUp</NavLink></li>
      <li><NavLink to="/lotteries">Lotteries</NavLink></li>
    </ul>    
  </header>
);

export default Header;
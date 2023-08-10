
import React from 'react';
import '../App.scss';
import {Link} from 'react-router-dom'
function NavBar() {
  return (
    <div className="Links">
      <ul>
        <li>
          <Link to="/">
            HOME
          </Link>
        </li>
        <li>
          |
        </li>
        <li>
          <Link to="/Mandolins">
            MANDOLINS
          </Link>
        </li>
        <li>
          |
        </li>
        <li>
          <Link to="/Banjos">
            BANJOS
          </Link>
        </li>
        <li>
          |
        </li>
        <li>
          <Link to="/Equipment">
            EQUIPMENT
          </Link>
        </li>
        <li>
          |
        </li>
        <li>
          <Link to="/Prices">
            PRICES
          </Link>
        </li>
        <li>
          |
        </li>
        <li>
          <Link to="/Aboutus">
            ABOUT US
          </Link>
        </li>
        <li>
          |
        </li>
        <li>
          <Link to="/Events">
            EVENTS
          </Link>
        </li>
        <li>
          |
        </li>
        <li>
          <Link to="/Foundation">
            FOUNDATION
          </Link>
        </li>
      </ul>
    </div>
    
  );
}

export default NavBar;

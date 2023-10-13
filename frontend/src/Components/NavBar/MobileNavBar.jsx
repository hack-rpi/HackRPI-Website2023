import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './HamburgerMenu.css';
import transparentLogo from '../../../assets/logo_transparent.png'; // Adjust the path according to your folder structure
import { NavLink } from 'react-router-dom';

const MobileNavBar = () => (
    <div className="mobile-navbar">
        <Menu>
            <NavLink id="home" className="menu-item" to="/">Home</NavLink>
            <NavLink id="faq" className="menu-item" to="/faq">FAQ</NavLink>
        </Menu>
        <NavLink to="/" style={{ paddingLeft: 30 }}>
              <img
                src={transparentLogo}
                className="d-inline-block align-top"
                width="40"
                height="40"
              />
              <div
                className="d-inline-block align-top"
                style={{
                  fontFamily: 'Mokoto',
                  fontSize: 20,
                  padding: 5,
                }}
              >
                HACKRPI
              </div>
            </NavLink>
    </div>
);

export default MobileNavBar;

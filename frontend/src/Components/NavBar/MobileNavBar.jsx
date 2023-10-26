import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './MobileNavBar.css';
import transparentLogo from '../../../assets/logo_transparent.png'; // Adjust the path according to your folder structure
import { NavLink } from 'react-router-dom';

const MobileNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);  // Added state to handle the menu open/close

    const handleStateChange = (state) => {
        setIsOpen(state.isOpen);  // Update the state when the menu is opened/closed
    };

    const closeMenu = () => {
        setIsOpen(false);  // Close the menu
    };

    return (
        <div className="mobile-navbar">
            <Menu isOpen={isOpen} onStateChange={handleStateChange}>
                <NavLink id="home" className="menu-item" to="/" onClick={closeMenu}>Home</NavLink>
                <NavLink id="faq" className="menu-item" to="/faq" onClick={closeMenu}>FAQ</NavLink>
                <NavLink id="schedule" className="menu-item" to="/schedule" onClick={closeMenu}>Schedule</NavLink>
                <NavLink id="team" className="menu-item" to="/team" onClick={closeMenu}>Team</NavLink>
                <NavLink id="prizes" className="menu-item" to="/prizes" onClick={closeMenu}>Prizes</NavLink>
                <NavLink id="sponsor-us" className="menu-item" to="/sponsor-us" onClick={closeMenu}>Sponsor</NavLink>
            </Menu>
            <NavLink to="/" style={{ paddingLeft: 30 }} onClick={closeMenu}>
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
};

export default MobileNavBar;

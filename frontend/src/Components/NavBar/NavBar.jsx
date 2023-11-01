import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from '../../../assets/hackrpi_logo.png';
import { NavLink } from 'react-router-dom';

import transparentLogo from '../../../assets/logo_transparent.png';

class NavBar extends React.Component {
  render() {
    return (
      <>
        <style>{`
          @media screen and (max-width: 980px) {
            .mainNav {
              display: none;
            }
          }
          
          .pageNav {
            text-decoration: none;
            color: rgba(255, 255, 255, 0.25);
            padding: .5rem; 
          }
          
          .pageNav:hover {
            color: rgba(255, 255, 255, 0.45);
          }
          
          .active, .active:hover {
            color: rgba(255, 255, 255, 1);
          }
        `}</style>
        <Navbar
          collapseOnSelect
          variant="dark"
          sticky="top"
          style={{ backgroundColor: '#191919', padding: '0.5rem' }}
        >
          <Container
            fluid
            style={{
              display: 'flex',
              flexDirection: 'row',
              // justifyContent: 'center',
              alignItems: 'center',
              fontFamily: 'Poppins Light',
              fontSize: 15,
              color: 'white',
            }}
          >
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
            
            <Nav className='mainNav' style={{ marginRight: 'auto' }}>
              <NavLink to="/home" className='pageNav'> Home </NavLink>
              <NavLink to="/faq" className='pageNav'> FAQ </NavLink>
              <NavLink to="/schedule" className='pageNav'> Schedule </NavLink>
              <NavLink to="/maps" className='pageNav'> Maps </NavLink>
              <NavLink to="/prizes" className='pageNav'> Prizes </NavLink>
              <NavLink to="/team" className='pageNav'> Team </NavLink>
              <NavLink to="/sponsor-us" className='pageNav'> Sponsor </NavLink>
            </Nav>

            <Nav
              className="mainNav"
              style={{ alignLeft: 'auto', alignItems: 'center' }}
            >
              <Nav.Link href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
                MLH Code of Conduct
              </Nav.Link>

              <Nav className="d-flex" style={{ paddingRight: '10vw' }}>
                <Nav.Link href="https://organize.mlh.io/participants/events/9892-hackrpi">
                  <Button
                    variant="outline"
                    size="sm"
                    style={{ backgroundColor: '#910307', color: 'white' }}
                  >
                    Register
                  </Button>
                </Nav.Link>
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavBar;

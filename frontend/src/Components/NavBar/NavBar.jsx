import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logo from "../../../assets/hackrpi_logo.png"

class NavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar
          style={{ backgroundColor: '#8B0000', padding: '1rem' }}
          variant="dark"
          sticky="top"
        >
          <Container fluid>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '1.25rem',
              }}
            >
              <Navbar.Brand href="#home">
                <img
                  src={logo}
                  width="35"
                  height="32"
                  className="d-inline-block align-top"
                />
                HackRPI X
              </Navbar.Brand>
              <Nav.Link
                href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                style={{
                  paddingLeft: '1rem',
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                MLH Code of Conduct
              </Nav.Link
                href="https://my.mlh.io/oauth/authorize?client_id=mWuOuj6yD4rOvlubrBrUZvktKYcKccdfEePZWf--O6k&redirect_uri=http%3A%2F%2Fhackrpi%2Fouath&response_type=token"
style={{
                  paddingLeft: '1rem',
                  color: 'white',
                  textDecoration: 'none',
                }}
                >

                Register
              </Nav.Link>
              {/*
              <Nav.Link href="#about" style={{ paddingLeft: '1rem', color: 'white', textDecoration: 'none' }}>
                About
              </Nav.Link>
              <Nav.Link href="#faq" style={{ paddingLeft: '1rem', color: 'white', textDecoration: 'none' }}>
                FAQ
              </Nav.Link>
              <Nav.Link href="#sponsors" style={{ paddingLeft: '1rem', color: 'white', textDecoration: 'none' }}>
                Sponsors
              </Nav.Link>
               */}
            </div>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavBar;

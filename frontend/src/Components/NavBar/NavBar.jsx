import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from "../../../assets/hackrpi_white.png"

class NavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar style={{ backgroundColor: "#8B0000", padding: "1rem" }} variant="dark">
          <Container fluid>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '1.25rem' }}>
              <Navbar.Brand href="#home">
                <img
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                HackRPI 2023
              </Navbar.Brand>
              <Nav.Link href="#about" style={{ paddingLeft: '1rem', color: 'white', textDecoration: 'none' }}>
                About
              </Nav.Link>
              <Nav.Link href="#register" style={{ paddingLeft: '1rem', color: 'white', textDecoration: 'none' }}>
                Register
              </Nav.Link>
              <Nav.Link href="#faq" style={{ paddingLeft: '1rem', color: 'white', textDecoration: 'none' }}>
                FAQ
              </Nav.Link>
              <Nav.Link href="#sponsors" style={{ paddingLeft: '1rem', color: 'white', textDecoration: 'none' }}>
                Sponsors
              </Nav.Link>
            </div>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavBar;



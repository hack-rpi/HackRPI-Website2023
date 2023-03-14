import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from "../../../assets/hackrpi_white.png"

class NavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container fluid>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Navbar.Brand href="#home">
                <img
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                HackRPI 2023
              </Navbar.Brand>
              <Nav.Link href="#faq" style={{ paddingLeft: '1rem', color: 'white', textDecoration: 'none' }}>
                FAQ
              </Nav.Link>
            </div>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavBar;

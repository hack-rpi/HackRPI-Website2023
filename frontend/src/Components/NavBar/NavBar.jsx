import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import logo from '../../../assets/hackrpi_logo.png';
import transparentLogo from '../../../assets/logo_transparent.png';

class NavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar variant="dark" sticky="top"
          style={{ fontFamily: "Poppins Light", backgroundColor: '#191919', padding: '0.5rem' }}
        >
          <Container fluid>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '1.25rem',
              }}
            >
              <Navbar.Brand href="#home" style={{paddingLeft: 30}}>
                <img
                  src={transparentLogo}
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                />
                <div className="d-inline-block align-top"
                  style={{
                    fontFamily: "Mokoto",
                    fontSize: 20,
                    padding: 5,
                  }}>
                    HackRPI
                </div>
              </Navbar.Brand>

              {/* <Nav style={{ paddingInline: 300}}></Nav> */}
                
              <Nav className="me-auto" style={{ fontSize: 15, color: "white"}}>
                {/* <Nav.Link href="#about"> About </Nav.Link>
                <Nav.Link href="#faq"> FAQ </Nav.Link>
                <Nav.Link href="#sponsors"> Sponsor </Nav.Link> */}


                <Nav.Link href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
                  MLH Code of Conduct
                </Nav.Link>
                
              </Nav>
                
              <Nav className="d-flex" style={{ marginLeft: "auto" }}> 
                <Nav.Link href="https://my.mlh.io/oauth/authorize?client_id=c5u9kjQ8osE_5AgRrLnsXXvol1gR45AXrabR7upaox0&redirect_uri=https%3A%2F%2Fhackrpi.com%2F&response_type=token">
                    <Button variant="outline" size="sm"
                      style={{
                        backgroundColor: "#910307",
                        color: "white",
                      }}
                    >Register</Button>
                  </Nav.Link>
              </Nav>               

            </div>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavBar;

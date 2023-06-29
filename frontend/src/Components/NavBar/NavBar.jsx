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
      <div style={{ overscrollBehavior: "none", overflow: "hidden", position: "fixed" }}>
        <Navbar variant="dark" sticky="top" style={{ backgroundColor: '#191919', padding: '0.5rem', overscrollBehavior: "none", overflow: "hidden", position: "fixed"}}>
          <Container fluid 
            style={{           
              display: "flex",
              flexDirection: "row",
              // justifyContent: 'center',
              alignItems: 'center',
              fontFamily: "Poppins Light",
              fontSize: 15,
              color: "white",
            }}>

              <Navbar.Brand href="#home" style={{paddingLeft: 30}}>
                <img
                  src={transparentLogo}
                  className="d-inline-block align-top"
                  width="40" height="40"
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
              <Nav style={{ marginRight: "auto" }}>
                <Nav.Link href="#about"> About </Nav.Link>
                <Nav.Link href="#faq"> FAQ </Nav.Link>
                <Nav.Link href="#sponsors"> Sponsor </Nav.Link>      
              </Nav>

              <Nav style={{ alignLeft: "auto", alignItems: 'center',}}>
                <Nav.Link href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
                    MLH Code of Conduct
                </Nav.Link>
                <Nav className="d-flex" style={{ paddingRight: 150 }}> 
                  <Nav.Link href="https://my.mlh.io/oauth/authorize?client_id=c5u9kjQ8osE_5AgRrLnsXXvol1gR45AXrabR7upaox0&redirect_uri=https%3A%2F%2Fhackrpi.com%2F&response_type=token">
                      <Button variant="outline" size="sm" style={{ backgroundColor: "#910307", color: "white" }}>
                        Register
                      </Button>
                  </Nav.Link>
                </Nav>   
              </Nav>               
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;

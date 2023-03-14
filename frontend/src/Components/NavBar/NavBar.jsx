import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../../assets/hackrpi_white.png"
class NavBar extends React.Component {
  render() {
      return (<>
        <Navbar bg="dark" variant="dark">
            <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            HackRPI 2023
          </Navbar.Brand>
        </Container>
      </Navbar>
              </>);
  }
}

export default NavBar;

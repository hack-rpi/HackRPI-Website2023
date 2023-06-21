import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import logo from '../../../assets/hackrpi_logo.png';
import data from '../../../assets/schools.json';
import data2 from '../../../assets/Countries.json';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';
export default function NavBar() {
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState('School');
  const [selectedOption2, setSelectedOption2] = useState('Country');
  console.log(data2);
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>
          <Form>
            <Form.Control type="text" placeholder="First Name" required />
            <br />
            <Form.Control type="text" placeholder="Last Name" />
            <br />
            <Form.Control type="text" placeholder="Email" />
            <br />
            <Form.Control type="text" placeholder="Phone Number" />
            <br />
            <Form.Select aria-label="Gender">
              <option value="Unkown">Prefer Not Say</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
            </Form.Select>
            <br />
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={data}
            />
            <br />
            <Select
              defaultValue={selectedOption2}
              onChange={setSelectedOption2}
              options={data2}
            />
          </Form>
        </Modal.Body>
      </Modal>
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
            </Nav.Link>
            <Nav.Link
              onClick={() => setShow(true)}
              style={{
                paddingLeft: '1rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Register
            </Nav.Link>
            {/*
              href="https://my.mlh.io/oauth/authorize?client_id=c5u9kjQ8osE_5AgRrLnsXXvol1gR45AXrabR7upaox0&redirect_uri=https%3A%2F%2Fhackrpi.com%2F&response_type=token"
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

// export default NavBar;

import React from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import gears from '../../../assets/gears.png';
import computer from '../../../assets/computer.png';
import transparentLogo from '../../../assets/logo_transparent.png';
import './MiniEventPage.css';

const MiniEventPage = () => {
  return (
    <div id="mini-event" className="MiniEventPage">
      <Row>
        <Col xs={0} md={1}></Col>
        <Col xs={0} md={2} className="d-none d-md-block">
          <img src={transparentLogo} width="90" height="90" />
        </Col>
        <Col xs={12} md={6}>
          <h1 className="event-title">HOW TO HACKRPI</h1>
        </Col>
        <Col xs={0} md={2} className="d-none d-md-block">
          <img src={transparentLogo} width="90" height="90" />
        </Col>
        <Col xs={0} md={1}></Col>
      </Row>

      <Row>
        <Col xs={12} className="event-details">
          <p className="event-date">Date: October 21st 12pm-4pm</p>
          <p className="event-location">Location: LOW 4050</p>
        </Col>
      </Row>

      <div className="info-section">
        <div className="buttons-container">
          <Nav.Link href="https://forms.gle/oW3W5Yx6jbNyKfbeA">
            <Button variant="outline" className="button register-btn">
              Register To Attend
            </Button>
          </Nav.Link>
          <Nav.Link href="https://forms.gle/BLoxEemEaKKbzXpt7">
            <Button variant="outline" className="button new-btn">
              Sign Up to Mentor
            </Button>
          </Nav.Link>
        </div>
        <p className="additional-info">
          New to hackathons, web development, coding?
        </p>
      </div>

      <Row className="bottom-content">
        <Col xs={12} md={2} className="content-item">
          <p className="reg-white-text">LEARN</p>
          <p className="red-bold-text">GitHub</p>
        </Col>
        <Col xs={12} md={2} className="content-item">
          <img src={gears} alt="Description" className="content-image" />
        </Col>
        <Col xs={12} md={2} className="content-item">
          <p className="red-bold-text">HTML & CSS</p>
          <p className="reg-white-text">SKILL BUILDING</p>
        </Col>
        <Col xs={12} md={2} className="content-item">
          <img src={computer} alt="Description" className="content-image" />
        </Col>
        <Col xs={12} md={2} className="content-item">
          <p className="reg-white-text">DESIGN Your</p>
          <p className="red-bold-text">First Website</p>
        </Col>
      </Row>

      <p className="additional-info">Get HackRPI Prepared!</p>
      <p className="additional-info">
        {' '}
        Thank You to the MLH Pizza Fund Sponsors for Making Our Event Possible!{' '}
      </p>
      <Row className="sponsor-content">
        <Col className="sponsor-col">
          <a className="sponsor-item" href="https://hackp.ac/pizzafund-github">
            <img
						className="sponsor-image"
              src="https://hackrpi-sponsor-logos.s3.us-east-2.amazonaws.com/GitHub_Logo_White.png"
              alt="GitHub"
            />
            <p className='sponsor-name'>GitHub</p>
          </a>
        </Col>
        <Col className="sponsor-col">
          <a className="sponsor-item" href="https://hackp.ac/pizzafund-stackoverflow">
            <img
						className="sponsor-image"
              src="https://hackrpi-sponsor-logos.s3.us-east-2.amazonaws.com/logo-stackoverflow-dark-bg.png"
              alt="StackOverflow"
            />
            <p className='sponsor-name'>StackOverflow</p>
          </a>
        </Col>
        <Col className="sponsor-col">
          <a className="sponsor-item" href="https://hackp.ac/all-in-pizza-fund">
            <img
						className="sponsor-image"
              src="https://user-images.githubusercontent.com/70516588/134951921-f530bb68-3190-4ab4-b86a-1c96b1d62cab.png"
              alt="all-in"
            />
            <p className='sponsor-name'>all in</p>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default MiniEventPage;

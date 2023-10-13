import React from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import gears from '../../../assets/gears.png';
import computer from '../../../assets/computer.png';
import './MiniEventPage.css';

const MiniEventPage = () => {
  return (
    <div id="mini-event" className="MiniEventPage">
      <h1 className="event-title">HOW TO HACKRPI</h1>
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
          <p className="red-bold-text">Resume</p>
          <p className="reg-white-text">BUILDING</p>
        </Col>
        <Col xs={12} md={2} className="content-item">
          <img src={computer} alt="Description" className="content-image" />
        </Col>
        <Col xs={12} md={2} className="content-item">
          <p className="reg-white-text">DESIGN Your</p>
          <p className="red-bold-text">First Website</p>
        </Col>
      </Row>

      <p className="additional-info">
        Get HackRPI Prepared!
      </p>
    </div>
  );
};

export default MiniEventPage;

import React from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
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
    </div>
  );
};

export default MiniEventPage;

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
      <Tab.Container defaultActiveKey="one">
        <Row>
          <Col xs={12} className="event-details">
            <p className="event-date">Mini Event on October 21st 12pm-4pm</p>
            <p className="event-location">Location: LOW 4050</p>
          </Col>
        </Row>
      </Tab.Container>

      <div className="info-section">
        <div className="register-button">
          <Nav.Link href="https://organize.mlh.io/participants/events/9892-hackrpi">
            <Button variant="outline" className="button register-btn">
              Register Now!
            </Button>
          </Nav.Link>
        </div>
      </div>
    </div>
  );
};

export default MiniEventPage;

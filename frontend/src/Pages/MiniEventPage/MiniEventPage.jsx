import React from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';

const MiniEventPage = () => {
  return (
    <div
      id="mini-event"
      className="MiniEventPage"
      style={{ textAlign: 'center', width: '100%', padding: '0 10%' }}
    >
      <h1 style={{ fontFamily: 'Mokoto', fontSize: '3em', margin: '20px 0' }}>
        HOW TO HACKRPI
      </h1>
      <Tab.Container defaultActiveKey="one">
        <Row>
          <Col xs={12}>
            <p>Mini Event on October 21st 12pm-4pm</p>
            <p>Location: LOW 4050</p>
          </Col>
        </Row>
      </Tab.Container>

      <div className="info-section">
        <div className="register-button">
          <Nav.Link href="https://organize.mlh.io/participants/events/9892-hackrpi">
            <Button
              variant="outline"
              className="button"
              style={{ backgroundColor: '#910307', color: 'white' }}
            >
              Register Now!
            </Button>
          </Nav.Link>
        </div>
      </div>
    </div>
  );
};

export default MiniEventPage;

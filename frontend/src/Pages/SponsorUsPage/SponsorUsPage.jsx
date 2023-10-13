import React from 'react';
import './SponsorUsPage.css';
import { Row, Col } from 'react-bootstrap';

function SponsorUsPage() {
  return (
    <div className="sponsor-container text-center">
      <h2 className="sponsor-title">Sponsor Us!</h2>
      <Row className="sponsor-content justify-content-center">
        <Col lg={6} md={12} className="content-section">
          <h3 className="content-title">Want to support?</h3>
          <iframe
            className="content-iframe"
            src="https://drive.google.com/file/d/17z1LSpUkCeY-AO3tYG5PfMv0U2FngzD_/preview"
            allow="autoplay"
            sandbox="allow-scripts allow-same-origin allow-popups"
          ></iframe>
        </Col>
        <Col lg={6} md={12} className="content-section">
          <h3 className="content-title">Interested in sponsoring?</h3>
          <iframe
            className="content-iframe"
            src="https://drive.google.com/file/d/17GguOFdq5aU5NuFXnHyLxxsXSzxryHQc/preview"
            allow="autoplay"
            sandbox="allow-scripts allow-same-origin allow-popups"
          ></iframe>
        </Col>
      </Row>
    </div>
  );
}

export default SponsorUsPage;

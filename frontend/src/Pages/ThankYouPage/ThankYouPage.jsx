import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './ThankYouPage.css';

const ThankYouPage = () => {
  return (
    <div className="thank-you-page text-center">
      <h1>
      <div className="thankyou-text">
        Thank you <br />
        </div>
        <span className="small-text">
          for joining us at <br /> HACKRPI X!
        </span>
      </h1>
      <div className="button-container">
        <LinkContainer to="/home">
          <Nav.Link className="button">
            Back to HackRPI X
          </Nav.Link>
        </LinkContainer>
      </div>
      <div className="centered-button-container">
        <LinkContainer to="/winners">
          <Nav.Link className="button">
            Check out our Winners!
          </Nav.Link>
        </LinkContainer>
      </div>
    </div>
  );
};

export default ThankYouPage;

import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './ThankYouPage.css';

const ThankYouPage = () => {
  return (
    <div className="thank-you-page">
      <h1>THANK YOU!</h1>
      <div className="button-container">
        <LinkContainer to="/home">
          <Nav.Link className="button">
            Back to HackRPI X
          </Nav.Link>
        </LinkContainer>
      </div>
    </div>
  );
};

export default ThankYouPage;
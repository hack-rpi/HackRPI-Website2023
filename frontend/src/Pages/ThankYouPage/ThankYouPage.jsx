import React from 'react';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './ThankYouPage.css';

const ThankYouPage = () => {
    return (
      <div className="thank-you-page">
        <h1>Thank You for Your Visit!</h1>
        <LinkContainer to="/home">
          <Nav.Link className="button btn btn-outline" style={{ width: '100px', padding: '6px' }}>
            Back to HackRPI X
          </Nav.Link>
        </LinkContainer>
      </div>
    );
  };
  
  export default ThankYouPage;
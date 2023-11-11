import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './SchedulePage.css'; // Import your CSS file for SchedulePage styling

const SchedulePage = () => {
  return (
    <div className="schedule-page-container" style={{ margin: '40px 0' }}>
      <h1>Schedule</h1>
      <Nav.Link
        className="button btn btn-outline"
				style={{padding:'7px'}}
        href="https://calendar.google.com/calendar/u/0?cid=MDNmMmY5MDlhNjNkOTU1ZjljODIyOGQyNzM3NzJkOTg4NzA4NDM5YzBkOTc4ZDgwNTA2MWJhZWMyNTlkOTgxZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
      >
        Add To Google Calendar!
      </Nav.Link>
    </div>
    
  );
};

export default SchedulePage;

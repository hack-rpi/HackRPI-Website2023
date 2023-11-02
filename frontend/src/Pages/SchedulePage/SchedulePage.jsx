import React, { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Schedule from '../../Components/Schedule/Schedule.jsx';
import './SchedulePage.css'; // Import your CSS file for SchedulePage styling

const SchedulePage = () => {
  useEffect(() => {
    // function that scrolls to specific section
    const scrollToSection = (sectionId) => {
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    // event listeners for constant event
    const constantEventsButton = document.getElementById("constant-events-button");
    if (constantEventsButton) {
      constantEventsButton.addEventListener("click", () => scrollToSection("constant-events"));
    }

    // event listeners for nov5 events
    const nov5Button = document.getElementById("nov5-events-button");
    if (nov5Button) {
      nov5Button.addEventListener("click", () => scrollToSection("nov5-events"));
    }

    return () => {
      // clean up the vent listener
      if (constantEventsButton) {
        constantEventsButton.removeEventListener("click", () => scrollToSection("constant-events"));
      }
      if (nov5Button) {
        nov5Button.removeEventListener("click", () => scrollToSection("nov5-events"));
      }
    };
  }, []);

  

  return (
    <div className="schedule-page-container" style={{ margin: '40px 0' }}>
      <h1>Schedule</h1>
      <Nav.Link
        className="button btn btn-outline"
				style={{padding:'5px'}}
        href="https://calendar.google.com/calendar/u/0?cid=MDNmMmY5MDlhNjNkOTU1ZjljODIyOGQyNzM3NzJkOTg4NzA4NDM5YzBkOTc4ZDgwNTA2MWJhZWMyNTlkOTgxZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
      >
        Add To Google Calendar!
      </Nav.Link>
      <div>
        <button id="nov5-events-button" className='button'>November 5th Events</button>
        <button id="constant-events-button" className='button'>Constant Events</button>
      </div>
      <Schedule />
    </div>
  );
};

export default SchedulePage;

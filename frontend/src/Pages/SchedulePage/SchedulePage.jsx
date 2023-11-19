import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Nav } from 'react-bootstrap';
import './SchedulePage.css';
import allEvents from './data/events.jsx';

const localizer = momentLocalizer(moment);

const SchedulePage = () => {
  return (
    <div className="schedule-page-container" style={{ margin: '40px 0' }}>
      <h1>Schedule</h1>
      <Nav.Link
        className="button btn btn-outline"
        style={{ padding: '7px' }}
        href="https://calendar.google.com/calendar/u/0?cid=MDNmMmY5MDlhNjNkOTU1ZjljODIyOGQyNzM3NzJkOTg4NzA4NDM5YzBkOTc4ZDgwNTA2MWJhZWMyNTlkOTgxZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
      >
        Add To Google Calendar!
      </Nav.Link>

      <div style={{ height: '800px', width: '90%' }}> {}
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor={(event) => new Date(event.startTime)}
          endAccessor={(event) => new Date(event.endTime)}
          titleAccessor="event"
        />
      </div>
    </div>
  );
};

export default SchedulePage;



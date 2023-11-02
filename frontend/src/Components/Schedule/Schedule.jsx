import React, { useState, useEffect, useMemo } from 'react';
import '../../fonts.css';
import './Styles.css';
{/*
Summary
The code snippet is a React component that renders a schedule table. It uses the useState and useEffect hooks to update the current event based on the current time. The schedule and constantEvents arrays store the event data, and the ScheduleRow component is used to render each row in the table.

Code Analysis
Inputs
schedule: An array of objects representing the events in the schedule.
constantEvents: An array of objects representing the constant events in the schedule.

Flow
The component initializes the currentEvent state variable to null.
The useEffect hook is used to update the currentEvent based on the current time.
The updateCurrentEvent function is called initially and then every minute using setInterval.
The updateCurrentEvent function checks the current time against the start and end times of each event in the schedule array.
The currentEvent state variable is updated with the first event that matches the current time.
The schedule and constantEvents arrays are mapped to render the rows in the table using the ScheduleRow component.
The currentEvent is passed to the ScheduleRow component to highlight the current event.
Outputs
A table displaying the events in the schedule, with the current event highlighted.*/}

const tolerance = 30 * 1000; // 30 sec in milliseconds
//confused about isCurrentEvent additionally format date should be defined outside ScheduleRow component
const ScheduleRow = React.memo(({ item, isCurrentEvent }) => {
  const formatDate = date => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const startTimeString = formatDate(item.startTime);
  const endTimeString = formatDate(item.endTime);
  const eventName = item.event;

  const currentTime = Date.now();
  const startTime = item.startTime.getTime();
  const endTime = item.endTime.getTime();
  const isPastEvent = currentTime > endTime; 
  const hour = 3600000;
  const isCurrentEventv2 = startTime <= currentTime && currentTime <= endTime;
  const isUpcomingEvent = startTime <= currentTime + hour && !isPastEvent;

  return (
    <tr
      style={{
        height: '70px',
        fontFamily: 'Poppins',
        backgroundColor: isCurrentEventv2 ? '#910307' : isUpcomingEvent ? '#2f0003' : isPastEvent ? 'rgba(53, 53, 53, 0.4)' : '#353535',
        padding: '0.1rem',
        textDecoration: isPastEvent ? 'line-through' : 'none',
        color: isPastEvent ? 'black' : 'white',   //only applies to text decoration... (idk why lol)
        border: isCurrentEventv2 ? '5px solid white' : ' ',
        borderBottom: isCurrentEventv2 ? '5px solid white' : isPastEvent ? '5px solid rgba(0, 0, 0, 0.4)' : '5px solid black',
        opacity: isPastEvent ? 0.4 : 1,
        boxShadow: isCurrentEventv2 ? '0 0 12px white' : 'none',
      }}
    >
      <td
        className="schedule-item"
        style={{
          fontFamily: 'Poppins',
          color: isPastEvent ? 'black' : 'white',
          borderTop: isCurrentEventv2 ? '5px solid white' : 'none',   //only way to "override" bottom border of row above
        }}
      >
        {eventName}
      </td>
      <td
        className="schedule-item"
        style={{
          fontFamily: 'Poppins',
          color: isPastEvent ? 'black' : 'white',
          borderTop: isCurrentEventv2 ? '5px solid white' : 'none',
        }}
      >
        {item.location}
      </td>
      <td
        className="schedule-item"
        style={{
          fontFamily: 'Poppins',
          color: isPastEvent ? 'black' : 'white',
          borderTop: isCurrentEventv2 ? '5px solid white' : 'none',
        }}
      >
        {startTimeString} - {endTimeString}
      </td>
    </tr>
  );
});

const Schedule = () => {
  const schedule = useMemo(
    () => [
      {
        startTime: new Date('2023-11-04T10:00:00-04:00'),
        endTime: new Date('2023-11-04T11:00:00-04:00'),
        event: 'Participant Check-In',
        location: 'DCC Lobby',
      },
      {
        startTime: new Date('2023-11-04T11:00:00-04:00'),
        endTime: new Date('2023-11-04T12:00:00-04:00'),
        event: 'Opening Ceremony',
        location: 'DCC 308',
      },
      {
        startTime: new Date('2023-11-04T11:30:00-04:00'),
        endTime: new Date('2023-11-04T12:00:00-04:00'),
        event: 'API demos',
        location: 'DCC 308',
      },
      {
        startTime: new Date('2023-11-04T12:00:00-04:00'),
        endTime: new Date('2023-11-05T12:00:00-04:00'),
        event: 'Hacking Begins',
        location: 'DCC 308',
      },
      {
        startTime: new Date('2023-11-04T12:00:00-04:00'),
        endTime: new Date('2023-11-04T12:30:00-04:00'),
        event: 'Team Pairing',
        location: 'DCC 308/Discord',
      },
      {
        startTime: new Date('2023-11-04T12:00:00-04:00'),
        endTime: new Date('2023-11-04T12:30:00-04:00'),
        event: 'Patient Safety 101',
        location: 'DCC 318',
      },
      {
        startTime: new Date('2023-11-04T12:30:00-04:00'),
        endTime: new Date('2023-11-04T13:30:00-04:00'),
        event: 'Intro to Tech Stack Workshop',
        location: 'DCC 308',
      },
      {
        startTime: new Date('2023-11-04T13:00:00-04:00'),
        endTime: new Date('2023-11-04T14:00:00-04:00'),
        event: 'Lunch',
        location: 'DCC Lounge',
      },
      {
        startTime: new Date('2023-11-04T13:30:00-04:00'),
        endTime: new Date('2023-11-04T14:30:00-04:00'),
        event: 'MERN Web Dev Workshop',
        location: 'DCC 308',
      },
      {
        startTime: new Date('2023-11-04T13:30:00-04:00'),
        endTime: new Date('2023-11-04T14:30:00-04:00'),
        event: 'Mobile Dev Workshop',
        location: 'DCC 318',
      },
      {
        startTime: new Date('2023-11-04T14:30:00-04:00'),
        endTime: new Date('2023-11-04T15:30:00-04:00'),
        event: 'Quantum',
        location: 'DCC 308',
      },
      {
        startTime: new Date('2023-11-04T14:30:00-04:00'),
        endTime: new Date('2023-11-04T15:30:00-04:00'),
        event: 'Nuvalence',
        location: 'DCC 330',
      },
      {
        startTime: new Date('2023-11-04T15:30:00-04:00'),
        endTime: new Date('2023-11-04T16:30:00-04:00'),
        event: 'Scrum Workshop',
        location: 'DCC 327',
      },
      {
        startTime: new Date('2023-11-04T16:30:00-04:00'),
        endTime: new Date('2023-11-04T17:30:00-04:00'),
        event: 'Hacking The Machine For Fun',
        location: 'DCC 318',
      },
      {
        startTime: new Date('2023-11-04T16:30:00-04:00'),
        endTime: new Date('2023-11-04T17:30:00-04:00'),
        event: 'Design, Thinking, and Technical Innovation',
        location: 'DCC 308',
      },
      {
        startTime: new Date('2023-11-04T16:30:00-04:00'),
        endTime: new Date('2023-11-04T17:30:00-04:00'),
        event: 'Call For Code',
        location: 'DCC 308',
      },
      {
        startTime: new Date('2023-11-04T17:30:00-04:00'),
        endTime: new Date('2023-11-04T18:30:00-04:00'),
        event: 'Global Foundries',
        location: 'DCC 327',
      },
      {
        startTime: new Date('2023-11-04T17:30:00-04:00'),
        endTime: new Date('2023-11-04T18:30:00-04:00'),
        event: 'Password Exploitation - FBI Albany ',
        location: 'DCC 318',
      },
      {
        startTime: new Date('2023-11-04T18:30:00-04:00'),
        endTime: new Date('2023-11-04T19:30:00-04:00'),
        event: 'Hugging Face',
        location: 'DCC 327',
      },
      {
        startTime: new Date('2023-11-04T18:30:00-04:00'),
        endTime: new Date('2023-11-04T23:00-04:00'),
        event: 'Smash Club',
        location: 'DCC 318',
      },
      {
        startTime: new Date('2023-11-04T19:00:00-04:00'),
        endTime: new Date('2023-11-04T20:00:00-04:00'),
        event: 'Dinner',
        location: 'DCC Lounge',
      },
      {
        startTime: new Date('2023-11-04T21:00:00-04:00'),
        endTime: new Date('2023-11-04T22:00:00-04:00'),
        event: '!Light MLH Event',
        location: 'DCC 308',
      },
      {
        startTime: new Date('2023-11-04T22:00:00-04:00'),
        endTime: new Date('2023-11-04T23:00:00-04:00'),
        event: 'Fun Activity (Trivia/Game)',
        location: 'DCC 318',
      },
      /*
      {
        startTime: new Date('2023-11-04T23:00:00-04:00'),
        endTime: new Date('2023-11-04T23:30:00-04:00'),
        event: 'Boba',
        location: 'DCC Lounge',
      },
      */
      {
        startTime: new Date('2023-11-05T00:00:00-04:00'),
        endTime: new Date('2023-11-05T02:00:00-04:00'),
        event: 'Midnight Snacks',
        location: 'DCC Lounge',
      },
      {
        startTime: new Date('2023-11-05T00:30:00-04:00'),
        endTime: new Date('2023-11-05T01:30:00-04:00'),
        event: 'Movie Starts',
        location: 'DCC 324',
      },
      {
        startTime: new Date('2023-11-05T01:00:00-04:00'),
        endTime: new Date('2023-11-05T02:00:00-05:00'),
        event: 'Daylight Savings Party',
        location: 'DCC Lounge',
      },
      //Account for daylight savings using GMT -5:00
      {
        startTime: new Date('2023-11-05T07:00:00-05:00'),
        endTime: new Date('2023-11-05T09:00:00-05:00'),
        event: 'Breakfast',
        location: 'DCC Lounge',
      },
      {
        startTime: new Date('2023-11-05T07:00:00-05:00'),
        endTime: new Date('2023-11-05T09:00:00-05:00'),
        event: 'Submission Deadline',
        location: 'Online',
      },
      {
        startTime: new Date('2023-11-05T11:30:00-05:00'),
        endTime: new Date('2023-11-05T12:00:00-05:00'),
        event: 'Hacking Ends @ 12',
        location: '',
      },
      {
        startTime: new Date('2023-11-05T12:00:00-05:00'),
        endTime: new Date('2023-11-05T15:00:00-05:00'),
        event: 'Showcase',
        location: 'DCC 308',
      },
      {
        startTime: new Date('2023-11-05T13:00:00-05:00'),
        endTime: new Date('2023-11-05T14:00:00-05:00'),
        event: 'Lunch',
        location: 'DCC Lounge',
      },
      {
        startTime: new Date('2023-11-05T15:00:00-05:00'),
        endTime: new Date('2023-11-05T15:30:00-05:00'),
        event: 'Closing Ceremony',
        location: 'DCC Lounge',
  },
    ],
    []
  );

  const constantEvents = useMemo(
    () => [
      {
        startTime: new Date('2023-11-04T12:00:00-04:00'),
        endTime: new Date('2023-11-04T12:00:00-04:00'),
        event: 'Mentoring Desk',
        location: 'Great Hall',
      },
      {
        startTime: new Date('2023-11-04T22:00:00-04:00'),
        endTime: new Date('2023-11-05T09:00:00-05:00'),
        event: 'Sleeping Rooms',
        location: 'LOW 3112, 3130, 3116',
      },
      {
        startTime: new Date('2023-11-05T08:00-05:00'),
        endTime: new Date('2023-11-05T12:00:00-05:00'),
        event: 'Last Chance Mentoring',
        location: '',
      },
    ],
    []
  );

  const [currentEvent, setCurrentEvent] = useState(null);

  useEffect(() => {
    const updateCurrentEvent = () => {
      const currentTime = Date.now();
      const updatedSchedule = schedule.map(event => {
        const startTime = event.startTime.getTime() - tolerance;
        const endTime = event.endTime.getTime() + tolerance;
        const isCurrentEvent = currentTime >= startTime && currentTime <= endTime;
        return { ...event, isCurrentEvent };
      });
      const currentEvents = updatedSchedule.filter(event => event.isCurrentEvent);
      setCurrentEvent(currentEvents[0]);
    };

    updateCurrentEvent();

    const intervalId = setInterval(updateCurrentEvent, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, [schedule, tolerance]);

  let currentDate = null;
  let isFirstEvent = true;

  return (
    <div>
      <table className="schedule-table">
        <thead>
          <tr>
            <th style={{ fontFamily: 'Poppins', color: 'white', textAlign: 'center', verticalAlign: 'middle', flex: 2 }}>
              Event
            </th>
            <th style={{ fontFamily: 'Poppins', color: 'white', padding: '0 2rem', textAlign: 'center', verticalAlign: 'middle', flex: 2 }}>
              Location
            </th>
            <th style={{ fontFamily: 'Poppins', color: 'white', textAlign: 'center', verticalAlign: 'middle', flex: 2 }}>
              Time
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Render Events */}
          {schedule.map((item, index) => {
            if (isFirstEvent || item.startTime.getDate() !== currentDate) {
              currentDate = item.startTime.getDate();
              isFirstEvent = false;
              return (
                <React.Fragment key={`date-heading-${currentDate}`}>
                  <tr>
                    <td className="table-header" colSpan="3">
                      {currentDate === 4 ? 'November 4th' : 'November 5th'}
                    </td>
                  </tr>
                  <ScheduleRow item={item} isCurrentEvent={currentEvent && currentEvent.isCurrentEvent} />
                </React.Fragment>
              );
            }
            const isCurrentEvent =
              currentEvent &&
              currentEvent.startTime >= item.startTime &&
              currentEvent.endTime <= item.endTime;
            return (
              <React.Fragment key={index}>
                <ScheduleRow item={item} isCurrentEvent={isCurrentEvent} />
              </React.Fragment>
            );
          })}
          <tr>
            <td className="table-header" colSpan="3">
              Constant Events
            </td>
          </tr>
          {/* Render Constant Events */}
          {constantEvents.map((item, index) => {
            const currentTime = Date.now();
            const startTime = item.startTime.getTime();
            const endTime = item.endTime.getTime();
            const isCurrentEvent = currentTime >= startTime && currentTime <= endTime + tolerance;

            return (
              <React.Fragment key={index}>
                <ScheduleRow item={item} isCurrentEvent={isCurrentEvent} />
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;

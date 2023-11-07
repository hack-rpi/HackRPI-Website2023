import React, { useState, useEffect, useMemo } from 'react';
import '../../fonts.css';
import './Styles.css';
import scheduleData from './scheduleData.json'; // Import the JSON data
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
  const formatDate = date => {
    const dateObj = new Date(date);
    return dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  const startTimeString = formatDate(item.startTime);
  const endTimeString = formatDate(item.endTime);
  const eventName = item.event;

  const currentTime = Date.now();
  const startTime = new Date(item.startTime).getTime(); // Convert startTime to a valid Date object
  const endTime = new Date(item.endTime).getTime(); // Convert endTime to a valid Date object
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
  const { schedule, constantEvents } = useMemo(() => scheduleData, []); // Extract schedule and constantEvents using useMemo

  // Rest of your component code

  

  const [currentEvent, setCurrentEvent] = useState(null);

  useEffect(() => {
    const updateCurrentEvent = () => {
      const currentTime = Date.now();
      const updatedSchedule = schedule.map(event => {
   
        const startTime = new Date(event.startTime).getTime() - tolerance;
        const endTime = new Date(event.endTime).getTime() + tolerance;
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
          if (isFirstEvent || new Date(item.startTime).getDate() !== currentDate) {
            currentDate = new Date(item.startTime).getDate();
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
            
            const startTime = new Date(item.startTime).getTime()
            const endTime = new Date(item.endTime).getTime();
           
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

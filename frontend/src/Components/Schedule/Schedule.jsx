import React, { useState, useEffect, useMemo } from 'react';
import '../../fonts.css';
import './Styles.css';
import ConstantEvents from './ConstantEvents';

const tolerance = 30 * 1000; // 30 sec in milliseconds

const ScheduleRow = React.memo(({ item, isCurrentEvent }) => {       //React.memo optimizes the rendering of the ScheduleRow component based on its props or the site will overload
  const formatDate = (date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const startTimeString = useMemo(() => formatDate(item.startTime), []);
  const endTimeString = useMemo(() => formatDate(item.endTime), []);  // empty [] because we don't want to re-render the component if the startTime and endTime are the same/static. Also prevents update of start and end time


  return (
    
 <tr style={{ fontFamily: 'Poppins', backgroundColor: isCurrentEvent ? '#910307' : '#353535', padding: '0.1rem', borderBottom: '5px solid black', specificity: 'important' }}>
    <td className="schedule-item" style={{ fontFamily: 'Poppins', color: 'white' }}>{item.event}</td>
    <td className="schedule-item" style={{ fontFamily: 'Poppins', color: 'white' }}>{item.location}</td>  
    <td className="schedule-item" style={{ fontFamily: 'Poppins', color: 'white'}}>{startTimeString} - {endTimeString}</td> 
 </tr>
  );
});
const Schedule = () => {
  const schedule = useMemo(() => [   //useMemo is NEEDED to optimize the initialization of the schedule array and prevents unnecessary rerender and overload.
                
    {
      startTime: new Date('2023-10-04T10:00:00-04:00'),
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
      location: 'DCC 308/HackRPI X Discord',
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
      event: 'Severino',
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
      event: 'RPI SEC',
      location: 'DCC 318',
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
      event: 'FBI',
      location: 'DCC 318',
    },
    {
      startTime: new Date('2023-11-04T17:30:00-04:00'),
      endTime: new Date('2023-11-04T18:30:00-04:00'),
      event: 'Global Foundries',
      location: 'DCC 327',
    },
    {
      startTime: new Date('2023-11-04T18:30:00-04:00'),
      endTime: new Date('2023-11-04T19:30:00-04:00'),
      event: 'Hugging Face',
      location: 'DCC 327',
    },
    {
      startTime: new Date('2023-11-04T18:30:00-04:00'),
      endTime: new Date('2023-11-04T02:23:00-04:00'),
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
      startTime: new Date('2023-11-04T20:00:00-04:00'),
      endTime: new Date('2023-11-04T21:00:00-04:00'),
      event: '?Sponsor Workshop/Event?',
      location: 'DCC 330',
    },
    {
      startTime: new Date('2023-11-04T21:00:00-04:00'),
      endTime: new Date('2023-11-04T22:00:00-04:00'),
      event: '!Light MLH Event',
      location: 'DCC 308',
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
    {
      startTime: new Date('2023-11-04T23:00:00-04:00'),
      endTime: new Date('2023-11-04T23:30:00-04:00'),
      event: 'Boba',
      location: 'DCC Lounge',
    },
    {
      startTime: new Date('2023-11-05T00:00:00-04:00'),
      endTime: new Date('2023-11-05T02:00:00-04:00'),
      event: 'Midnight Snacks',
      location: 'DCC Lounge',
    },
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
      endTime: new Date('2023-11-05T02:00:00-04:00'),
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


     //* add more events here... MAKE SURE  IT IS -05:00 for daylight savings time on november 5th 2am*/}
    //* separate nov 4 and nov 5. */}  
    // Critical issue: THE SCALING BREAKS ON very small MOBILE
    

  ], []);
  const constantEvents = useMemo(() => [
    // Define your constant events here after November 5th
    // Example:
    {
      startTime: new Date('2023-10-05T15:30:00-05:00'),
      endTime: new Date('2023-11-05T16:30:00-05:00'),
      event: 'Constant Event 1',
      location: 'DCC 310',
    },
    {
      startTime: new Date('2023-11-05T17:00:00-05:00'),
      endTime: new Date('2023-11-05T18:00:00-05:00'),
      event: 'Constant Event 2',
      location: 'DCC 312',
    },
    // },
  ], []);

  const [currentEvent, setCurrentEvent] = useState(null);

  useEffect(() => {
    const updateCurrentEvent = () => {
      const currentTime = new Date().getTime();
      const runningEvent = schedule.find((event) => {
        const startTime = event.startTime.getTime();
        const endTime = event.endTime.getTime();
        return currentTime >= startTime && currentTime <= endTime + tolerance;
      });

      setCurrentEvent(runningEvent || null);
    };

    updateCurrentEvent();

    const intervalId = setInterval(updateCurrentEvent, 60000);  //updates every minute, setting it shorter is not ideal

    return () => {
      clearInterval(intervalId);
    };
  }, [schedule, tolerance]);
    
  let currentDate = null; // To keep track of the current date
  // Critical Issue The block highlighting broke for nov 4 and nov 5 
  return (
    <div>
     
      <table className="schedule-table">
        <thead>
          <tr>
            <th style={{ fontFamily: 'Poppins', color: 'white', paddingRight: '2rem', fontSize: '32px', textAlign: 'center', verticalAlign: 'middle' }}>Event</th>
            <th style={{ fontFamily: 'Poppins', color: 'white', paddingRight: '2rem', fontSize: '32px', textAlign: 'center', verticalAlign: 'middle' }}>Location</th>
            <th style={{ fontFamily: 'Poppins', color: 'white', fontSize: '32px', textAlign: 'center', verticalAlign: 'middle' }}>Time</th>
          </tr>
        </thead>
        <tbody>
          {/* Render Events */}
          {schedule.map((item, index) => {
            // Check if the current event's date is different from the previous event's date
            if (item.startTime.getDate() !== currentDate) {
              // Render a row with the date as the heading
              currentDate = item.startTime.getDate();
              return (
                <tr key={`date-heading-${currentDate}`}>
                  <td colSpan="3" style={{ fontFamily: 'Poppins', color: 'white', borderBottom: '1.5px solid #bd0909', textAlign: 'center', fontSize: '32px' }}>
                    {currentDate === 4 ? 'November 4th' : 'November 5th'}
                  </td>
                </tr>
              );
            }
            // Render individual event row
            return (
              <ScheduleRow
                key={index}
                item={item}
                isCurrentEvent={
                  currentEvent &&
                  item.startTime.getTime() === currentEvent.startTime.getTime() &&
                  item.event === currentEvent.event &&
                  item.location === currentEvent.location
                }
              />
            );
          })}
          {/* Constant Events */}
                  {/* Blank row for spacing after November 5th events */}
        <tr>
          <td colSpan="3" style={{ height: '50px' }}></td>
        </tr>
          <tr>
            <td colSpan="3" style={{ fontFamily: 'Poppins', color: 'white', borderBottom: '1.5px solid #bd0909', textAlign: 'center', fontSize: '32px' }}>
              Constant Events
            </td>
          </tr>
          {/* Render Constant Events */}
          {constantEvents.map((item, index) => {
            const currentTime = new Date().getTime();
            const startTime = item.startTime.getTime();
            const endTime = item.endTime.getTime();
            const isCurrentEvent = currentTime >= startTime && currentTime <= endTime + tolerance;

            return (
              <React.Fragment key={index}>
                {/* Render individual constant event row */}
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

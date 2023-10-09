import React, { useState, useEffect, useMemo } from 'react';
import '../../fonts.css';

const tolerance = 10 * 1000; // 10 sec in milliseconds

const ScheduleRow = React.memo(({ item, isCurrentEvent }) => {            //React.memo optimizes the rendering of the ScheduleRow component based on its props.
  const formatDate = (date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const startTimeString = useMemo(() => formatDate(item.startTime), []);
  const endTimeString = useMemo(() => formatDate(item.endTime), []);  // empty [] because we don't want to re-render the component if the startTime and endTime are the same/static. Also prevents update of start and end time


  return (
    
 <tr style={{ fontFamily: 'Poppins', backgroundColor: isCurrentEvent ? '#910307' : '#353535', padding: '1rem', borderBottom: '10px solid black' }}>
    <td style={{ fontFamily: 'Poppins', color: 'white', paddingRight: '5rem', fontSize: '32px'}}>{item.event}</td>
    <td style={{ fontFamily: 'Poppins', color: 'white', paddingRight: '2rem', fontSize: '32px' }}>{item.location}</td>  
    <td style={{ fontFamily: 'Poppins', color: 'white', paddingRight: '1rem', fontSize: '32px' }}>{startTimeString} - {endTimeString}</td> 
 </tr>
  );
}); 
//<div className="Textsize"> 
const Schedule = () => {
  const schedule = useMemo(() => [   //useMemo is used to optimize the initialization of the schedule array and prevents unnecessary rerender    
                
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
      endTime: new Date('2023-11-04T1:30:00-04:00'),
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

     //* add more events here... MAKE SURE  IT IS -05:00 for daylight savings time on november 5th */}
    //* separate nov 4 and nov 5. */}  Mobile Dev Workshop

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

    const intervalId = setInterval(updateCurrentEvent, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, [schedule]);

  return (
    <div>
{/*      <h2>Current Event:</h2>
      {currentEvent ? (
        <div>
          <h3 style={{ color: 'red' }}>{currentEvent.event}</h3>
          <p>Location: {currentEvent.location}</p>
        </div>
      ) : (
        <p>No ongoing events.</p>          // If Current event is true/happening, display the current event.else  display no ongoing events
      )}

      <h2></h2>    */}                            
      <table className="schedule-table">
  <thead>
    <tr>
      <th style ={{fontFamily: 'Poppins', color: 'white', paddingRight: '2rem', fontSize: '32px'}}>Event</th>
      <th style ={{fontFamily: 'Poppins', color: 'white', paddingRight: '2rem', fontSize: '32px'}}>Location</th>
      <th style ={{fontFamily: 'Poppins', color: 'white', fontSize: '32px'}}>Time</th>
    </tr>
    {/*<tr>
      <td colSpan="3" style={{ borderBottom: '2px solid #bd0909' }}></td>    {/*injects a horizontal line ,if need to remove, , td in between <tr></tr> and the tr itself
    </tr> */}
  </thead>
  <tbody>
          {schedule.map((item, index) => {
            const isCurrentEvent = currentEvent &&
              item.startTime.getTime() === currentEvent.startTime.getTime() &&
              item.event === currentEvent.event &&
              item.location === currentEvent.location;  //multiple conditions are used to check if the current event is the same as the current item and all components are updated togehter.

            return (
              <ScheduleRow key={index} item={item} isCurrentEvent={isCurrentEvent} /> // iterate through the schedule array
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;

import React, { useState, useEffect, useMemo } from 'react';
import './Schedule.css'; // FIX schedule import

const tolerance = 15 * 1000; // 15 sec in milliseconds

const ScheduleRow = React.memo(({ item, isCurrentEvent }) => {            //React.memo optimizes the rendering of the ScheduleRow component based on its props.
  const formatDate = (date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const startTimeString = useMemo(() => formatDate(item.startTime), []);
  const endTimeString = useMemo(() => formatDate(item.endTime), []);  // empty [] because we don't want to re-render the component if the startTime and endTime are the same/static. Also prevents update of start and end time


  return (
    <tr style={{ backgroundColor: isCurrentEvent ? '#910307' : '#353535', padding: '0.5rem', borderBottom: '10px solid black' }}> 
      <td style={{ color: isCurrentEvent ? 'white' : 'white', paddingRight: '1rem' }}>
        {startTimeString} - {endTimeString}
      </td>
      <td style={{ color: isCurrentEvent ? 'white' : 'white', paddingRight: '1rem' }}>
        {item.event}
      </td>
      <td style={{ color: isCurrentEvent ? 'white' : 'white' }}>{item.location}</td> 
    </tr>                         //To avoid breaking the cold I will just make the conditional statement both equal white instead of trying to remove it. 
  );
}); //Fix the style section formating of the code if have time is very unconcisse and hard to read.
//<div className="Textsize"> 
const Schedule = () => {
  const schedule = useMemo(() => [   //useMemo is used to optimize the initialization of the schedule array and prevents unnecessary rerender                
    {
      startTime: new Date('2023-09-30T08:00:00-04:00'),
      endTime: new Date('2023-09-30T20:30:00-04:00'),
      event: 'Event 1',
      location: 'Room A',
    },
    {
      startTime: new Date('2023-09-30T15:00:00-04:00'),
      endTime: new Date('2023-10-30T15:17:00-04:00'),
      event: 'Event 2',
      location: 'Room B',
    },
    {
      startTime: new Date('2023-10-01T15:00:00-04:00'),
      endTime: new Date('2023-10-02T12:16:00-04:00'),
      event: 'Event 3',
      location: 'Room B',
    },
   // </div> //FIX THE CLASS NAME AND DIV 
    // add more events here... MAKE SURE  IT IS -05:00 for daylight savings time on november 5th 
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
      <h2>Current Event:</h2>
      {currentEvent ? (
        <div>
          <h3 style={{ color: 'red' }}>{currentEvent.event}</h3>
          <p>Location: {currentEvent.location}</p>
        </div>
      ) : (
        <p>No ongoing events.</p>          // If Current event is null, display no ongoing events, else display the current event.
      )}

      <h2></h2>                                
      <table className="schedule-table">
  <thead>
    <tr>
      <th>Time</th>
      <th>Event</th>
      <th>Location</th>
    </tr>
    <tr>
      <td colSpan="3" style={{ borderBottom: '2px solid #bd0909' }}></td>    {/*injects a horizontal line , remove td in between <tr></tr> and the tr itself*/}
    </tr> 
  </thead>
  <tbody>
          {schedule.map((item, index) => {
            const isCurrentEvent = currentEvent &&
              item.startTime.getTime() === currentEvent.startTime.getTime() &&
              item.event === currentEvent.event &&
              item.location === currentEvent.location;  //multiple conditions are used to check if the current event is the same as the current item 

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

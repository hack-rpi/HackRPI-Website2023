import React, { useState, useEffect, useMemo } from 'react';
import '../../fonts.css';




const tolerance = 10 * 1000; // 10 sec in milliseconds

const ScheduleRow = React.memo(({ item, isCurrentEvent }) => {            //React.memo optimizes the rendering of the ScheduleRow component based on its props.
  const formatDate = (date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const startTimeString = useMemo(() => formatDate(item.startTime), []);
  const endTimeString = useMemo(() => formatDate(item.endTime), []);  // empty [] because we don't want to re-render the component if the startTime and endTime are the same/static. Also prevents update of start and end time


  return (
    
 <tr style={{ fontFamily: 'Poppins', backgroundColor: isCurrentEvent ? '#910307' : '#353535', padding: '0.5rem', borderBottom: '10px solid black' }}>
    <td style={{ fontFamily: 'Poppins', color: 'white', paddingRight: '1rem', fontSize: '32px'}}>{item.event}</td>
    <td style={{ fontFamily: 'Poppins', color: 'white', paddingRight: '1rem', fontSize: '32px' }}>{item.location}</td>  
    <td style={{ fontFamily: 'Poppins', color: 'white', paddingRight: '1rem', fontSize: '32px' }}>{startTimeString} - {endTimeString}</td> 
 </tr>
  );
}); 
//<div className="Textsize"> 
const Schedule = () => {
  const schedule = useMemo(() => [   //useMemo is used to optimize the initialization of the schedule array and prevents unnecessary rerender    
                
    {
      startTime: new Date('2023-10-06T10:20:00-04:00'),
      endTime: new Date('2023-10-06T10:21:00-04:00'),
      event: 'Event 1',
      location: 'Room A',
    },
    {
      startTime: new Date('2023-10-06T10:21:00-04:00'),
      endTime: new Date('2023-10-06T10:22:00-04:00'),
      event: 'Event 2',
      location: 'Room B',
    },
    {
      startTime: new Date('2023-10-09T15:10:17-04:00'),
      endTime: new Date('2023-10-02T12:16:00-04:00'),
      event: 'Event 3',
      location: 'Room B',
    },

     //* add more events here... MAKE SURE  IT IS -05:00 for daylight savings time on november 5th */}
    //* separate nov and nov 5. */}

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
        <p>No ongoing events.</p>          // If Current event is true/happening, display the current event.else  display no ongoing events
      )}

      <h2></h2>                                
      <table className="schedule-table">
  <thead>
    <tr>
      <th>Event</th>
      <th>Location</th>
      <th>Time</th>
    </tr>
    <tr>
      <td colSpan="3" style={{ borderBottom: '2px solid #bd0909' }}></td>    {/*injects a horizontal line ,if need to remove, , td in between <tr></tr> and the tr itself*/}
    </tr> 
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

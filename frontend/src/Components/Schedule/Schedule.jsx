import React, { useState, useEffect } from 'react';
const tolerance = 60 * 1000; // 1 minute in milliseconds

const Schedule = () => {
  const schedule = [
    {
      startTime: new Date('2023-09-30T08:00:00-04:00'),
      endTime: new Date('2023-09-30T20:30:00-04:00'),
      event: 'Event 1',
      location: 'Room A',
    },
    {
      startTime: new Date('2023-09-30T15:00:00-04:00'), // 3:00 PM
      endTime: new Date('2023-09-30T15:17:00-04:00'), // 3:04 PM
      event: 'Event 2',
      location: 'Room B',
    },
    // ... add more schedule items as needed
  ];

  const [currentEvent, setCurrentEvent] = useState(null);

  useEffect(() => {
    const updateCurrentEvent = () => {
      const currentTime = new Date().getTime();
      const runningEvent = schedule.find((event) => {
        const startTime = event.startTime.getTime();
        const endTime = event.endTime.getTime();
        return currentTime >= startTime && currentTime <= endTime + tolerance; // include the end time with tolerance
      });

      setCurrentEvent(runningEvent || null);
    };

    updateCurrentEvent(); // Call once on mount

    const intervalId = setInterval(updateCurrentEvent, 60000); // Update every minute

    return () => {
      clearInterval(intervalId); // Cleanup function
    };
  }, []); // Empty dependency array for mounting effect

  return (
    <div>
      <h2>Current Event:</h2>
      {currentEvent ? (
        <div>
          <h3 style={{ color: 'green' }}>{currentEvent.event}</h3>
          <p>Location: {currentEvent.location}</p>
        </div>
      ) : (
        <p>No ongoing events.</p>
      )}

      <h2>Schedule:</h2>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => {
            const startTimeString = item.startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const endTimeString = item.endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            return (
              <tr key={index}>
                <td style={{ color: currentEvent && item.startTime.getTime() === currentEvent.startTime.getTime() ? 'green' : 'white', paddingRight: '10px' }}>{startTimeString} - {endTimeString}</td>
                <td style={{ color: currentEvent && item.event === currentEvent.event ? 'green' : 'white', paddingRight: '10px' }}>{item.event}</td>
                <td style={{ color: currentEvent && item.location === currentEvent.location ? 'green' : 'white' }}>{item.location}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
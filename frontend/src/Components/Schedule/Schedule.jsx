import React, { useState, useEffect, useMemo } from 'react';

const tolerance = 60 * 1000; // 1 minute in milliseconds

const ScheduleRow = React.memo(({ item, isCurrentEvent }) => {
  const startTimeString = useMemo(() => item.startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), [item.startTime]);
  const endTimeString = useMemo(() => item.endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), [item.endTime]);

  return (
    <tr>
      <td style={{ color: isCurrentEvent ? 'green' : 'white', paddingRight: '10px' }}>{startTimeString} - {endTimeString}</td>
      <td style={{ color: isCurrentEvent ? 'green' : 'white', paddingRight: '10px' }}>{item.event}</td>
      <td style={{ color: isCurrentEvent ? 'green' : 'white' }}>{item.location}</td>
    </tr>
  );
});

const Schedule = () => {
  const schedule = useMemo(() => [
    {
      startTime: new Date('2023-09-30T08:00:00-04:00'),
      endTime: new Date('2023-09-30T20:30:00-04:00'),
      event: 'Event 1',
      location: 'Room A',
    },
    {
      startTime: new Date('2023-09-30T15:00:00-04:00'),
      endTime: new Date('2023-09-30T15:17:00-04:00'),
      event: 'Event 2',
      location: 'Room B',
    },
    {
      startTime: new Date('2023-10-01T15:00:00-04:00'),
      endTime: new Date('2023-10-02T15:17:00-04:00'),
      event: 'Event 3',
      location: 'Room B',
    },
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
          <h3 style={{ color: 'green' }}>{currentEvent.event}</h3>
          <p>Location: {currentEvent.location}</p>
        </div>
      ) : (
        <p>No ongoing events.</p>
      )}

      <h2></h2>
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
            const isCurrentEvent = currentEvent &&
              item.startTime.getTime() === currentEvent.startTime.getTime() &&
              item.event === currentEvent.event &&
              item.location === currentEvent.location;

            return (
              <ScheduleRow key={index} item={item} isCurrentEvent={isCurrentEvent} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;

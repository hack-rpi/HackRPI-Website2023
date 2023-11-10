import React, { useState, useEffect, useMemo } from 'react';
import scheduleData from './scheduleData.json'; // make sure to have this JSON with your data
import './Styles.css'; // your CSS file path here

// Define the ScheduleRow outside the Schedule component to prevent re-creation on each render
const formatDate = (date) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const ScheduleRow = React.memo(({ item, isCurrentEvent }) => {
  // existing ScheduleRow component implementation...
});

const Schedule = () => {
  // existing Schedule component implementation...

  // Instead of map(), we can directly use schedule data to render schedule rows
  return (
    <div>
      {/* existing JSX for Schedule component... */}
      <table className="schedule-table">
        {/* table head */}
        <tbody>
          {/* Assuming scheduleData is an object with a schedule array */}
          {scheduleData.schedule.map((item, index) => {
            // Compute isCurrentEvent here...
            return (
              <ScheduleRow 
                key={index} 
                item={item} 
                isCurrentEvent={/* logic to determine if it's the current event */} 
              />
            );
          })}
          {/* Render Constant Events... */}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
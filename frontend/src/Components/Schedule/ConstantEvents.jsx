import React from 'react';

const ConstantEvents = ({ constantEvents }) => {
  return (
    <div>
      <h2 style={{ fontFamily: 'Poppins', color: 'white', textAlign: 'center', fontSize: '32px', marginTop: '20px' }}>Constant Events</h2>
      <table className="schedule-table">
        <thead>
          <tr>
            <th style={{ fontFamily: 'Poppins', color: 'white', paddingRight: '2rem', fontSize: '32px', textAlign: 'center', verticalAlign: 'middle' }}>Event</th>
            <th style={{ fontFamily: 'Poppins', color: 'white', paddingRight: '2rem', fontSize: '32px', textAlign: 'center', verticalAlign: 'middle' }}>Location</th>
            <th style={{ fontFamily: 'Poppins', color: 'white', fontSize: '32px', textAlign: 'center', verticalAlign: 'middle' }}>Time</th>
          </tr>
          <tr>
            <td colSpan="3" style={{ fontFamily: 'Poppins', color: 'white', borderBottom: '1.5px solid #bd0909', textAlign: 'center', fontSize: '32px' }}>
              {/* Content for the colSpan row */}
            </td>
          </tr>
        </thead>
        <tbody>
          {constantEvents.map((item, index) => (
            <tr key={index}>
              <td className="schedule-item" style={{ fontFamily: 'Poppins', color: 'white' }}>{item.event}</td>
              <td className="schedule-item" style={{ fontFamily: 'Poppins', color: 'white' }}>{item.location}</td>
              <td className="schedule-item" style={{ fontFamily: 'Poppins', color: 'white' }}>{item.startTime.toLocaleTimeString()} - {item.endTime.toLocaleTimeString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConstantEvents;

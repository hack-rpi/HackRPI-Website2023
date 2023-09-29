import React from 'react';

const Schedule = () => {
    const schedule = [
        {
            time: '12:00 PM',
            event: '1stEvent',
            location: 'Lobby'
        },
        {
            time: '1:00 PM',
            event: 'Opening Ceremony',
            location: 'Main Hall'
        },
        // ... rest of the schedule items
    ];

    const tableCellStyle = {
        width: '100%',
        borderCollapse: 'collapse'
    };

    const cellStyle = {
        padding: '10px',
        textAlign: 'left',
        wordSpacing: '5px' // Adjust this value for the desired space between words
    };

    return (
        <div>
            
            <table style={tableCellStyle}>
                <thead>
                    <tr>
                        <th style={cellStyle}>Time</th>
                        <th style={cellStyle}>Event</th>
                        <th style={cellStyle}>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {schedule.map((item, index) => (
                        <tr key={index}>
                            <td style={cellStyle}>{item.time}</td>
                            <td style={cellStyle}>{item.event}</td>
                            <td style={cellStyle}>{item.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;

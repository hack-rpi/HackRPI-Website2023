import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';


const currentDate = '2023-11-04';

const schedulerData = [
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
    location: 'DCC 308/Discord',
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
    event: 'Nuvalence',
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
    event: 'Hacking The Machine For Fun',
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
    event: 'Global Foundries',
    location: 'DCC 327',
  },
  {
    startTime: new Date('2023-11-04T17:30:00-04:00'),
    endTime: new Date('2023-11-04T18:30:00-04:00'),
    event: 'Password Exploitation - FBI Albany ',
    location: 'DCC 318',
  },
  {
    startTime: new Date('2023-11-04T18:30:00-04:00'),
    endTime: new Date('2023-11-04T19:30:00-04:00'),
    event: 'Hugging Face',
    location: 'DCC 327',
  },
  {
    startTime: new Date('2023-11-04T18:30:00-04:00'),
    endTime: new Date('2023-11-04T23:00-04:00'),
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
    startTime: new Date('2023-11-05T00:30:00-04:00'),
    endTime: new Date('2023-11-05T01:30:00-04:00'),
    event: 'Movie Starts',
    location: 'DCC 324',
  },
  {
    startTime: new Date('2023-11-05T01:00:00-04:00'),
    endTime: new Date('2023-11-05T02:00:00-05:00'),
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

];

const AppointmentContent = ({ children, style, ...restProps }) => {
  const { data } = restProps;
  return (
    <Appointments.Appointment
      {...restProps}
      style={{ ...style, borderRadius: '8px' }}
    >
      {data.event}
    </Appointments.Appointment>
  );
};

const Schedule = () => (
  <Paper style={{ width: '70%', margin: 'auto' }}>
    <Scheduler
      data={schedulerData}
    >
      <ViewState
        currentDate={currentDate}
      />
      <DayView
        startDayHour={0}
        endDayHour={48}
      />
      <Appointments appointmentComponent={AppointmentContent} />
    </Scheduler>
  </Paper>
);

export default Schedule;
import Paper from '@mui/material/Paper';
import {
  Scheduler,
  DayView,
  Appointments,
  Resources
} from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState } from '@devexpress/dx-react-scheduler';

const currentDate = '2023-11-04';
const currentDate2 = '2023-11-05';

const resourcesData = [
  { text: 'Location A', id: 1, color: '#E57373' },
  { text: 'Location B', id: 2, color: '#81C784' },
  { text: 'Location B', id: 3, color: '#81C784' },
  { text: 'Location B', id: 4, color: '#81C784' },
  { text: 'Location B', id: 5, color: '#81C784' },
  { text: 'Location B', id: 6, color: '#81C784' },
  { text: 'Location B', id: 7, color: '#81C784' },
  { text: 'Location B', id: 8, color: '#81C784' },
  { text: 'Location B', id: 9, color: '#81C784' },
  { text: 'Location B', id: 10, color: '#81C784' },
  { text: 'Location B', id: 11, color: '#81C784' },
  { text: 'Location B', id: 12, color: '#81C784' },
  { text: 'Location B', id: 13, color: '#81C784' },
  { text: 'Location B', id: 14, color: '#81C784' },
  { text: 'Location B', id: 15, color: '#81C784' },
  { text: 'Location B', id: 16, color: '#81C784' },
  { text: 'Location B', id: 17, color: '#81C784' },
  { text: 'Location B', id: 18, color: '#81C784' },
  { text: 'Location B', id: 19, color: '#81C784' },
  { text: 'Location B', id: 20, color: '#81C784' },
  { text: 'Location B', id: 21, color: '#81C784' },
  { text: 'Location B', id: 22, color: '#81C784' },
  { text: 'Location B', id: 23, color: '#81C784' },
  { text: 'Location B', id: 24, color: '#81C784' },
  { text: 'Location B', id: 25, color: '#81C784' },
  { text: 'Location B', id: 26, color: '#81C784' },
  { text: 'Location B', id: 27, color: '#81C784' },
  { text: 'Location B', id: 28, color: '#81C784' },
  { text: 'Location B', id: 29, color: '#81C784' },
  { text: 'Location B', id: 30, color: '#81C784' },
  { text: 'Location B', id: 31, color: '#81C784' },
  { text: 'Location B', id: 32, color: '#81C784' },
]
const resources = [{
  fieldName: 'resourceId',
  title: 'Location',
  instances: resourcesData,
}];
const schedulerData2 = [
{
  startDate: new Date('2023-11-05T00:00:00-04:00'),
  endDate: new Date('2023-11-05T02:00:00-04:00'),
  title: 'Midnight Snacks',
  location: 'DCC Lounge',
  resourceId: 24
},
{
  startDate: new Date('2023-11-05T00:30:00-04:00'),
  endDate: new Date('2023-11-05T01:30:00-04:00'),
  title: 'Movie Starts',
  location: 'DCC 324',
  resourceId: 25
},
{
  startDate: new Date('2023-11-05T01:00:00-04:00'),
  endDate: new Date('2023-11-05T02:00:00-05:00'),
  title: 'Daylight Savings Party',
  location: 'DCC Lounge',
  resourceId: 26
},
//Account for daylight savings using GMT -5:00
{
  startDate: new Date('2023-11-05T07:00:00-05:00'),
  endDate: new Date('2023-11-05T09:00:00-05:00'),
  title: 'Breakfast',
  location: 'DCC Lounge',
  resourceId: 27
},
{
  startDate: new Date('2023-11-05T07:00:00-05:00'),
  endDate: new Date('2023-11-05T09:00:00-05:00'),
  title: 'Submission Deadline',
  location: 'Online',
  resourceId: 28
},
{
  startDate: new Date('2023-11-05T11:30:00-05:00'),
  endDate: new Date('2023-11-05T12:00:00-05:00'),
  title: 'Hacking Ends @ 12',
  location: '',
  resourceId: 29
},
{
  startDate: new Date('2023-11-05T12:00:00-05:00'),
  endDate: new Date('2023-11-05T15:00:00-05:00'),
  title: 'Showcase',
  location: 'DCC 308',
  resourceId: 30
},
{
  startDate: new Date('2023-11-05T13:00:00-05:00'),
  endDate: new Date('2023-11-05T14:00:00-05:00'),
  title: 'Lunch',
  location: 'DCC Lounge',
  resourceId: 31
},
{
  startDate: new Date('2023-11-05T15:00:00-05:00'),
  endDate: new Date('2023-11-05T15:30:00-05:00'),
  title: 'Closing Ceremony',
  location: 'DCC Lounge',
  resourceId: 32
},
{
  startDate: new Date('2023-11-04T12:00:00-04:00'),
  endDate: new Date('2023-11-04T12:00:00-04:00'),
  title: 'Mentoring Desk',
  location: 'Great Hall',
},
{
  startDate: new Date('2023-11-05T22:00:00-00:00'),
  endDate: new Date('2023-11-05T09:00:00-05:00'),
  title: 'Sleeping Rooms',
  location: 'LOW 3112, 3130, 3116',
},
{
  startDate: new Date('2023-11-05T08:00-05:00'),
  endDate: new Date('2023-11-05T12:00:00-05:00'),
  title: 'Last Chance Mentoring',
  location: '',
},
]

const schedulerData = [
  {
    startDate: new Date('2023-11-04T10:00:00-04:00'), 
    endDate: new Date('2023-11-04T11:00:00-04:00'),
    title: 'Participant Check-In',
    location: 'DCC Lobby',
    resourceId: 1
  },
  {
    startDate: new Date('2023-11-04T11:00:00-04:00'),
    endDate: new Date('2023-11-04T12:00:00-04:00'),
    title: 'Opening Ceremony',
    location: 'DCC 308',
    resourceId: 2
  },
  {
    startDate: new Date('2023-11-04T11:30:00-04:00'),
    endDate: new Date('2023-11-04T12:00:00-04:00'),
    title: 'API demos',
    location: 'DCC 308',
    resourceId: 3
  },
  {
    startDate: new Date('2023-11-04T12:00:00-04:00'),
    endDate: new Date('2023-11-05T12:00:00-04:00'),
    title: 'Hacking Begins',
    location: 'DCC 308',
    resourceId: 4
  },
  {
    startDate: new Date('2023-11-04T12:00:00-04:00'),
    endDate: new Date('2023-11-04T12:30:00-04:00'),
    title: 'Team Pairing',
    location: 'DCC 308/Discord',
    resourceId: 5
  },
  {
    startDate: new Date('2023-11-04T12:00:00-04:00'),
    endDate: new Date('2023-11-04T12:30:00-04:00'),
    title: 'Patient Safety 101',
    location: 'DCC 318',
    resourceId: 6
  },
  {
    startDate: new Date('2023-11-04T12:30:00-04:00'),
    endDate: new Date('2023-11-04T13:30:00-04:00'),
    title: 'Intro to Tech Stack Workshop',
    location: 'DCC 308',
    resourceId: 7
  },
  {
    startDate: new Date('2023-11-04T13:00:00-04:00'),
    endDate: new Date('2023-11-04T14:00:00-04:00'),
    title: 'Lunch',
    location: 'DCC Lounge',
    resourceId: 8
  },
  {
    startDate: new Date('2023-11-04T13:30:00-04:00'),
    endDate: new Date('2023-11-04T14:30:00-04:00'),
    title: 'MERN Web Dev Workshop',
    location: 'DCC 308',
    resourceId: 9
  },
  {
    startDate: new Date('2023-11-04T13:30:00-04:00'),
    endDate: new Date('2023-11-04T14:30:00-04:00'),
    title: 'Mobile Dev Workshop',
    location: 'DCC 318',
    resourceId: 10
  },
  {
    startDate: new Date('2023-11-04T14:30:00-04:00'),
    endDate: new Date('2023-11-04T15:30:00-04:00'),
    title: 'Quantum',
    location: 'DCC 308',
    resourceId: 11
  },
  {
    startDate: new Date('2023-11-04T14:30:00-04:00'),
    endDate: new Date('2023-11-04T15:30:00-04:00'),
    title: 'Nuvalence',
    location: 'DCC 330',
    resourceId: 12
  },
  {
    startDate: new Date('2023-11-04T15:30:00-04:00'),
    endDate: new Date('2023-11-04T16:30:00-04:00'),
    title: 'Scrum Workshop',
    location: 'DCC 327',
    resourceId: 13
  },
  {
    startDate: new Date('2023-11-04T16:30:00-04:00'),
    endDate: new Date('2023-11-04T17:30:00-04:00'),
    title: 'Hacking The Machine For Fun',
    location: 'DCC 318',
    resourceId: 14
  },
  {
    startDate: new Date('2023-11-04T16:30:00-04:00'),
    endDate: new Date('2023-11-04T17:30:00-04:00'),
    title: 'Call For Code',
    location: 'DCC 308',
    resourceId: 15
  },
  {
    startDate: new Date('2023-11-04T17:30:00-04:00'),
    endDate: new Date('2023-11-04T18:30:00-04:00'),
    title: 'Global Foundries',
    location: 'DCC 327',
    resourceId: 16
  },
  {
    startDate: new Date('2023-11-04T17:30:00-04:00'),
    endDate: new Date('2023-11-04T18:30:00-04:00'),
    title: 'Password Exploitation - FBI Albany ',
    location: 'DCC 318',
    resourceId: 17
  },
  {
    startDate: new Date('2023-11-04T18:30:00-04:00'),
    endDate: new Date('2023-11-04T19:30:00-04:00'),
    title: 'Hugging Face',
    location: 'DCC 327',
    resourceId: 18
  },
  {
    startDate: new Date('2023-11-04T18:30:00-04:00'),
    endDate: new Date('2023-11-04T23:00-04:00'),
    title: 'Smash Club',
    location: 'DCC 318',
    resourceId: 19
  },
  {
    startDate: new Date('2023-11-04T19:00:00-04:00'),
    endDate: new Date('2023-11-04T20:00:00-04:00'),
    title: 'Dinner',
    location: 'DCC Lounge',
    resourceId: 20
  },
  {
    startDate: new Date('2023-11-04T21:00:00-04:00'),
    endDate: new Date('2023-11-04T22:00:00-04:00'),
    title: '!Light MLH Event',
    location: 'DCC 308',
    resourceId: 21
  },
  {
    startDate: new Date('2023-11-04T22:00:00-04:00'),
    endDate: new Date('2023-11-04T23:00:00-04:00'),
    title: 'Fun Activity (Trivia/Game)',
    location: 'DCC 318',
    resourceId: 22
  },
  // {
  //   startDate: new Date('2023-11-04T23:00:00-04:00'),
  //   endDate: new Date('2023-11-04T23:30:00-04:00'),
  //   title: 'Boba',
  //   location: 'DCC Lounge',
  //   resourceId: 23
  // },
  {
    startDate: new Date('2023-11-04T12:00:00-04:00'),
    endDate: new Date('2023-11-04T12:00:00-04:00'),
    title: 'Mentoring Desk',
    location: 'Great Hall',
  },
  {
    startDate: new Date('2023-11-04T22:00:00-04:00'),
    endDate: new Date('2023-11-04T09:00:00-00:00'),
    title: 'Sleeping Rooms',
    location: 'LOW 3112, 3130, 3116',
  },
  {
    startDate: new Date('2023-11-05T08:00-05:00'),
    endDate: new Date('2023-11-05T12:00:00-05:00'),
    title: 'Last Chance Mentoring',
    location: '',
  },

];
const Schedule = () => (
  <Paper style={{ width: '70%', margin: 'auto', backgroundColor: '#353535' }}>
    <Scheduler
      data={schedulerData}
    >
      <ViewState
        currentDate={currentDate}
      />
      <DayView
        startDayHour={9}
        endDayHour={24}
      />
      <Appointments />
    </Scheduler>
    <Scheduler
      data={schedulerData2}
    >
      <ViewState
        currentDate={currentDate2}
      />
      <DayView
        startDayHour={0}
        endDayHour={16}
      />
      <Appointments />
    </Scheduler>
  </Paper>
);

export default Schedule;
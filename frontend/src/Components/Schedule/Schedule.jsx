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
  { startDate: '2023-11-04T09:45', endDate: '2023-11-04T11:00', title: 'Meeting' },
  { startDate: '2023-11-05T12:00', endDate: '2023-11-05T13:30', title: 'Go to a gym' },
];

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
      <Appointments />
    </Scheduler>
  </Paper>
);

export default Schedule;

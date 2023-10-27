import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

import schedulerData from './schedulerData.jsx';

const currentDate = '2023-11-04';

const Schedule = () => (
  <Paper style={{ width: '70%', margin: 'auto', backgroundColor: '#353535' }}>
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
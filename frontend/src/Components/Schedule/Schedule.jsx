import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

export const Schedule = () => {
  const data = [
    {
      Id: 2,
      Subject: 'Meeting',
      StartTime: new Date(2018, 1, 15, 10, 0),
      EndTime: new Date(2018, 1, 15, 12, 30),
      IsAllDay: false,
      Status: 'Completed',
      Priority: 'High'
    },
  ];
  const fieldsData = {
    id: 'Id',
    subject: { name: 'Subject' },
    isAllDay: { name: 'IsAllDay' },
    startTime: { name: 'StartTime' },
    endTime: { name: 'EndTime' }
  }
  const eventSettings = { dataSource: data, fields: fieldsData }

  return (<ScheduleComponent height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
  </ScheduleComponent>);
}

ReactDOM.render(<Schedule />, document.getElementById('schedule'));

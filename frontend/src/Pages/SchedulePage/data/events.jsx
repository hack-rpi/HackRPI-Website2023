const eventsData = {
    normalEvents: [
        {
            startTime: '2023-11-04T10:00:00-04:00',
            endTime: '2023-11-04T11:00:00-04:00',
            event: 'Participant Check-In',
            location: 'DCC Lobby',
        },
        {
            startTime: '2023-11-04T11:00:00-04:00',
            endTime: '2023-11-04T12:00:00-04:00',
            event: 'Opening Ceremony',
            location: 'DCC 308',
        },
        {
            startTime: '2023-11-04T11:30:00-04:00',
            endTime: '2023-11-04T12:00:00-04:00',
            event: 'API demos',
            location: 'DCC 308',
        },
        {
            startTime: '2023-11-04T12:00:00-04:00',
            endTime: '2023-11-05T12:00:00-04:00',
            event: 'Hacking Begins',
            location: 'DCC 308',
        },
        {
            startTime: '2023-11-04T12:00:00-04:00',
            endTime: '2023-11-04T12:30:00-04:00',
            event: 'Team Pairing',
            location: 'DCC 308/Discord',
        },
        {
            startTime: '2023-11-04T12:00:00-04:00',
            endTime: '2023-11-04T12:30:00-04:00',
            event: 'Patient Safety 101',
            location: 'DCC 318',
        },
        {
            startTime: '2023-11-04T12:30:00-04:00',
            endTime: '2023-11-04T13:30:00-04:00',
            event: 'Intro to Tech Stack Workshop',
            location: 'DCC 308',
        },
        {
            startTime: '2023-11-04T13:00:00-04:00',
            endTime: '2023-11-04T14:00:00-04:00',
            event: 'Lunch',
            location: 'DCC Lounge',
        },
        {
            startTime: '2023-11-04T13:30:00-04:00',
            endTime: '2023-11-04T14:30:00-04:00',
            event: 'MERN Web Dev Workshop',
            location: 'DCC 308',
        },
        {
            startTime: '2023-11-04T13:30:00-04:00',
            endTime: '2023-11-04T14:30:00-04:00',
            event: 'Mobile Dev Workshop',
            location: 'DCC 318',
        },
        {
            startTime: '2023-11-04T19:00:00-04:00',
            endTime: '2023-11-04T20:00:00-04:00',
            event: 'Dinner',
            location: 'DCC Lounge',
        },
        {
            startTime: '2023-11-04T23:30:00.000Z',
            endTime: '2023-11-05T00:30:00.000Z',
            event: 'The Forge Workshop',
            location: 'LOW 2037A',
        },
        {
            startTime: '2023-11-04T21:00:00-04:00',
            endTime: '2023-11-04T22:00:00-04:00',
            event: '!Light MLH Event',
            location: 'DCC 308',
        },
        {
            startTime: '2023-11-04T22:00:00-04:00',
            endTime: '2023-11-04T23:00:00-04:00',
            event: 'Fun Activity (Trivia/Game)',
            location: 'DCC 318',
        },
        {
            startTime: '2023-11-04T23:00:00-04:00',
            endTime: '2023-11-04T23:30:00-04:00',
            event: 'Boba',
            location: 'DCC Lounge',
        },
        {
            startTime: '2023-11-05T00:00:00-04:00',
            endTime: '2023-11-05T02:00:00-04:00',
            event: 'Midnight Snacks',
            location: 'DCC Lounge',
        },
        {
            startTime: '2023-11-05T00:30:00-04:00',
            endTime: '2023-11-05T01:30:00-04:00',
            event: 'Movie Starts',
            location: 'DCC 324',
        },
        {
            startTime: '2023-11-05T01:00:00-04:00',
            endTime: '2023-11-05T02:00:00-05:00',
            event: 'Daylight Savings Party',
            location: 'DCC Lounge',
        },
        {
            startTime: '2023-11-05T07:00:00-05:00',
            endTime: '2023-11-05T09:00:00-05:00',
            event: 'Breakfast',
            location: 'DCC Lounge',
        },
        {
            startTime: '2023-11-05T07:00:00-05:00',
            endTime: '2023-11-05T09:00:00-05:00',
            event: 'Submission Deadline',
            location: 'Online',
        },
        {
            startTime: '2023-11-05T11:30:00-05:00',
            endTime: '2023-11-05T12:00:00-05:00',
            event: 'Hacking Ends @ 12',
            location: '',
        },
        {
            startTime: '2023-11-04T14:30:00-04:00',
            endTime: '2023-11-04T15:30:00-04:00',
            event: 'Quantum',
            location: 'DCC 308',
        },
        {
            startTime: '2023-11-05T15:00:00-05:00',
            endTime: '2023-11-05T15:30:00-05:00',
            event: 'Closing Ceremony',
            location: 'DCC Lounge',
        },
    ],
    constantEvents: [
        {
            startTime: '2023-11-04T12:00:00-04:00',
            endTime: '2023-11-04T24:00:00-04:00',
            event: 'Mentoring Desk',
            location: 'Great Hall',
        },
        {
            startTime: '2023-11-04T22:00:00-04:00',
            endTime: '2023-11-05T09:00:00-05:00',
            event: 'Sleeping Rooms',
            location: 'LOW 3112, 3130, 3116',
        },
        {
            startTime: '2023-11-05T08:00-05:00',
            endTime: '2023-11-05T12:00:00-05:00',
            event: 'Last Chance Mentoring',
            location: '',
        },
    ]
};
  
  
const allEvents = [...eventsData.normalEvents, ...eventsData.constantEvents];

allEvents.sort((eventA, eventB) => {
  const startTimeA = new Date(eventA.startTime).getTime();
  const startTimeB = new Date(eventB.startTime).getTime();

  return startTimeA - startTimeB;
});

export default allEvents;

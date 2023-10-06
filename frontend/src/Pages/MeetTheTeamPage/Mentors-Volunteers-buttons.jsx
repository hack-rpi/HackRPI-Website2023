import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';

// The blurb that is supposed to provide information about signing up
<Tab.Pane eventKey="two">
  We are looking for mentors and volunteers to assist in the event!
  Mentors and Volunteers will receive exclusive HackRPI merch and
  free food in addition to hacker perks for assisting the event.
  Mentors will be helping teams out with their coding projects
  as well. Are you interested? Click the buttons to take you to
  the signup pages!
</Tab.Pane>

// The link that leads to the mentor page
<div>
  <Nav.Link href="https://forms.gle/VY1vXF1mPMgx82wdA">
    <Button
      variant="outline" className='button'
      style={{ backgroundColor: '#910307', color: 'white' }}
    >
      Mentor Application
    </Button>
  </Nav.Link>
</div>

// The link that leads to the volunteer page
<div>
  <Nav.Link href="https://forms.gle/kEpdKKKrFsSUQztR6">
    <Button
      variant="outline" className='button'
      style={{ backgroundColor: '#910307', color: 'white' }}
    >
      Volunteer Application
    </Button>
  </Nav.Link>
</div>
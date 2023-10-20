import React from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const WorkshopPage = () => {

    const workshops = [
        {
            title: ' Intro to MERN Stack Web Dev Workshop',
            time: '1:30-2:30',
            location: '',
            speaker: 'Yash Kaul',
            pic: '',
        },
        
        {
            title: 'Password Exploitation - FBI Albany',
            time: '5:30-6:30',
            location: '',
            speaker: 'Alex Vargas and Ryan Gallagher',
            pic: '',
        },

        {
            title: 'Hacking the machine for fun (and sometimes profit)',
            time: '4:30-5:30',
            location: '',
            speaker: ' Dr. Brian Callahan (w/ Ayah Tharwat )',
            pic: '',
        },

        {
            title: 'Patient Safety 101',
            time: '12-12:30',
            location: '',
            speaker: 'TBD',
            pic: '',
        },

        {
            title: 'Design Thinking for Technical Innovation',
            time: '4:30-5:30',
            location: '',
            speaker: 'Kylinn Askew',
            pic: '',
        },

        {
            title: 'AI made easy with Hugging Face',
            time: '6:30-7:30',
            location: '',
            speaker: 'Raven Levitt',
            pic: '',
        },
        // Add more workshop objects as needed
    ];
  
  return (
    <div id="workshops" className="WorkshopPage" style={{ textAlign: 'center', width: '80%', margin: 'auto' }}>
      <h1 style={{ fontFamily: 'Mokoto', fontSize: 46, marginBottom: '20px' }}>
        Checkout our Workshops!
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </h1>
    </div>
  );
};


export default WorkshopPage;
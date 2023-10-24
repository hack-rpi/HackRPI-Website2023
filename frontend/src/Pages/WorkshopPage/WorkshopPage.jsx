import React from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import workshopMern from '../../../assets/workshopPics/mern.png';
import workshopPassword from '../../../assets/workshopPics/password.jpeg';
import workshopHacking from '../../../assets/workshopPics/hacking.jpeg';
import workshopSafety from '../../../assets/workshopPics/safety.jpeg';
import workshopDesign from '../../../assets/workshopPics/design.jpeg';
import workshopAI from '../../../assets/workshopPics/ai.jpeg';
import workshopAgile from '../../../assets/workshopPics/agile.jpeg';
import workshopForge from '../../../assets/workshopPics/forge.png';

const WorkshopPage = () => {

    const workshops = [
        {
            title: ' Intro to MERN Stack Web Dev Workshop',
            time: '1:30-2:30',
            location: 'TBD',
            speaker: 'Yash Kaul',
            pic: workshopMern,
        },
        
        {
            title: 'Password Exploitation - FBI Albany',
            time: '5:30-6:30',
            location: 'TBD',
            speaker: 'Alex Vargas and Ryan Gallagher',
            pic: workshopPassword,
        },

        {
            title: 'Hacking the machine for fun (and sometimes profit)',
            time: '4:30-5:30',
            location: 'TBD',
            speaker: ' Dr. Brian Callahan (w/ Ayah Tharwat )',
            pic: workshopHacking,
        },

        {
            title: 'Patient Safety 101',
            time: '12-12:30',
            location: 'TBD',
            speaker: 'TBD',
            pic: workshopSafety,
        },

        {
            title: 'Design Thinking for Technical Innovation',
            time: '4:30-5:30',
            location: 'TBD',
            speaker: 'Kylinn Askew',
            pic: workshopDesign,
        },

        {
            title: 'AI made easy with Hugging Face',
            time: '6:30-7:30',
            location: 'TBD',
            speaker: 'Raven Levitt',
            pic: workshopAI,
        },

        {
          title: 'Agile Development Workshop',
          time: '3:30-4:30',
          location: 'TBD',
          speaker: 'John Sturman',
          pic: workshopAgile,
      },

      {
        title: 'Sticker Workshop with The Forge',
        time: 'TBD',
        location: 'TBD',
        speaker: 'Mikiel Gica, Saad Mujahid, and Julia Kapchynsky',
        pic: workshopForge,
    },
        // Add more workshop objects as needed
    ];
  
    return (
      <div id="workshops" className="WorkshopPage" style={{ textAlign: 'center', width: '80%', margin: 'auto' }}>
          <h1 style={{ fontFamily: 'Mokoto', fontSize: 46, marginBottom: '20px' }}>
              Checkout our Workshops!
          </h1>
          {workshops.map((workshop, index) => (
              <div key={index} style={{ marginBottom: '20px' }}>
                  {workshop.pic && <img src={workshop.pic} alt="Workshop" style={{ width: '300px', height: '200px' }} />}
                  <h3 style={{ fontWeight: 'bold' }}>{workshop.title}</h3>
                  <p>{workshop.time}</p>
                  <p>{workshop.location}</p>
                  <p>{workshop.speaker}</p>
              </div>
          ))}
      </div>
  );
};

export default WorkshopPage;
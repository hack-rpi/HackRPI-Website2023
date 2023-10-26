
import React, { useState } from 'react';
import { Col, Row, Card, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import workshopMern from '../../../assets/workshopPics/mern.png';
import workshopPassword from '../../../assets/workshopPics/password.jpeg';
import workshopHacking from '../../../assets/workshopPics/hacking.jpeg';
import workshopSafety from '../../../assets/workshopPics/safety.jpeg';
import workshopDesign from '../../../assets/workshopPics/design.jpeg';
import workshopAI from '../../../assets/workshopPics/ai.jpeg';
import workshopAgile from '../../../assets/workshopPics/agile.jpeg';
import workshopForge from '../../../assets/workshopPics/forge.png';

const WorkshopPage = () => {
  const [show, setShow] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (workshop) => {
      setSelectedWorkshop(workshop);
      setShow(true);
  };

    const workshops = [
        {
            title: ' Intro to MERN Stack Web Dev Workshop',
            time: '1:30-2:30',
            location: 'TBD',
            speaker: 'Yash Kaul',
            pic: workshopMern,
            description: 'Gain hands-on experience with MongoDB—covering schema validation, client to database connection, and implementing API \
            controllers. Learn about Express: including routing, middleware, and error handling. Utilize React to quickly build \
            interactive applications with state management. Explore Node.js and Npm to manage package dependencies\
             and build/run/test your application easily.  This workshop aims to introduce the basics of MERN applications for use in the\
             hackathon and discuss potential considerations for real world use and deployment.'
        },
        
        {
            title: 'Password Exploitation - FBI Albany',
            time: '5:30-6:30',
            location: 'TBD',
            speaker: 'Alex Vargas and Ryan Gallagher',
            pic: workshopPassword,
            description: 'Join the FBI as they explain the math behind password complexity, including tactics for how to attack and\
            break passwords. They will cover steps on how to extract a password hash from a file and run it with \
           hashcat to crack the password. '
        },

        {
            title: 'Hacking the machine for fun (and sometimes profit)',
            time: '4:30-5:30',
            location: 'TBD',
            speaker: ' Dr. Brian Callahan (w/ Ayah Tharwat )',
            pic: workshopHacking,
            description: 'Securing software requires developers to learn how to think like an attacker; you cannot defend against what you cannot\
            imagine going  wrong with your software. There are a wide variety of potential attacks, but \
            learning just a basic few can go a very long way towards improving your coding skills. In this workshop, we will participate in a \
            set of interactive Capture the Flag (CTF) challenges designed to demonstrate some of the \
            ways attackers think. Alongside hacking our machines, we will also learn some secure coding paradigms \
            to protect against these attacks. By the end of the workshop, you will have a newfound appreciation for the importance \
            of secure coding and be armed with the ability to build more secure software.'
        },

        {
            title: 'Patient Safety 101',
            time: '12-12:30',
            location: 'TBD',
            speaker: 'TBD',
            pic: workshopSafety,
            description: 'This workshop is designed for hackers interested in the Patient Safety Tech Prize. It will\
            give you background on patient safety as an urgent issue and will help inspire you to\
            spend your weekend hacking together a project that has the potential to save lives! \
           The team with the best tech-enabled solution will win $1000.'
        },

        {
            title: 'Design Thinking for Technical Innovation',
            time: '4:30-5:30',
            location: 'TBD',
            speaker: 'Kylinn Askew',
            pic: workshopDesign,
            description: 'Explore the power of design thinking to drive innovation and foster collaboration to build\
            strong technical products and startups. Learn how to harness creative problem-solving,\
            empathetic user-centric approaches, and cross-functional teamwork to create products\
            that not only meet technical requirements but also exceed user expectations'
        },

        {
            title: 'AI made easy with Hugging Face',
            time: '6:30-7:30',
            location: 'TBD',
            speaker: 'Raven Levitt',
            pic: workshopAI,
            description: 'Have a hack that needs AI but no idea where to start? In this workshop I’ll go over how to use the\
            Hugging Face API to easily leverage thousands of different machine learning models to tackle whatever\
             challenge you’re dealing with, be it text-generation, object detection, or just about any other machine \
            learning challenge, hugging face is a great place to start! After a short presentation we’ll hold a mini \
            competition for the best use of the API, and there just might be prizes…'
        },

        {
          title: 'Agile Development Workshop',
          time: '3:30-4:30',
          location: 'TBD',
          speaker: 'John Sturman',
          pic: workshopAgile,
          description: 'Join John Sturman for a presentation about agile development and how to work in a development group for maximum productivity.\
          We will explore Scrum and iterative development doing a fun simulation exercise to give you some hands-on experience. \
          This is a good workshop to support you in working in a group creating a project efficiently and effectively.'
      },

      {
        title: 'Sticker Workshop with The Forge',
        time: 'TBD',
        location: 'TBD',
        speaker: 'Mikiel Gica, Saad Mujahid, and Julia Kapchynsky',
        pic: workshopForge,
        description: 'The Forge will be open to anyone interested in designing and creating their\
        own contour-cut vinyl stickers. We will be holding a workshop on using free\
        design software to prepare designs for our Roland BN-20A, and \
       afterwards, we will help you print your designs for free! Bringing a laptop\
        and a few images you want to turn into stickers is strongly recommended \
       to be able to follow along and participate.'
    },
        // Add more workshop objects as needed
    ];

    
  
    return (
      <div id="workshops" className="WorkshopPage" style={{ textAlign: 'center', width: '80%', margin: 'auto' }}>
          <h1 style={{ fontFamily: 'Mokoto', fontSize: 46, marginBottom: '20px' }}>
              Checkout our Workshops!
          </h1>
          <br></br>
          <Row>
              {workshops.map((workshop, index) => (
                  <Col key={index} xs={12} md={4} style={{ marginBottom: '20px' }}>
                      <Card style={{ width: '21rem', background: 'transparent', border: 'none' }} onClick={() => handleShow(workshop)}>
                          <Card.Img variant="top" src={workshop.pic} style={{ height: '200px', objectFit: 'cover' }} />
                          <Card.Body style={{ background: 'rgba(0,0,0,0.0)' }}>
                          <Card.Title style={{ color: 'white' }}>{workshop.title}</Card.Title>
                              <Card.Text>{workshop.time}</Card.Text>
                              <Card.Text>{workshop.location}</Card.Text>
                              <Card.Text>{workshop.speaker}</Card.Text>
                          </Card.Body>
                      </Card>
                  </Col>
              ))}
          </Row>
          {selectedWorkshop && (
              <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                      <Modal.Title>{selectedWorkshop.title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{selectedWorkshop.description}</Modal.Body>
                  <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                          Close
                      </Button>
                  </Modal.Footer>
              </Modal>
          )}
      </div>
  );
};

export default WorkshopPage;
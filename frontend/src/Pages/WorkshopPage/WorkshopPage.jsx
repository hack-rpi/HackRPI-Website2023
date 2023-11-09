
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
import workshopMobdev from '../../../assets/workshopPics/mobdev.png';
import workshopQuantum from '../../../assets/workshopPics/quantum.png';
import workshopSemi from '../../../assets/workshopPics/semi.jpeg';
import workshopTechstack from '../../../assets/workshopPics/techstack.jpeg';
import './style.css';

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
            title: 'Patient Safety 101',
            time: '12-12:30pm',
            location: 'DCC 318',
            speaker: 'Kathy Rauch',
            pic: workshopSafety,
            description: 'This workshop is designed for hackers interested in the Patient Safety Tech Prize. It will\
            give you background on patient safety as an urgent issue and will help inspire you to\
            spend your weekend hacking together a project that has the potential to save lives! \
            The team with the best tech-enabled solution will win $1000.'
        },

        {
          title: 'Intro to Tech Stacks',
          time: '12:30-1:30pm',
          location: 'DCC 308',
          speaker: 'Michael Anderson and Konstantin Kuzmin',
          pic: workshopTechstack,
          description: 'TBD'
        },
        
        {
            title: 'Intro to MERN Stack Web Dev Workshop',
            time: '1:30-2:30pm',
            location: 'DCC 308',
            speaker: 'Yash Kaul',
            pic: workshopMern,
            description: 'Gain hands-on experience with MongoDB—covering schema validation, client to database connection, and implementing API \
            controllers. Learn about Express: including routing, middleware, and error handling. Utilize React to quickly build \
            interactive applications with state management. Explore Node.js and Npm to manage package dependencies\
             and build/run/test your application easily.  This workshop aims to introduce the basics of MERN applications for use in the\
             hackathon and discuss potential considerations for real world use and deployment.'
        },

        {
          title: 'Mobile Dev Workshop',
          time: '1:30-2:30pm',
          location: 'DCC 318',
          speaker: 'Ryan Hickey',
          pic: workshopMobdev,
          description: "If you've ever wondered how those awesome apps on your phone are made, or if you've got an itch to create something fun and \
          innovative, the Mobile Dev Workshop is the perfect place to start! The main course of our workshop revolves around React and Flutter.  \
          These two powerful frameworks empower you to create fantastic, user-friendly, and visually stunning apps for both IOS and Android at  \
          once. We also will explore Google Firebase, a service that lets you effortlessly manage user data, authentication, and real-time updates.\
          With this software, you can quickly and effectively deploy fully functioning apps with minimal hardships. \
          But what's learning without doing? We've got an exciting coding activity for you! Get ready to roll up your \
          sleeves as you embark on a mini-project to create your mobile app. You'll apply everything you've \
          learned in a fun, hands-on session, and you might come up with the next big app idea!\
          No experience? No problem! This workshop is designed for beginners, and we will\
          be there every step of the way to help you get everything set up."
        },

        {
          title: "A beginner's Guide to Quantum Computing",
          time: '2:30-3:30pm',
          location: 'DCC 308',
          speaker: 'Brian Ingmanson',
          pic: workshopQuantum,
          description: 'How folks can run their first quantum circuit on a real quantum computer, and some of the quirks of quantum computing.'
        },

        {
          title: 'Agile Development Workshop',
          time: '3:30-4:30pm',
          location: 'DCC 324',
          speaker: 'John Sturman',
          pic: workshopAgile,
          description: 'Join John Sturman for a presentation about agile development and how to work in a development group for maximum productivity.\
          We will explore Scrum and iterative development doing a fun simulation exercise to give you some hands-on experience. \
          This is a good workshop to support you in working in a group creating a project efficiently and effectively.'
      },

      {
        title: 'Hacking the machine for fun (and sometimes profit)',
        time: '4:30-5:30pm',
        location: 'DCC 318',
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
      title: 'Design Thinking for Technical Innovation',
      time: '4:30-5:30pm',
      location: 'DCC 308',
      speaker: 'Kylinn Askew',
      pic: workshopDesign,
      description: 'Explore the power of design thinking to drive innovation and foster collaboration to build\
      strong technical products and startups. Learn how to harness creative problem-solving,\
      empathetic user-centric approaches, and cross-functional teamwork to create products\
      that not only meet technical requirements but also exceed user expectations'
    },

    {
        title: 'Password Exploitation - FBI Albany',
        time: '5:30-6:30pm',
        location: 'DCC 318',
        speaker: 'Alex Vargas and Ryan Gallagher',
        pic: workshopPassword,
        description: 'Join the FBI as they explain the math behind password complexity, including tactics for how to attack and\
        break passwords. They will cover steps on how to extract a password hash from a file and run it with \
        hashcat to crack the password. '
    },

    {
      title: 'Semiconductor Industry Overview',
      time: '5:30-6:30pm',
      location: 'DCC 324',
      speaker: 'Alexander Martin',
      pic: workshopSemi,
      description: 'Software needs hardware to operate. The last several years has seen a fundamental shift in the\
      Semiconductor Supply Chain. We will provide an overview of the Semiconductor Industry and the role of Global \
      Foundries in that ecosystem.'
  },

    {
        title: 'AI made easy with Hugging Face',
        time: '6:30-7:30pm',
        location: 'DCC 324',
        speaker: 'Raven Levitt',
        pic: workshopAI,
        description: 'Have a hack that needs AI but no idea where to start? In this workshop I’ll go over how to use the\
        Hugging Face API to easily leverage thousands of different machine learning models to tackle whatever\
          challenge you’re dealing with, be it text-generation, object detection, or just about any other machine \
        learning challenge, hugging face is a great place to start! After a short presentation we’ll hold a mini \
        competition for the best use of the API, and there just might be prizes…'
    },

      {
        title: 'Sticker Workshop with The Forge',
        time: '7:30-8:30',
        location: 'Forge',
        speaker: 'Mikiel Gica, Saad Mujahid, and Julia Kapchynsky',
        pic: workshopForge,
        description: 'The Forge will be open to anyone interested in designing and creating their\
        own contour-cut vinyl stickers. We will be holding a workshop on using free\
        design software to prepare designs for our Roland BN-20A, and \
       afterwards, we will help you print your designs for free! Bringing a laptop\
        and a few images you want to turn into stickers is strongly recommended \
       to be able to follow along and participate.'
    },
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
                <Card className="card-container" onClick={() => handleShow(workshop)}>
                <Card.Img variant="top" src={workshop.pic} className="rounded-corners" style={{ height: '200px', objectFit: 'cover', borderRadius: '10px', padding: '10px', margin: '0 auto'}} />
                <Card.Body style={{ background: 'rgba(0,0,0,0.0)' }}>
                    <Card.Title style={{ color: 'white' }}>{workshop.title}</Card.Title> <br />
                    <Card.Text style={{ fontSize: 14 }}><span style={{ color: 'red', fontWeight: 'bold' }}>Time:</span> <span style={{ color: 'white' }}>{workshop.time}</span></Card.Text>
                    <Card.Text style={{ fontSize: 14 }}><span style={{ color: 'red', fontWeight: 'bold' }}>Location:</span> <span style={{ color: 'white' }}>{workshop.location}</span></Card.Text>
                    <Card.Text style={{ fontSize: 14 }}><span style={{ color: 'red', fontWeight: 'bold' }}>Speaker:</span> <span style={{ color: 'white' }}>{workshop.speaker}</span></Card.Text>
                </Card.Body>
                </Card>
            </Col>
            ))}
          </Row>
          {selectedWorkshop && (
            <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
                <Modal.Header closeButton style={{ background: 'rgba(0,0,0,0.9)', border: 'none' }}>
                <Modal.Title style={{ color: 'white', fontFamily: 'Roboto', fontSize: 45, textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>{selectedWorkshop.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ background: 'rgba(0,0,0,0.9)', color: 'black', fontFamily: 'Roboto', fontSize: 16, textAlign: 'center' }}>
                <p><strong style={{fontWeight: 'bold', color: 'red', fontSize: 18 }}>Time:</strong> {selectedWorkshop.time}</p>
                <p><strong style={{ fontWeight: 'bold', color: 'red', fontSize: 18 }}>Location:</strong> {selectedWorkshop.location}</p>
                <p><strong style={{ fontWeight: 'bold', color: 'red', fontSize: 18 }}>Speaker:</strong> {selectedWorkshop.speaker}</p>
                <p>{selectedWorkshop.description}</p>
                </Modal.Body>
                <Modal.Footer style={{ background: 'rgba(0,0,0,0.9)', border: 'none' }}>
                <Button variant="secondary" onClick={handleClose} style={{ backgroundColor: 'red', borderColor: 'red' }}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
          )}
        </div>
      );
      };

export default WorkshopPage;
import React, { useState } from 'react';
import { Col, Row, Card, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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

const UgliestCodePage = () => {
    const [show, setShow] = useState(false);
    const [selectedWorkshop, setSelectedWorkshop] = useState(null);

    const handleClose = () => setShow(false);

    const handleRedirect = (link) => {
        window.open(link, '_blank'); // Opens the link in a new tab
    };

    const handleShow = (workshop) => {
        setSelectedWorkshop(workshop);
        handleRedirect(workshop.link); // Redirects to the specified link
    };

    const workshops = [
        {
            title: 'Eric Gonzales',
            language: 'Python',
            pic: workshopSafety,
            link: 'https://github.com/Ejamesgonz204/EJ-Gonzales---ugliest-code-submission'
        },

        {
            title: 'Intro to Tech Stacks',
            language: 'Python',
            pic: workshopTechstack
        },

        {
            title: 'Intro to Tech Stacks',
            language: 'Python',
            pic: workshopTechstack
        },

        {
            title: 'Intro to Tech Stacks',
            language: 'Python',
            pic: workshopTechstack
        },

        {
            title: 'Intro to Tech Stacks',
            language: 'Python',
            pic: workshopTechstack
        },

        {
            title: 'Intro to Tech Stacks',
            language: 'Python',
            pic: workshopTechstack
        },

        {
            title: 'Intro to Tech Stacks',
            language: 'Python',
            pic: workshopTechstack
        },

        {
            title: 'Intro to Tech Stacks',
            language: 'Python',
            pic: workshopTechstack

        },

        {
            title: 'Intro to Tech Stacks',
            language: 'Python',
            pic: workshopTechstack
        },

        {
            title: 'Intro to Tech Stacks',
            language: 'Python',
            pic: workshopTechstack
        },

        {
            title: 'Intro to Tech Stacks',
            language: 'Python',
            pic: workshopTechstack
        },

        {
            title: 'Intro to Tech Stacks',
            language: 'Python',
            pic: workshopTechstack
        },
    ];



    return (
        <div id="workshops" className="ugliest-code" style={{ textAlign: 'center', width: '80%', margin: 'auto' }}>
            <h1 style={{ fontFamily: 'Mokoto', fontSize: 46, marginBottom: '20px' }}>
                Ugliest Code Competition!
            </h1>
            <br></br>
            <Row>
                {workshops.map((workshop, index) => (
                    <Col key={index} xs={12} md={4} style={{ marginBottom: '20px' }}>
                        <Card className="card-container" onClick={() => handleShow(workshop)}>
                            <Card.Img variant="top" src={workshop.pic} className="rounded-corners" style={{ height: '200px', objectFit: 'cover', borderRadius: '10px', padding: '10px', margin: '0 auto' }} />
                            <Card.Body style={{ background: 'rgba(0,0,0,0.0)' }}>
                                <Card.Title style={{ color: 'white' }}>{workshop.title}</Card.Title> <br />
                                <Card.Text style={{ fontSize: 14 }}><span style={{ color: 'red', fontWeight: 'bold' }}>Language:</span> <span style={{ color: 'white' }}>{workshop.language}</span></Card.Text>
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
                        <p><strong style={{ fontWeight: 'bold', color: 'red', fontSize: 18 }}>Language:</strong> {selectedWorkshop.language}</p>
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

export default UgliestCodePage;
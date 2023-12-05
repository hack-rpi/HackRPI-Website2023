import React, { useState } from 'react';
import { Col, Row, Card, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ericG from '../../../assets/ugliestCodePics/EricG.png';
import workshopTechstack from '../../../assets/workshopPics/techstack.jpeg';
import './style.css';

const UgliestCodePage = () => {
    const [show, setShow] = useState(false);
    const [selectedUgliestCode, setUgliestCode] = useState(null);

    const handleClose = () => setShow(false);

    const handleRedirect = (link) => {
        window.open(link, '_blank'); // Opens the link in a new tab
    };

    const handleShow = (ugliestCode) => {
        setUgliestCode(ugliestCode);
        handleRedirect(ugliestCode.link); // Redirects to the specified link
    };

    const ugliestCode = [
        {
            title: 'Eric G',
            language: 'Python',
            pic: ericG,
            link: 'https://github.com/Ejamesgonz204/EJ-Gonzales---ugliest-code-submission'
        },

        {
            title: 'Professor Callahan',
            language: 'C',
            pic: workshopTechstack,
            link: 'https://github.com/ibara/cpaint/blob/main/cpaint.c'
        },

        {
            title: 'Pratheet J',
            language: 'Python',
            pic: workshopTechstack, 
            link: 'https://github.com/DaCatDude/ugly-submission-pratheet'
        },

        {
            title: 'John S',
            language: 'C',
            pic: workshopTechstack,
            link: 'https://github.com/mrmola/really_ugly_code'
        },

        {
            title: 'Zain A',
            language: 'C++',
            pic: workshopTechstack,
            link: 'https://github.com/ZainAhmad2/UglyCode-'
        },

        {
            title: 'Justin C',
            language: 'Python',
            pic: workshopTechstack,
            link: 'https://github.com/Jae7777/ugliestcodetochangetheworld'
        },

        {
            title: 'Roi N',
            language: 'C++',
            pic: workshopTechstack,
            link: 'https://github.com/rnach1/ugly_code_RoiNach'
        },

        {
            title: 'Dylan R',
            language: 'C++',
            pic: workshopTechstack,
            link: 'https://github.com/dylanrafael05/UglyCode-HackRPIX'

        },

        {
            title: 'William C',
            language: 'HTML',
            pic: workshopTechstack,
            link: 'https://github.com/Iamchwill/ugly/tree/main'
        },

        {
            title: 'Jose I',
            language: 'Python',
            pic: workshopTechstack,
            link: 'https://github.com/JoseIdrovo/uglycode'
        },

        {
            title: 'Sahibjot S',
            language: 'SPL',
            pic: workshopTechstack,
            link: 'https://github.com/stati30241/Ugly-Code/tree/main'
        },

        {
            title: 'Zachary S',
            language: 'Python & Assembly',
            pic: workshopTechstack,
            link: 'https://github.com/LittleSilver33/Circle'
        },

        {
            title: 'unbounder', //cant find their name -- discord name
            language: 'Python',
            pic: workshopTechstack,
            link: 'https://github.com/Unbounder1/uglycodecomp'
        },

        {
            title: 'Ahna S',
            language: 'Python',
            pic: workshopTechstack,
            link: 'https://github.com/ahnashah/Ugliest-Code-Comp'
        },

        {
            title: 'Colton R',
            language: 'C',
            pic: workshopTechstack,
            link: 'https://github.com/c-rit/hackrpixUgliest'
        },

        {
            title: 'Alex K',
            language: 'Python',
            pic: workshopTechstack,
            link: 'https://github.com/AlexK-3141/Ugliest-code-submission-alexk'
        },

        {
            title: 'Momir P',
            language: 'C++',
            pic: workshopTechstack,
            link: 'https://github.com/Momir-Petrovic/UglyCode/tree/main'
        },

        {
            title: 'cbello', // cant find name
            language: 'Scratch',
            pic: workshopTechstack,
            link: 'https://github.com/cbello14/ugly-code'
        },

        {
            title: 'Liam B',
            language: 'BF',
            pic: workshopTechstack,
            link: 'https://github.com/lsbrown4287/uglyCode'
        },

    ];



    return (
        <div id="ugliestCode" className="ugliest-code" style={{ textAlign: 'center', width: '80%', margin: 'auto' }}>
            <h1 style={{ fontFamily: 'Mokoto', fontSize: 46, marginBottom: '20px' }}>
                Ugliest Code Competition!
            </h1>
            <br></br>
            <Row>
                {ugliestCode.map((ugliestCode, index) => (
                    <Col key={index} xs={12} md={4} style={{ marginBottom: '20px' }}>
                        <Card className="card-container" onClick={() => handleShow(ugliestCode)}>
                            <Card.Img variant="top" src={ugliestCode.pic} className="rounded-corners" style={{ height: '200px', objectFit: 'cover', borderRadius: '10px', padding: '10px', margin: '0 auto' }} />
                            <Card.Body style={{ background: 'rgba(0,0,0,0.0)' }}>
                                <Card.Title style={{ color: 'white' }}>{ugliestCode.title}</Card.Title> <br />
                                <Card.Text style={{ fontSize: 14 }}><span style={{ color: 'red', fontWeight: 'bold' }}>Language:</span> <span style={{ color: 'white' }}>{ugliestCode.language}</span></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {selectedUgliestCode && (
                <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
                    <Modal.Header closeButton style={{ background: 'rgba(0,0,0,0.9)', border: 'none' }}>
                        <Modal.Title style={{ color: 'white', fontFamily: 'Roboto', fontSize: 45, textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>{selectedUgliestCode.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ background: 'rgba(0,0,0,0.9)', color: 'black', fontFamily: 'Roboto', fontSize: 16, textAlign: 'center' }}>
                        <p><strong style={{ fontWeight: 'bold', color: 'red', fontSize: 18 }}>Language:</strong> {selectedUgliestCode.language}</p>
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
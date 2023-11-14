import React from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import './style.css';
import Image1 from './../../../assets/HackRPI-Pics/pic1.jpg';
import Image2 from './../../../assets/HackRPI-Pics/pic2.jpg';
import Image3 from './../../../assets/HackRPI-Pics/pic3.jpg';

const OrganizersPage = () => {
    return (
        <div id="members" className="OrganizersPage centeredText">
            <div className="help-organize-section">
                <h1 style={{ fontFamily: 'Mokoto', fontSize: '46px', marginTop: '40px', marginBottom: '20px' }}>
                    Help Organize
                </h1>
            </div>

            {/* Move the button outside the help-organize-section div */}
            <Nav.Link href="https://discord.gg/mjsusWUM">
                <Button variant="outline" className='button' style={{ backgroundColor: '#910307', color: 'white', marginBottom: '20px', }}>
                    Join Now!
                </Button>
            </Nav.Link>

            <p style={{ fontSize: '19px', textAlign: 'center', lineHeight: '1.6', padding: '0 10px' }}>
                Join our dynamic team of motivated RPI students on a mission to organize 
                the next incredible HackRPI! As passionate computer science enthusiasts, 
                we're committed to crafting an unforgettable event. With a diverse team 
                spanning every grade level, we collaboratively plan the hackathon and secure 
                sponsors to make it happen. Our goal is to provide a platform where attendees can hone their 
                skills, explore cutting-edge technologies, and transform their interests and 
                visions into tangible opportunities.Join us, and let's code the future together!
            </p>

            <Row className="justify-content-md-center">
                <Col md={4}>
                    <img style = {{height: "400px", width: "500px" }} src={Image1} />
                </Col>
                <Col md={4}>
                    <img style = {{height: "400px", width: "500px" }} src={Image2} />
                </Col>
                <Col md={4}>
                    <img style = {{height: "400px", width: "500px" }} src={Image3} />
                </Col>
            </Row>

        </div>
    );
};


export default OrganizersPage;
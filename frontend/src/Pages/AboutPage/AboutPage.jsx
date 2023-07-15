import React from 'react';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';

// import './styles.css';

const AboutPage = () => {
  return (
    <div style={{ textAlign: 'center', width: "80%", margin: 'auto'}}>
      <style>{`
                h1 {
                    font-family: Mokoto;
                    color: white;
                }

                p {
                    color: white;
                    font-family: Poppins Light;
                }

                .myClass {
                    color: white;
                    font-family: Poppins Light;
                    font-size: 20px;
                    padding-top: 10px;
                    padding-bottom: 30px;
                }

                  .tab-content {
                    display: flex;
                  }
                  
                  .tab-content > .tab-pane {
                    display: block; /* undo "display: none;" */
                    visibility: hidden;
                    margin-right: -100%;
                    width: 100%;
                  }
                  
                  .tab-content > .active {
                    visibility: visible;
                  }
                

                .nav-link-custom {
                    color: #910307;
                    font-family: Poppins;
                    font-weight: bold;
                }
                    .nav-link-custom:active,
                    .nav-link-custom:focus,
                    .nav-link-custom:hover {
                        color: white;
                    }
                
                .about-info {
                    padding-left: 15px;
                    padding-right: 40px;
                    align-items: center;
                    justify-content: center;
                }
                    .about-info h2 {
                        font-family: Poppins;
                        color: white;    
                        font-size: 20px;
                        line-height: 10px;
                    }
                    .about-info p {
                        line-height: 20px;
                    }

                .circle {
                    background-color: #910307;
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;

                }

                .button {
                  position: relative;
                  font-family: Poppins;
                  // font-weight: 500;
                  font-size: 18px;
                  letter-spacing: 0.05em;
                  border-radius: 0.8em;
                  border: none;
                  background: #910307;
                  color: white;
                  overflow: hidden;
                }

                  .button:hover {
                    background: linear-gradient(to right, #910307, #d50110, #560002);
                    // transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
                  }
                
                @media screen and (max-width: 980px) {
                  .title {
                    display: none;
                  }
                }
                
            `}</style>

      <h1 className="title" style={{ fontFamily: 'Mokoto', fontSize: 46, height: 35 }}>
        HackRPI X
      </h1>
      <Tab.Container defaultActiveKey="one" style={{paddingBottom: 30}}>
        <Col>
          <Row>
            <Nav
              variant="pills-primary"
              className="flex-row justify-content-center"
              style={{ height: 30 }}
            >
              <Nav.Item>
                <Nav.Link className="nav-link-custom" eventKey="one">
                  the event
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="nav-link-custom" eventKey="two">
                  the team
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Row>

          <Tab.Content className="myClass">
            <Tab.Pane eventKey="one">
              HackRPI X is the 10th annual intercollegiate hackathon hosted by
              RPI for students not only from RPI but also from all around the
              world. Get swag and free food as you compete for exciting prizes!
              With a broad range of workshops and mentors on-site, there’s no
              experience necessary to attend. Hackers will also have the
              opportunity to network with our fantastic sponsors from the
              companies that make our event possible. This year's theme,{' '}
              <span style={{ fontFamily: 'Poppins', fontWeight: "bold", color: '#910307' }}>
                Change the World
              </span>{' '}
              is an ode to a decade inspring students and HackRPI!
              <br></br>
              <br></br>Come join us this coming November 4-5, 2023 to hack,
              learn, and meet other poeple!{' '}
            </Tab.Pane>
            <Tab.Pane eventKey="two">
              We are a motivated team of RPI students who share a passion for
              exploring the bounds of computer science and a commitment to
              organizing a fantastic event. Our team of students from every
              grade level works together to plan the hackathon and find sponsors
              to bring the event together. <br></br> <br></br>
              We believe that HackRPI is a vital part of our school. Our goal is
              to inspire and challenge innovators, creators, developers, and
              entrepreneurs in New York’s Tech Valley and beyond. We help
              attendees develop their skills, explore new technologies, and turn
              their interests and visions into opportunities. Staying true to
              our slogan “Why Not Code the World?"
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Tab.Container>

      <div
        style={{
          display: 'flex',
          textAlign: 'left',
          paddingBottom: 125,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="circle"></div>
        <div className="about-info">
          <h2>DATE</h2>
          <p>November 4-5, 2023</p>
        </div>

        <div className="circle"></div>
        <div className="about-info">
          <h2>LOCATION</h2>
          <p>
            {' '}
            Rensselear Polytechnic Institute (RPI), NY <br></br>
            Darrin Communications Center
          </p>
        </div>

        <div>
          <Nav.Link href="https://organize.mlh.io/participants/events/9892-hackrpi">
            <Button
              variant="outline" className='button'
              style={{ backgroundColor: '#910307', color: 'white' }}
            >
              Register Now!
            </Button>
          </Nav.Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

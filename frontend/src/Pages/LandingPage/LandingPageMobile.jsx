import { useState, useRef, useEffect } from 'react';
// import Globe from 'react-globe.gl';
import data from '../../../assets/data.geojson';
// import globeimage from '../../../assets/earth-dark.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import transparentLogo from '../../../assets/logo_transparent.png';

// import '../../../src/fonts.css';
import GlitchEffect from '../../Components/GlitchEffect.jsx';

const LandingPageMobile = () => {
  return (
    <div
      style={{
        backgroundColor: '#191919',
        // display: 'flex',
        content: 'center',
        width: 'auto',
        // height: 'fit-content',
        overscrollBehavior: 'none',
        overflow: 'hidden',
        /* position: 'fixed', */ // Remove this line
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <div style={{display:'flex',         justifyContent: 'center',
        textAlign: 'center',}}>
      <div>
        <img
          src={transparentLogo}
          width="450"
          height="420"

          style={{opacity: "0.2",
            position: "relative",
            right: "130px",
            top: "-45px"
        
          }}
          />
      </div>

      {/* text on the left side of the screen */}
      <Container className='mobileLanding'
        style={{
          color: 'white',
          textShadow: '2px 2px 2px rgba(0, 0, 0, 0)',
          paddingTop: 30,
          width: '100%',
          // margin: '0 auto', // Add this line to center the content
          position: "absolute"
        }}
      >
        {/* <Row style={{ justifyContent: 'center' }}> */}
          {' '}
          {/* Added: Center the content horizontally */}
          {/* <Col> */}
            {/* globe on the right side of the screen */}

            <h1 style={{ whiteSpace: 'nowrap' }}>
              <GlitchEffect
                style={{
                  fontFamily: 'Mokoto',
                  fontSize: "13vw",
                  lineHeight: '100%',
                  paddingTop: 97
                }}
              >
                HACKRPI X
              </GlitchEffect>
            </h1>
            {/* both have glitch or just one? */}
            <h2
              style={{
                fontFamily: 'Poppins ExtraLight',
                lineHeight: '30%',
                fontSize: '5vw',

                paddingBottom: 30,
              }}
            >
              November 4-5
            </h2>

            <div>
              <Nav.Link href="https://organize.mlh.io/participants/events/9892-hackrpi">
                <Button
                  variant="outline" className='button'
                  style={{ backgroundColor: '#910307', color: 'white', fontFamily: 'Poppins Light', fontSize: 17 }}
                >
                  Register Now!
                </Button>
              </Nav.Link>

              <Nav.Link href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                        style={{ fontFamily: "Poppins ExtraLight", fontSize: 15}}
              >
                MLH Code of Conduct
              </Nav.Link>
            </div>
                      {/* </Col>
        </Row> */}
      </Container>{' '}
      </div>
      
      <div>
      <p style={{paddingTop: "3%", paddingRight: "8%", paddingLeft: "8%", marginTop: "-12vh"}}>
              HackRPI X is RPI's 10th annual hackathon hosted for students not only from RPI but also from all around the
              world! Get swag and free food as you compete for exciting prizes!
              With a broad range of workshops and mentors on-site, there’s no
              experience necessary to attend. Hackers will also have the
              opportunity to network with our fantastic sponsors from the
              companies that make our event possible.
              <br></br>
              <br></br>
              This year's theme,{' '}
              <span style={{ fontFamily: 'Poppins', fontWeight: "bold", color: '#910307' }}>
                Change the World
              </span>{' '}
              is an ode to a decade inspring students and HackRPI!
      </p>
      </div>


    </div>
  );
};

export default LandingPageMobile;
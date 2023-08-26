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
import Timer from '../../Components/Timer/Timer.jsx';

const LandingPageMobile = () => {
  return (
    <div className='landingPageMobile'>
      <div className='hero'>

        <img src={transparentLogo} />

      {/* text on the left side of the screen */}
      <Container >
            <h1>
              <GlitchEffect >
                HACKRPI X
              </GlitchEffect>
            </h1>
            {/* both have glitch or just one? */}
            <h2 >
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
  
      </Container>{' '}
    </div>
    </div>
  );
};

export default LandingPageMobile;
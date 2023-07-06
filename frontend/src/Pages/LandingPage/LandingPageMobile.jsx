import { useState, useRef, useEffect } from 'react';
// import Globe from 'react-globe.gl';
import data from '../../../assets/data.geojson';
// import globeimage from '../../../assets/earth-dark.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../src/fonts.css';
import GlitchEffect from '../../Components/GlitchEffect.jsx';

const LandingPageMobile = () => {
  const globeEl = useRef();
  const [countries, setCountries] = useState({ features: [] });
  const [altitude, setAltitude] = useState(0.1);
  const [transitionDuration, setTransitionDuration] = useState(1000);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // load data
    fetch(data)
      .then((res) => res.json())
      .then((countries) => {
        setCountries(countries);

        setTimeout(() => {
          setTransitionDuration(4000);
          setAltitude(
            () => (feat) =>
              Math.max(0.1, (Math.sqrt(+feat.properties.POP_EST) * 3e-5) / 3),
          );
        }, 3500);
      });
  }, []);

  //   useEffect(() => {
  //     // Auto-rotate
  //     globeEl.current.controls().autoRotate = true;
  //     globeEl.current.controls().autoRotateSpeed = 0.3;
  //     // disable zoom
  //     globeEl.current.controls().enableZoom = false;

  //     globeEl.current.pointOfView({ altitude: 4 }, 5000);
  //   }, []);

  const handleResize = () => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#191919',
        display: 'flex',
        content: 'center',
        width: 'auto',
        height: 'auto',
        overscrollBehavior: 'none',
        overflow: 'hidden',
        /* position: 'fixed', */ // Remove this line
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      {/* text on the left side of the screen */}
      <Container
        style={{
          color: 'white',
          textShadow: '2px 2px 2px rgba(0, 0, 0, 0)',
          //   play with padding num a bit
          paddingTop: 30,
          /* postiion: 'absolute', */ // Remove this line
          width: '100%',
          margin: '0 auto', // Add this line to center the content
        }}
      >
        <Row style={{ justifyContent: 'center' }}>
          {' '}
          {/* Added: Center the content horizontally */}
          <Col>
            {/* globe on the right side of the screen */}

            {/* <Globe
              style={{ position: 'relative' }}
              ref={globeEl}
              globeImageUrl={globeimage}
              width={windowDimensions.width / 2} // Update this line
              height={windowDimensions.height / 2}
              backgroundColor="#191919"
              polygonsData={countries.features.filter(
                (d) => d.properties.ISO_A2 !== 'AQ',
              )}
              polygonAltitude={altitude}
              polygonCapColor={() => 'rgba(150, 0, 0, 0.8)'}
              polygonSideColor={() => 'rgba(255, 255, 255, 0.10)'}
              polygonLabel={({ properties: d }) => `
          <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
          Population: <i>${Math.round(+d.POP_EST / 1e4) / 1e2}M</i>
        `}
              polygonsTransitionDuration={transitionDuration}
            /> */}

            <h1 style={{ whiteSpace: 'nowrap' }}>
              <GlitchEffect
                style={{
                  fontFamily: 'Mokoto',
                  // fontSize: 100,
                  lineHeight: '130%',
                }}
              >
                HACKRPI X
              </GlitchEffect>
            </h1>
            {/* both have glitch or just one? */}
            <h2
              style={{
                fontFamily: 'Agrandir',
                lineHeight: '30%',
                // fontSize: 40,
              }}
            >
              November 4-5
            </h2>

            {/* <p
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'light',
                fontSize: 17,
                lineHeight: 1.5,
                paddingTop: 15,

                paddingLeft: '8.2vw',
              }}
            >
              HackRPl X is the 10th annual intercollegiate hackathon at
              Rensselaer Polytechnic Institute, completely organized by RPI
              students! We welcome everyone to travel to RPI for our completely
              in-person 24 hour Hackathon. Get swag and free food as you compete
              for exciting prizes! With a broad range of workshops and mentors
              on-site, there’s no experience necessary to attend. Hackers will
              also have the opportunity to network with our fantastic sponsors
              from the companies that make our event possible.
            </p> */}

          </Col>
        </Row>
      </Container>{' '}
    </div>
  );
};

export default LandingPageMobile;

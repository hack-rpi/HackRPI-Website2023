import { useState, useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import data from '../../../assets/data.geojson';
import globeimage from '../../../assets/earth-dark.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GlitchEffect from '../../Components/GlitchEffect.jsx';
import Timer from '../../Components/Timer/Timer.jsx';

const LandingPage = () => {
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

  useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.3;
    // disable zoom
    globeEl.current.controls().enableZoom = false;

    globeEl.current.pointOfView({ altitude: 4 }, 5000);
  }, []);

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
    <div className='landingPage'>
      {/* <Timer /> */}

      <div className="globe" style={{ width: '50%', paddingLeft: '55%' }}>
        <Globe
          style={{ position: 'fixed' }}
          ref={globeEl}
          globeImageUrl={globeimage}
          width={windowDimensions.width / 2} // Update this line
          height={windowDimensions.height}
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
        />
      </div>

      {/* text on the left side of the screen */}
      <Container>
        <Row>
            <h1>
              <GlitchEffect>
                HACKRPI X
              </GlitchEffect>
            </h1>
        </Row>

        <Row>
            <h2>
              November 4-5
            </h2>
        </Row>

         {/* <Timer /> */}
      </Container>
      
    </div>
  );
};

export default LandingPage;

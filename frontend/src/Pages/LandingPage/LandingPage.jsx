import {useState, useRef, useEffect} from 'react';
import Globe from 'react-globe.gl';
import data from "../../../assets/data.geojson";
import globeimage from "../../../assets/earth-dark.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const LandingPage = () => {
  const globeEl = useRef();
  const [countries, setCountries] = useState({ features: []});
  const [altitude, setAltitude] = useState(0.1);
  const [transitionDuration, setTransitionDuration] = useState(1000);
  const [windowDimensions, setWindowDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    // load data
    fetch(data).then(res => res.json())
      .then(countries=> {
        setCountries(countries);

        setTimeout(() => {
          setTransitionDuration(4000);
          setAltitude(() => feat => Math.max(0.1, (Math.sqrt(+feat.properties.POP_EST) * 3e-5)/3));
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
    setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div style={{position: "relative", backgroundColor: "black", height: "100vh"}} id="home">
      <div style={{ position: "absolute", right: 0, width: "50%", height: "100%" }}> {/* Add this div */}
      <Globe
        ref={globeEl}
        globeImageUrl={globeimage}
        width={windowDimensions.width / 1.85} // Update this line
        height={windowDimensions.height}
        backgroundColor="black"
        polygonsData={countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')}
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
        <Container style={{position: "absolute", top: "10%", left: "20%", transform: "translate(-50%, -50%)", width: "50%"}}>
        <h1 style={{
          fontFamily: "Orbitron, sans-serif", 
          fontWeight: "500",
          color: "white", 
          textAlign: "center", 
          fontSize: "3rem",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)"
        }}>HackRPI 2023</h1>
      </Container>
    <br/>
    <Container style={{position: "absolute", top: "25%", left: "20%", transform: "translate(-50%, -50%)",width:"50%"}}>
        <h1 style={{
          fontFamily: "Orbitron, sans-serif", 
          fontWeight: "400",
          color: "white", 
          textAlign: "center", 
          fontSize: "1.5rem",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)"
        }}>Change the World with Us</h1>
      </Container>
    <Container style={{position: "absolute", top: "18.5%", left: "20%", transform: "translate(-50%, -50%)" , width:"50%"}}>
        <h1 style={{
          fontFamily: "Orbitron, sans-serif", 
          fontWeight: "400",
          color: "white", 
          textAlign: "center", 
          fontSize: "1.5rem",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)"
        }}>November 4-5</h1>
      </Container>
    <Container style={{position: "absolute", top: "45%", left: "20%", transform: "translate(-50%, -50%)", width:"50%"}}>
        <h1 style={{
          fontFamily: "Orbitron, sans-serif", 
          fontWeight: "400",
          color: "white", 
          textAlign: "center", 
          fontSize: "1.5rem",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)"
        }}>More Details Coming Soon</h1>
      </Container>
    </div>
  );
};

export default LandingPage;



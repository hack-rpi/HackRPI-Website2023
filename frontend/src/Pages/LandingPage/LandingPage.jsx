import {useState,useRef,useEffect} from 'react';
import Globe from 'react-globe.gl';
import data from "../../../assets/data.geojson";
import globeimage from "../../../assets/earth-dark.jpg";
import Container from 'react-bootstrap/Container';
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      console.log("HI")
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
const LandingPage = () => {
    const globeEl = useRef();
    const [countries, setCountries] = useState({ features: []});
    const [altitude, setAltitude] = useState(0.1);
    const [transitionDuration, setTransitionDuration] = useState(1000);
    const { height2, width2 } = useWindowDimensions();

    useEffect(() => {
      // load data
      fetch(data).then(res => res.json())
        .then(countries=> {
          setCountries(countries);

          setTimeout(() => {
            setTransitionDuration(4000);
            setAltitude(() => feat => Math.max(0.1, (Math.sqrt(+feat.properties.POP_EST) * 7e-5)/3));
          }, 3500);
        });
    }, []);

    useEffect(() => {
      // Auto-rotate
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.3;

      globeEl.current.pointOfView({ altitude: 4 }, 5000);
    }, []);

    return <Globe
      ref={globeEl}
      globeImageUrl={globeimage}
      width={width2-20}
      height={height2}
      polygonsData={countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')}
      polygonAltitude={altitude}
      polygonCapColor={() => 'rgba(200, 0, 0, 0.6)'}
      polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}
      polygonLabel={({ properties: d }) => `
        <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
        Population: <i>${Math.round(+d.POP_EST / 1e4) / 1e2}M</i>
      `}
      polygonsTransitionDuration={transitionDuration}
    />;
  };

export default LandingPage;

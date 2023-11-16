import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './ThankYouPage.css';
import '../../fonts.css'
import Globe from 'react-globe.gl';
import data from '../../../assets/data.geojson';
import globeimage from '../../../assets/earth-dark.jpg';

const ThankYouPage = () => {
  const globeEl = useRef();
  const [countries, setCountries] = useState({ features: []});
  const [altitude, setAltitude] = useState(0.03);
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
      });
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

  const transitionSpeed = 3000;
  let initialCenter = { latitude: 23.0, longitude: -80.0, altitude: 1.7 };

  const mapCenter = {
    lat: initialCenter.latitude,
    lng: initialCenter.longitude,
    altitude: initialCenter.altitude
  };

  let globeWidth = windowDimensions.width * 1.75;
  let globeHeight = windowDimensions.height * 1.75;


  if (windowDimensions.width <= 425) {
    mapCenter.altitude = 1.9;
    globeWidth = windowDimensions.width;
    globeHeight = windowDimensions.height;
    console.log('globe is min size')
  } else if (windowDimensions.width <= 653) {
    globeWidth = windowDimensions.width;
    globeHeight = windowDimensions.height;
    console.log('globe is proportionate size')
  } else if (windowDimensions.width <= 768) {
    globeWidth = windowDimensions.width * 1.3;
    globeHeight = windowDimensions.height * 1.3;
    console.log('globe is reduced size')
  }

  console.log('window width: ' + windowDimensions.width + '| window height: ' +  windowDimensions.height)
  console.log('globe width: ' + globeWidth + '| globe height: ' +  globeHeight);

  useEffect(() => {

    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.5;
    globeEl.current.controls().enableZoom = false;

    globeEl.current.pointOfView(mapCenter, transitionSpeed);
  }, []);

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', width: '100%', height: '100%', position: 'fixed'}}>

      <h1 id='thankyou-header' className='header'>THANK YOU</h1>
      <h1 id='people-header'  className='header'>HACKERS</h1>
      <h2 id='sub-header'>for
        <a id='sub-header-highlight' style={{ fontFamily: 'Mokoto', color: '#910307' }}> Changing The World </a>
        with us!
      </h2>

      <div id='button-container'
           style={{
             display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: '5',
              position: 'absolute',
      }}>
        <LinkContainer to="/winners">
          <Nav.Link id='winners-button' className="button">
            See Our Winners!
          </Nav.Link>
        </LinkContainer>
        <div id='link-button-container' style={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LinkContainer to="/home">
            <Nav.Link className="button">
              Back To HackRPI X
            </Nav.Link>
          </LinkContainer>
            <Nav.Link href='https://tinyurl.com/hackrpi-donation' className="button">
              Support Our Next Event
            </Nav.Link>
        </div>
      </div>
      <div id="globe" style={{width: 'auto', height: 'auto', position: 'absolute' }}>
        <Globe id='earth'
               ref={globeEl}
               width={globeWidth}
               height={globeHeight}
          // showAtmosphere={true}
               atmosphereColor={'rgb(255, 255, 255)'}
               globeImageUrl={globeimage}
               backgroundColor={'rgb(255,255,255, 0)'}
               polygonsData={countries.features.filter((d) => d.properties.ISO_A2 !== 'AQ')}
               polygonAltitude={altitude}
               polygonCapColor={() => 'rgba(145,3,7,.8)'}
               polygonSideColor={() => 'rgba(255, 255, 255,0.10)'}
               polygonsTransitionDuration={500}
        />
      </div>
    </div>
  );
};

export default ThankYouPage;

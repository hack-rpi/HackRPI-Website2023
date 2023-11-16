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

  useEffect(() => {

    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.5;
    globeEl.current.controls().enableZoom = false;

    globeEl.current.pointOfView(mapCenter, transitionSpeed);
  }, []);

  let globeWidth = windowDimensions.width * 1.75;
  let globeHeight = windowDimensions.height * 1.75;

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', width: '100%', height: '100%', position: 'fixed'}}>
      <div className="thank-you-page text-center">
        {/*<h1>*/}
        {/*<div className="thankyou-text">*/}
        {/*  Thank you <br />*/}
        {/*  </div>*/}
        {/*  <span className="small-text">*/}
        {/*    for joining us at <br /> HACKRPI X!*/}
        {/*  </span>*/}
        {/*</h1>*/}

        {/*font-family: Poppins Light;*/}
        {/*font-size: 50px;*/}

      </div>
      <h1 style={{ margin: '30px 0 -35px 0', fontFamily: 'Mokoto', fontSize: '210px'}}>THANK YOU</h1>
      <h1 style={{ fontFamily: 'Mokoto', color: '#910307' ,fontSize: '110px', margin: '0 0 -15px 0' }}>HACKERS</h1>
      <h2 style={{ fontFamily: 'Poppins', fontSize: '38px', marginTop: '37px' }}>for
        <a style={{ fontFamily: 'Mokoto', fontSize: '42px', color: '#910307' }}> Changing The World </a>
        with us!
      </h2>
      {/*<div className="button-container">*/}
      {/*  <LinkContainer to="/home">*/}
      {/*    <Nav.Link className="button">*/}
      {/*      Back to HackRPI X*/}
      {/*    </Nav.Link>*/}
      {/*  </LinkContainer>*/}
      {/*</div>*/}
      {/*<div className="centered-button-container">*/}
      {/*  <LinkContainer to="/winners">*/}
      {/*    <Nav.Link className="button">*/}
      {/*      Check out our Winners!*/}
      {/*    </Nav.Link>*/}
      {/*  </LinkContainer>*/}
      {/*</div>*/}
      <div id='button-container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', zIndex: '5', marginTop: '113px', rowGap: '35px'}}>
        <LinkContainer to="/winners">
          <Nav.Link id='winners-button' className="button">
            Our Winners
          </Nav.Link>
        </LinkContainer>
        <div id='link-button-container' style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', columnGap: '20px'}}>
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
      <div className="globe" style={{width: 'auto', height: 'auto',
        position: 'absolute', bottom: '0', transform: 'translate(0%, 66%)'
      }}>
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

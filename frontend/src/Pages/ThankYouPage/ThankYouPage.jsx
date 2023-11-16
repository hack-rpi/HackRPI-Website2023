import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './ThankYouPage.css';
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

  let globeWidth = windowDimensions.width * 1.6;
  let globeHeight = windowDimensions.height * 1.6;

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', position: 'fixed'}}>
      <div className="thank-you-page text-center">
        {/*<h1>*/}
        {/*<div className="thankyou-text">*/}
        {/*  Thank you <br />*/}
        {/*  </div>*/}
        {/*  <span className="small-text">*/}
        {/*    for joining us at <br /> HACKRPI X!*/}
        {/*  </span>*/}
        {/*</h1>*/}
      </div>
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
      <div className="globe" style={{width: 'auto', height: 'auto', position: 'absolute', bottom: '0', transform: 'translate(0%, 66%)',
        overflow:'hidden', zIndex: '1'}}>
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
               polygonCapColor={() => 'rgba(150, 0, 0, 0.8)'}
               polygonSideColor={() => 'rgba(255, 255, 255, 0.10)'}
               polygonsTransitionDuration={500}
        />
      </div>
    </div>
  );
};

export default ThankYouPage;

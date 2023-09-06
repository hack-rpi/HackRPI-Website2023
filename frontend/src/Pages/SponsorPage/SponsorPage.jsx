import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import sponsorsJson from '../../../assets/sponsors/sponsors.json';
import Image from 'react-bootstrap/Image';

const SponsorPage = () => {
  const [sponsors, setSponsors] = useState(sponsorsJson);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          justifyContent: 'start',
          alignItems: 'center',
          height: 'fit-content',
        }}
      >
        <p style={{
            fontFamily: 'Mokoto',
            color: '#FFFFFF',
            textAlign: 'center',
          }} > Hello World </p>
        <h3
          style={{
            fontFamily: 'Mokoto',
            color: '#FFFFFF',
            textAlign: 'center',
          }}
        >
          Thank you to our sponsors that make HackRPI possible!
        </h3>

        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          style={{
            marginBottom: '5rem',
            paddingBottom: '2.5rem',
            backgroundColor: '#222222',
            borderRadius: '15px',
          }}
        >
          {sponsors.sponsors.map((sponsor) => (
            <Carousel.Item >
              <a
                href={sponsor.url}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src={sponsor.logoPath}
                  style={{ width: '50%', marginTop: '2.5rem' }}
                />
                {/* <Carousel.Caption >
                  <p>{sponsor.name}</p>
                </Carousel.Caption> */}
              </a>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default SponsorPage;

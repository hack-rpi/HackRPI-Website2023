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
            marginBottom: '.5rem',
            paddingBottom: '2.5rem',
            backgroundColor: '#222222',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
            borderBottomLeftRadius: '5px',
            borderBottomRightRadius: '5px',
            width: '91.667%',
            height: '350px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {sponsors.sponsors.map((sponsor) => (
            <Carousel.Item>
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
                  style={{
                    maxHeight: '300px',
                    marginTop: '2.5rem',
                    maxWidth: '82.5%',
                  }}
                  alt={sponsor}
                />
              </a>
            </Carousel.Item>
          ))}
        </Carousel>
        <h2
          style={{
            color: '#FFFFFF',
            marginBottom: '1rem',
            padding: '4px',
            fontFamily: 'Poppins Light',
            backgroundColor: '#222222',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            borderBottomLeftRadius: '15px',
            borderBottomRightRadius: '15px',
            width: '91.667%',
            textAlign: 'center',
          }}
        >
          {sponsors.sponsors[index].name}
        </h2>
      </div>
    </>
  );
};

export default SponsorPage;

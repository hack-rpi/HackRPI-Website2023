import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import sponsorsJson from '../../../assets/sponsors/sponsors.json';
import Image from 'react-bootstrap/Image';

const SponsorPage = () => {
  const [sponsorGroups, setSponsors] = useState(sponsorsJson);

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

        {/*<Carousel
          controls={false}
          indicators={false}
          interval={7500}
          activeIndex={index}
          onSelect={handleSelect}
          style={{
            marginBottom: '.5rem',
            backgroundColor: '#222222',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
            borderBottomLeftRadius: '5px',
            borderBottomRightRadius: '5px',
            width: '91.667%',
            height: 'fit-content',
          }}
        >
          {sponsorGroups.sponsorGroups.map((sponsorGroup, indx) => (
            <Carousel.Item key={indx}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    marginBottom: '1rem',
                    marginTop: '1rem',
                  }}
                >
                  {sponsorGroup.length >= 1 && (
                    <a
                      href={sponsorGroup[0].url}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '50%',
                      }}
                    >
                      <Image
                        src={sponsorGroup[0].logoPath}
                        style={{
                          maxHeight: '150px',
                          maxWidth: '80%',
                        }}
                        alt={sponsorGroup[0].name}
                      />
                    </a>
                  )}
                  {sponsorGroup.length >= 3 && (
                    <a
                      href={sponsorGroup[1].url}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '50%',
                      }}
                    >
                      <Image
                        src={sponsorGroup[1].logoPath}
                        style={{
                          maxHeight: '150px',
                          maxWidth: '80%',
                        }}
                        alt={sponsorGroup[1].name}
                      />
                    </a>
                  )}
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    marginBottom: '1rem',
                    marginTop: '1rem',
                  }}
                >
                  {sponsorGroup.length >= 3 && (
                    <a
                      href={sponsorGroup[2].url}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '50%',
                      }}
                    >
                      <Image
                        src={sponsorGroup[2].logoPath}
                        style={{
                          maxHeight: '150px',
                          maxWidth: '80%',
                        }}
                        alt={sponsorGroup[2].name}
                      />
                    </a>
                  )}

                  {sponsorGroup.length >= 4 && (
                    <a
                      href={sponsorGroup[3].url}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '50%',
                      }}
                    >
                      <Image
                        src={sponsorGroup[3].logoPath}
                        style={{
                          maxHeight: '150px',
                          maxWidth: '80%',
                        }}
                        alt={sponsorGroup[3].name}
                      />
                    </a>
                  )}
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>*/}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            backgroundColor: '#222222',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            borderBottomLeftRadius: '15px',
            borderBottomRightRadius: '15px',
            width: '91.667%',
            height: 'fit-content',
            marginBottom: '2rem',
          }}
        >
          {sponsorGroups.sponsorGroups[index].map((sponsor, indx) => {
            return (
              <a href={sponsor.url} style={{ textDecoration: 'none' }} key={indx}>
                <h2
                  style={{
                    color: '#FFFFFF',
                    marginTop: '10px',
                    padding: '4px',
                    fontFamily: 'Poppins Light',
                    textAlign: 'center',
                  }}
                >
                  {sponsor.name}
                </h2>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SponsorPage;

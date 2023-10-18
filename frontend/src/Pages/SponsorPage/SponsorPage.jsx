import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import sponsorsJson from '../../../assets/sponsors/sponsors.json';
import Image from 'react-bootstrap/Image';

const SponsorPage = () => {
  const [sponsorGroups] = useState(sponsorsJson);
  
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
          background: 'linear-gradient(var(--red), var(--black))'
        }}
      >
        <h2
          style={{
            fontFamily: 'Mokoto',
            color: '#FFFFFF',
            textAlign: 'center'
          }}
            className="my-5"
        >
          Thank you to our sponsors that make HackRPI possible!
        </h2>
        
        {sponsorGroups.sponsorGroups.map((tempSponsorGroup, indx) => (
            <div className="container" key={"sponsorGroup"+indx}>
              <div className="row g-2">
                <h3 className="mokoto tierHeader">Tier {indx+1}</h3>
                {tempSponsorGroup.map((sponsorGroup, innerIndx) => (
                  <div className="sponsor col-md-3 d-flex mb-5" key={"sponsorGroup"+indx+"sponsor"+innerIndx}>
                    <a href={sponsorGroup.url} target="_blank" className="rounded px-3">
                          <div className="d-flex flex-column align-items-center justify-content-center innerSponsor">
                            <img src={sponsorGroup.logoPath} className="img-fluid rounded"  alt={sponsorGroup.name}/>
                        </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default SponsorPage;

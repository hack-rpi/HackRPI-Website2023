import React, { useState } from 'react';
import sponsorsJson from '../../../assets/sponsors/sponsors.json';

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
          background: `linear-gradient(var(--black), #600000 20%, #600000, var(--black))`,
        }}
      >
        <h2
          style={{
            fontFamily: 'Mokoto',
            color: '#FFFFFF',
            textAlign: 'center',
          }}
          className="my-5"
        >
          Thank you to our sponsors that make HackRPI possible!
        </h2>

        {sponsorGroups.sponsorGroups.map((sponsorGroup, indx) => {
          const tierList = [
            'Obsidian',
            'Gold',
            'Silver',
            'Bronze',
            'Collaborators',
          ];
          return (
            <div className="container" key={'sponsorGroup' + indx}>
              <h3 className="mokoto tierHeader" style={{ margin: '20px 0' }}>
                {tierList[indx]}
              </h3>{' '}
              {/* Add margin to tier name */}
              <div className="d-flex justify-content-center flex-wrap">
                {tierList[indx] === 'Obsidian'
                  ? sponsorGroup
                      .slice()
                      .reverse()
                      .map((sponsor, innerIndx) => {
                        let img;
                        if (sponsor.webpack_bundled === true) {
                          img = require(
                            `../../../assets/sponsors/sponsor_logos/${sponsor.logoPath}`,
                          );
                        }

                        return (
                          <div
                            className="sponsor col-md-3 d-flex mb-5"
                            key={'sponsorGroup' + indx + 'sponsor' + innerIndx}
                          >
                            <a
                              href={sponsor.url}
                              target="_blank"
                              className="rounded px-3"
                            >
                              <div
                                className="d-flex flex-column align-items-center justify-content-center innerSponsor"
                                style={{ margin: '10px' }}
                              >
                                {/* Add margin to companies */}
                                <img
                                  src={
                                    sponsor.webpack_bundled === true
                                      ? img
                                      : sponsor.logoPath
                                  }
                                  className="img-fluid rounded mw-100 mh-100"
                                  alt={sponsor.name}
                                />
                              </div>
                            </a>
                          </div>
                        );
                      })
                  : sponsorGroup.map((sponsor, innerIndx) => {
                      let img;
                      if (sponsor.webpack_bundled === true) {
                        img = require(
                          `../../../assets/sponsors/sponsor_logos/${sponsor.logoPath}`,
                        );
                      }

                      return (
                        <div
                          className="sponsor col-md-3 d-flex mb-5"
                          key={'sponsorGroup' + indx + 'sponsor' + innerIndx}
                        >
                          <a
                            href={sponsor.url}
                            target="_blank"
                            className="rounded px-3"
                          >
                            <div
                              className="d-flex flex-column align-items-center justify-content-center innerSponsor"
                              style={{ margin: '10px' }}
                            >
                              {/* Add margin to companies */}
                              <img
                                src={
																	sponsor.webpack_bundled === true
																		? img
																		: sponsor.logoPath
																}
                                className="img-fluid rounded mw-100 mh-100"
                                alt={sponsor.name}
                              />
                            </div>
                          </a>
                        </div>
                      );
                    })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SponsorPage;

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
          background: `linear-gradient(var(--black), #700000 50%, #700000, var(--black))`,
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

        {sponsorGroups.sponsorGroups.map((tempSponsorGroup, indx) => {
          const tierList = ["Obsidian", "Gold", "Silver", "Bronze", "Collaborators"];
          return (
            <div className="container" key={"sponsorGroup" + indx}>
              <h3 className="mokoto tierHeader">{tierList[indx]}</h3>
              <div className="d-flex justify-content-center flex-wrap">
                {tierList[indx] === "Obsidian"
                  ? tempSponsorGroup.slice().reverse().map((sponsorGroup, innerIndx) => (
                      <div className="sponsor col-md-3 d-flex mb-5" key={"sponsorGroup" + indx + "sponsor" + innerIndx}>
                        <a href={sponsorGroup.url} target="_blank" className="rounded px-3">
                          <div className="d-flex flex-column align-items-center justify-content-center innerSponsor">
                            <img src={sponsorGroup.logoPath} className="img-fluid rounded mw-100 mh-100" alt={sponsorGroup.name} />
                          </div>
                        </a>
                      </div>
                    ))
                  : tempSponsorGroup.map((sponsorGroup, innerIndx) => (
                      <div className="sponsor col-md-3 d-flex mb-5" key={"sponsorGroup" + indx + "sponsor" + innerIndx}>
                        <a href={sponsorGroup.url} target="_blank" className="rounded px-3">
                          <div className="d-flex flex-column align-items-center justify-content-center innerSponsor">
                            <img src={sponsorGroup.logoPath} className="img-fluid rounded mw-100 mh-100" alt={sponsorGroup.name} />
                          </div>
                        </a>
                      </div>
                    ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SponsorPage;

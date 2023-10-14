  import React from 'react';
  import Col from 'react-bootstrap/Col';
  import Nav from 'react-bootstrap/Nav';
  import Row from 'react-bootstrap/Row';
  import Tab from 'react-bootstrap/Tab';
  import Button from 'react-bootstrap/Button';
  import './style.css';
  import maryellenImage from './../../../assets/TeamAvatars/Maryellen.png';
  import ravenImage from './../../../assets/TeamAvatars/Raven.png';
  import xeniaImage from './../../../assets/TeamAvatars/Xenia.png';
  import adwaitImage from './../../../assets/TeamAvatars/Adwait.png';
  import sanayImage from './../../../assets/TeamAvatars/Sanay.png';
  import mirandaImage from './../../../assets/TeamAvatars/Miranda.png';
  import johnImage from './../../../assets/TeamAvatars/John.png';

  const MeetTheTeamPage = () => {
    const teamMembersFirstRow = [
      {
        name: 'Maryellen Marino',
        role: 'President',
        avatar: maryellenImage,
      },
      {
        name: 'Raven Levitt',
        role: 'Vice President',
        avatar: ravenImage,
      },
      {
        name: 'John Kloepfer',
        role: 'Director of Technology',
        avatar: johnImage,
      },
    ];
  
    const teamMembersSecondRow = [
      {
        name: 'Xenia Khusid',
        role: 'Director of Logistics',
        avatar: xeniaImage,
      },
      {
        name: 'Adwait Naware',
        role: 'Director of Finance',
        avatar: adwaitImage,
      },
      {
        name: 'Sanay Tralshawala',
        role: 'Director of Sponsorship',
        avatar: sanayImage,
      },
      {
        name: 'Miranda Zheng',
        role: 'Director of Marketing',
        avatar: mirandaImage,
      },
    ];
  
    return (
      <div id="members" className="MeetTheTeamPage" style={{ textAlign: 'center', width: '80%', margin: 'auto' }}>
        <h1 style={{ fontFamily: 'Mokoto', fontSize: 46, marginBottom: '20px' }}>
          Meet Our Team!
        </h1>
  
        <div className="team-members">
          <Row className="mb-4 justify-content-center">
            {/* First Row */}
            {teamMembersFirstRow.map((member, index) => (
              <Col key={index} md={3}>
                <div className="" style={{ marginBottom: '20px' }}>
                  <img src={member.avatar} alt={member.name} style={{ width: '70%' }} />
                  <div className="container">
                    <h2 className="name">{member.name}</h2>
                    <p className="position">{member.role}</p>
                    <Button className="button" style={{ marginBottom: '10px' }}>
                      More Info
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
  
          <Row className="mb-4">
            {/* Second Row */}
            {teamMembersSecondRow.map((member, index) => (
              <Col key={index} md={3}>
                <div className="" style={{ marginBottom: '20px' }}>
                  <img src={member.avatar} alt={member.name} style={{ width: '70%' }} />
                  <div className="container">
                    <h2 className="name">{member.name}</h2>
                    <p className="position">{member.role}</p>
                    <Button className="button" style={{ marginBottom: '10px' }}>
                      More Info
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
  
          {/* Tab content and buttons */}
          <p style={{fontSize: '2em', fontWeight: 'bold'}}>
            Want to Help?
          </p>
  
          <div className="button-container">
            <Nav.Link href="https://forms.gle/VY1vXF1mPMgx82wdA">
              <Button variant="outline"className='button'style={{ backgroundColor: '#910307', color: 'white' }}
              >
                Mentor Application
              </Button>
            </Nav.Link>
            <Nav.Link href="https://forms.gle/kEpdKKKrFsSUQztR6">
              <Button variant="outline" className='button'style={{ backgroundColor: '#910307', color: 'white', marginLeft: '30px' }}>
                Volunteer Application
              </Button>
            </Nav.Link>
          </div>
        </div>
      </div>
    );
  };
  
  
  export default MeetTheTeamPage;
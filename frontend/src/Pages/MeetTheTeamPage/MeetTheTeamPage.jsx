  import React from 'react';
  import Col from 'react-bootstrap/Col';
  import Nav from 'react-bootstrap/Nav';
  import Row from 'react-bootstrap/Row';
  import Tab from 'react-bootstrap/Tab';
  import Button from 'react-bootstrap/Button';
  import './style.css';
  import maryellenImage from './../../../assets/TeamPics/mel image.jpeg';
  import ravenImage from './../../../assets/TeamPics/raven image.jpg';
  import xeniaImage from './../../../assets/TeamPics/xenia image.jpg';
  import adwaitImage from './../../../assets/TeamPics/adwait image.jpg';
  import sanayImage from './../../../assets/TeamPics/sanay image.png';
  import mirandaImage from './../../../assets/TeamPics/miranda image.jpg';
  import johnImage from './../../../assets/TeamPics/john image.jpg';

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
        <br></br>
        <div className="team-members">
          <h1 style={{ fontFamily: 'Mokoto', fontSize: 30, marginBottom: '20px' }}>
            Meet The Directors
          </h1>
          <br></br>
          <Row className="mb-4 justify-content-center">
            {/* First Row */}
            {teamMembersFirstRow.map((member, index) => (
              <Col key={index} md={3}>
                <div className="" style={{ marginBottom: '20px'}}>
                  <img src={member.avatar} alt={member.name} style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '50%'}} />
                  <div className="container">
                    <h2 className="name">{member.name}</h2>
                    <p className="position">{member.role}</p>
                    {/* <Button className="button" style={{ marginBottom: '10px' }}>
                      More Info
                    </Button> */}
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
                  <img src={member.avatar} alt={member.name} style={{ width: '200px', height: '200px', objectFit: 'cover',  borderRadius: '50%' }} />
                  <div className="container">
                    <h2 className="name">{member.name}</h2>
                    <p className="position">{member.role}</p>
                    {/* <Button className="button" style={{ marginBottom: '10px' }}>
                      More Info
                    </Button> */}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <br></br>
          <h1 style={{ fontFamily: 'Mokoto', fontSize: 30, marginBottom: '20px' }}>
          Meet the Junior Directors
          </h1>
          <br></br>




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
        <br></br><br></br><br></br>
      </div>
    );
  };
  
  
  export default MeetTheTeamPage;
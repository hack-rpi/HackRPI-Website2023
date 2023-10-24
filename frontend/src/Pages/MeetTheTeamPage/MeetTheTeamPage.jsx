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
  import maryellenAvatar from './../../../assets/TeamAvatars/Maryellen.png';
  import ravenAvatar from './../../../assets/TeamAvatars/Raven.png';
  import xeniaAvatar from './../../../assets/TeamAvatars/Xenia.png';
  import adwaitAvatar from './../../../assets/TeamAvatars/Adwait.png';
  import sanayAvatar from './../../../assets/TeamAvatars/Sanay.png';
  import mirandaAvatar from './../../../assets/TeamAvatars/Miranda.png';
  import johnAvatar from '../../../assets/TeamAvatars/John.png';

  const MeetTheTeamPage = () => {
    const teamMembersFirstRow = [
      {
        name: 'Maryellen Marino',
        role: 'President',
        image: maryellenImage,
        avatar: maryellenAvatar,
      },
      {
        name: 'Raven Levitt',
        role: 'Vice President',
        image: ravenImage,
        avatar: ravenAvatar,
      },
      {
        name: 'John Kloepfer',
        role: 'Director of Technology',
        image: johnImage,
        avatar: johnAvatar,
      },
    ];
  
    const teamMembersSecondRow = [
      {
        name: 'Xenia Khusid',
        role: 'Director of Logistics',
        image: xeniaImage,
        avatar: xeniaAvatar,
      },
      {
        name: 'Adwait Naware',
        role: 'Director of Finance',
        image: adwaitImage,
        avatar: adwaitAvatar,
      },
      {
        name: 'Sanay Tralshawala',
        role: 'Director of Sponsorship',
        image: sanayImage,
        avatar: sanayAvatar,
      },
      {
        name: 'Miranda Zheng',
        role: 'Director of Marketing',
        image: mirandaImage,
        avatar: mirandaAvatar,
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
            Meet The <a style={{ color: '#910307'}}>Directors</a>
          </h1>
          <br></br>
          <Row className="mb-4 justify-content-center">
            {/* First Row */}
            {teamMembersFirstRow.map((member, index) => (
              <Col key={index} md={3}>
                <div style={{ marginBottom: '5px', display: 'grid', rowGap: '13px' }}>
                  <div style={{ width: 'auto', height: 'auto', display: 'grid', justifySelf: 'center', alignSelf: 'center' }}>
                    <img src={member.image} alt={member.name} style={{ width: '200px', height: '200px',
                      objectFit: 'cover', borderRadius: '50%', border: '4px solid white' }} />
                    <img src={member.avatar} alt={member.name} style={{ width: '70px', height: '70px', objectFit: 'cover',
                      borderRadius: '50%', border: '2px solid #910307', backgroundColor: "#353535", display: 'flex', position: 'absolute',
                      justifySelf: 'flex-end', alignSelf: 'flex-end' }} />
                  </div>
                  <div className="container">
                    <h2 className="name">{member.name}</h2>
                    <p className="position" style={{color: '#910307', marginBottom: '0' }}>{member.role}</p>
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
                <div style={{ marginBottom: '20px', display: 'grid', rowGap: '13px' }}>
                  <div style={{ width: 'auto', height: 'auto', display: 'grid', justifySelf: 'center', alignSelf: 'center' }}>
                    <img src={member.image} alt={member.name} style={{ width: '200px', height: '200px',
                      objectFit: 'cover', borderRadius: '50%', border: '4px solid white' }} />
                    <img src={member.avatar} alt={member.name} style={{ width: '70px', height: '70px', objectFit: 'cover',
                      borderRadius: '50%', border: '2px solid #910307', backgroundColor: "#353535", display: 'flex', position: 'absolute',
                      justifySelf: 'flex-end', alignSelf: 'flex-end' }} />
                  </div>
                  <div className="container">
                    <h2 className="name">{member.name}</h2>
                    <p className="position" style={{color: '#910307'}}>{member.role}</p>
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
          Meet the <a style={{ color: '#d50110'}}>Junior Directors</a>
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
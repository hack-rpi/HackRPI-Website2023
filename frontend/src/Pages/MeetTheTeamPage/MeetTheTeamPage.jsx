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
  import cjImage from './../../../assets/TeamPics/cj image.jpg';
  import graceImage from './../../../assets/TeamPics/grace image.jpg';
  import hemanImage from './../../../assets/TeamPics/heman image.jpg';
  import amandaImage from './../../../assets/TeamPics/amanda image.jpeg';
  import cooperImage from './../../../assets/TeamPics/cooper image.jpg';

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

    const jrTeamMembersFirstRow = [
      {
        name: 'CJ Marino',
        role: 'Junior Director of Logistics',
        image: cjImage,
      },
      {
        name: 'Grace Hui',
        role: 'Junior Director of Finance',
        image: graceImage,
      },
    ];

    const jrTeamMembersSecondRow = [
      {
        name: 'Heman Kolla',
        role: 'Junior Director of Sponsorship',
        image: hemanImage,
      },
      {
        name: 'Amanda Ruan',
        role: 'Junior Director of Marketing',
        image: amandaImage,
      },
      {
        name: 'Cooper Werner',
        role: 'Junior Director of Technology',
        image: cooperImage,
      },
    ];

    return (
      <div id="members" className="MeetTheTeamPage centeredText">
        <h1 id="meet-our-team-header" style={{ fontFamily: 'Mokoto', fontSize: '46px' }}>
          Meet Our Team!
        </h1>

        {/* Directors: */}

        <div className="team-members">
          <h1 className="director-jrDirector-header" style={{ padding: '0 7px' }}>
            Meet The <a style={{ color: '#910307' }}>Directors</a>
            <p style={{ fontSize: '10px', fontStyle: 'italic' }}>Avatars by Lilu Kaufman</p>
          </h1>


          <Row className="director-row">
            {/* First Row */}
            {teamMembersFirstRow.map((member, index) => (
              <Col key={index} md={3}>
                <div className="director-div">
                  <div style={{ width: 'auto', height: 'auto', display: 'grid', justifySelf: 'center', alignSelf: 'center' }}>
                    <img className='director-img' src={member.image} alt={member.name}/>
                    <img className='director-avatar' src={member.avatar} alt={member.name}/>
                  </div>
                  <div className="director-name-div">
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

          <Row className="director-row" style={{ columnGap: '0' }}>
            {/* Second Row */}
            {teamMembersSecondRow.map((member, index) => (
              <Col key={index} md={3}>
                <div className="director-div">
                  <div style={{ width: 'auto', height: 'auto', display: 'grid', justifySelf: 'center', alignSelf: 'center' }}>
                    <img className='director-img' src={member.image} alt={member.name}/>
                    <img className='director-avatar' src={member.avatar} alt={member.name}/>
                  </div>
                  <div className="director-name-div">
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

          {/* Jr Directors: */}

          <h1 className="director-jrDirector-header" style={{ marginTop: '25px' }}>
            Meet the <a style={{ color: '#d50110' }}>Junior Directors</a>
          </h1>
          <Row className="director-row jr">
            {/* First Row */}
            {jrTeamMembersFirstRow.map((member, index) => (
              <Col key={index} md={3}>
                <div className="director-div">
                  <div style={{ width: 'auto', height: 'auto', display: 'grid', justifySelf: 'center', alignSelf: 'center' }}>
                    <img className='director-img' src={member.image} alt={member.name}/>
                  </div>
                  <div className="director-name-div">
                    <h2 className="name">{member.name}</h2>
                    <p className="position junior">{member.role}</p>
                    {/* <Button className="button" style={{ marginBottom: '10px' }}>
                      More Info
                    </Button> */}
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          <Row className="director-row jr">
            {/* Second Row */}
            {jrTeamMembersSecondRow.map((member, index) => (
              <Col key={index} md={3}>
                <div className="director-div">
                  <div style={{ width: 'auto', height: 'auto', display: 'grid', justifySelf: 'center', alignSelf: 'center' }}>
                    <img className='director-img' src={member.image} alt={member.name}/>
                  </div>
                  <div className="director-name-div">
                    <h2 className="name">{member.name}</h2>
                    <p className="position junior">{member.role}</p>
                    {/* <Button className="button" style={{ marginBottom: '10px' }}>
                      More Info
                    </Button> */}
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
              <Button variant="outline"className='button'style={{ backgroundColor: '#910307', color: 'white' }}>
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
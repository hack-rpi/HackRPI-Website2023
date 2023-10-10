import React from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';

const MeetTheTeamPage = () => {
    const teamMembers = [
      {
        name: 'Maryellen Marino',
        role: 'President',
        avatar: '', 
      },
      {
        name: 'Raven Levitt',
        role: 'Vice President',
        avatar: '',
      },

      {
        name: 'Xenia Khusid',
        role: 'Director of Logistics',
        avatar: '',
      },

      {
        name: 'Adwait Naware',
        role: 'Director of Finance',
        avatar: '',
      },

      {
        name: 'Sanay Tralshawala',
        role: 'Director of Sponsorship',
        avatar: '',
      },

      {
        name: 'Miranda Zheng',
        role: 'Director of Marketing',
        avatar: '',
      },

    ];

    return (
      <div id="members" className="MeetTheTeamPage" style={{ textAlign: 'center', width: '80%', margin: 'auto' }}>
          <h1 className="title" style={{ fontFamily: 'Mokoto', fontSize: 46, height: 35 }}>
              Meet Our Team!
          </h1>
          <div className="team-members">
              <Row>
                  {teamMembers.map((member, index) => (
                      <Col key={index} md={4}>
                          <div className="card">
                              <img src={member.avatar} alt={member.name} style={{ width: '100%' }} />
                              <div className="container">
                                  <h2>{member.name}</h2>
                                  <p className="title">{member.role}</p>
                                  <p>Some text that describes them.</p>
                                  <Button className="button">More Info</Button>
                              </div>
                          </div>
                      </Col>
                  ))}
              </Row>
          </div>
      </div>
  );
}

export default MeetTheTeamPage;

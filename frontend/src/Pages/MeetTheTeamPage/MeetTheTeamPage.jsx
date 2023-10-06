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
      <div id="members"  className="MeetTheTeamPage" style={{ textAlign: 'center', width: "80%", margin: 'auto'}}>
        <h1 className="title" style={{ fontFamily: 'Mokoto', fontSize: 46, height: 35 }}>
          Meet Our Team!
        </h1>
        <br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div className="team-members"> 
        {/* Will map through team members data and render their information here */}
          {/* 
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.avatar} alt={member.name} />
              <h2>{member.name}</h2>
              <p>{member.role}</p>
            </div>
          ))}
          */}
        </div>
      </div>
    );
}

export default MeetTheTeamPage;

import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import DCC from './maps_img/DCC.png';
import LOW from './maps_img/LOW.png';
import "./maps.css"


const MapsPage = () => {
  const [activeTab, setActiveTab] = useState('one'); // 'one' represents the default active tab.

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (

    <div id="about" className="MapsPage" style={{ textAlign: 'center', width: '80%', margin: 'auto' }}>
      <h1 className="title" style={{ fontFamily: 'Mokoto', fontSize: 55, height: 55 }}>
        MAPS
      </h1>
      <Tab.Container defaultActiveKey="one" style={{ paddingBottom: 50 }}>
        <Col>
          <Row>
            <Nav
              variant="pills-primary"
              className="flex-row justify-content-center"
              style={{ height: 50 }}
            >
              <Nav.Item>
                <Nav.Link className="nav-link-custom" eventKey="one" onClick={() => setActiveTab('one')}>
                  <Button
                    variant="outline"
                    className="hack-button"
                    style={{
                      backgroundColor: activeTab === 'one' ? 'white' : '#910307',
                      color: 'black',
                    }}
                    onClick={() => handleTabClick('one')}
                  >
                    Darrin Communications Center
                  </Button>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="nav-link-custom" eventKey="two" onClick={() => setActiveTab('two')}>
                  <Button
                    variant="outline"
                    className="button"
                    style={{
                      backgroundColor: activeTab === 'two' ? 'white' : '#910307',
                      color: 'black'
                    }}
                    onClick={() => handleTabClick('two')}
                  >
                    Low Center for Industrial Innovation
                  </Button>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Row>

          <Tab.Content className="myClass">
            <Tab.Pane eventKey="one">
              <img
                src={DCC} // Replace with your event image URL
                alt="DCC Image"
                className="img-fluid"
                style={{ maxWidth: '100%' }}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="two">
              <img
                src={LOW} // Replace with your team image URL
                alt="LOW Image"
                className="img-fluid"
                style={{ maxWidth: '100%' }}
              />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Tab.Container>

      {/* Rest of your content */}
    </div>
  );
};

export default MapsPage;
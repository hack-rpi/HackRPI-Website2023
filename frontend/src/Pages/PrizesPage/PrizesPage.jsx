import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';

// need to re-write these asap
const prizes = [
    { title: 'First Prize',
    content:
        'Macbook Air',
    },
    { title: 'Second Prize',
    content:
        'Meta Quest 2',
    },
    { title: 'Third Prize',
    content:
        'Apple Watch Series 9',
    },
];

const PrizesPage = () => {
  const [currentActiveKey, setCurrentActiveKey] = useState(null);

  const toggleActiveKey = (key) => {
    setCurrentActiveKey(currentActiveKey === key ? null : key);
  };

  return (
    <Container fluid
      id="prize"
    >
      <h1
        style={{
          fontFamily: 'Mokoto',
          fontWeight: '400',
          color: 'white',
          textAlign: 'center',
          fontSize: '3rem',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
          paddingBottom: 10,
        }}
      >
        Prizes
      </h1>

      <Accordion style={{ fontFamily: 'Poppins', width: '75vw', margin: 'auto' }} >
        {prizes.map((faq, index) => (
          <Accordion.Item eventKey={index}>
            <Accordion.Header> {faq.title} </Accordion.Header>
            <Accordion.Body> {faq.content} </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default PrizesPage;
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
      'A spaceship, but you have to assemble it yourself a la IKEA',
  },
  { title: 'Second Place',
  content:
    "Adam Smart's right eyeball",
  },
  { title: 'Third Place',
  content:
    'Riri\'s glasses and maroon Vans',
  },
];

const PrizesPage = () => {
  const [currentActiveKey, setCurrentActiveKey] = useState(null);

  const toggleActiveKey = (key) => {
    setCurrentActiveKey(currentActiveKey === key ? null : key);
  };

  return (
    <Container fluid
      style={{
        height: 'fit-content',
        marginBottom:'2rem',
        alignItems: 'center',
        color: "white"
      }}
      id="faq"
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
        {faqs.map((faq, index) => (
          <Accordion.Item eventKey={index} key={index}>
            <Accordion.Header> {faq.title} </Accordion.Header>
            <Accordion.Body> {faq.content} </Accordion.Body>
          </Accordion.Item>
        ))}

        <AccordionItem eventKey="1">
          <AccordionHeader>What is the spaceship like?</AccordionHeader>
          <AccordionBody>It's actually very pink a la Barbie, see <a href="https://www.google.com/search?q=barbie+spaceship+movie&tbm=isch&ved=2ahUKEwjr_PLFw7eBAxXhMFkFHUgbDnMQ2-cCegQIABAA&oq=barbie+spaceship+movie&gs_lcp=CgNpbWcQAzIHCAAQGBCABDoECCMQJzoECAAQHlDlAljnBmDBB2gAcAB4AIABlgGIAZgEkgEDNi4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=cAYKZeuECeHh5NoPyLa4mAc&bih=563&biw=1280&rlz=1C1JZAP_enUS1063US1063#imgrc=nSTkIJQG5Z4JnM">here</a>.</AccordionBody>
        </AccordionItem>

        <AccordionItem eventKey='2'>
          <AccordionHeader>What color are Adam's eyes?</AccordionHeader>
          <AccordionBody>Blue, but the color is not guarenteed to be preserved!.</AccordionBody>
        </AccordionItem>

      </Accordion>
      {/* I added id=sponsors here so that when you click the sponsors 
      link at the top of the site, the sponsors segment isn't cut off 
      by the nav bar */}
      <h2 id='sponsors' style ={{ fontFamily: 'Poppins Light', fontSize: 20, textAlign: "center", paddingTop: 20}}
      >Feel free to contact us with any other questions at <a href='mailto:hackrpi@rpi.edu' style ={{color: "#db4941"}}>hackrpi@rpi.edu!</a></h2>
      
    </Container>
  );
};

export default PrizesPage;

import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';

// need to re-write these asap
const faqs = [
  { title: 'What is HackRPI?',
    content:
      'HackRPI is a 24 hour coding event where hackers will work in teams of 1 to 4 people to create projects based around the theme to win epic prizes thanks to our sponsors!',
  },
  { title: 'When is HackRPI X?',
  content:
    "November 4th-5th 2023, is the date for our 10th annual HackRPI. We're really excited to celebrate the 10th year of our incredible event with YOU! Save the date!",
  },
  { title: 'Is it free to attend?',
  content:
    'Yes! Thanks to our many wonderful sponsors, HackRPI is free, as is all the swag, food, and snacks you can get!',
  },
  { title: 'How do I apply?',
    content: 'Click the link above to apply!',
  },
  { title: 'Who can participate?',
    content:
      "Anyone with any skill level! Whether you're an experienced hackathon veteran, or if you've never coded before, our hackathon is for you! With our team of mentors ready to assist you with whatever direction you're taking your project, HackRPI is the place you should go to grow and test your technical skills!",
  },
  { title: 'Do I have to be an RPI student?',
    content:
      "No! You don't have to be an RPI student to participate! Students from other colleges are welcome and any recent college graduates!",
  },
  { title: 'Who else will be there?',
    content: 'Not only can you meet other RPI students and people from other colleges, but we’ve got wonderful sponsors who make this event possible! You’ll have the opportunity to talk to representatives from a variety of tech companies at career-fair style tables.'
  },
];

const FAQPage = () => {
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
        FAQs
      </h1>
      <Accordion style={{ fontFamily: 'Poppins', width: '75vw', margin: 'auto' }} >
        {faqs.map((faq, index) => (
          <Accordion.Item eventKey={index}>
            <Accordion.Header> {faq.title} </Accordion.Header>
            <Accordion.Body> {faq.content} </Accordion.Body>
          </Accordion.Item>
        ))}

        <AccordionItem eventKey="1">
          <AccordionHeader>Where is it happening?</AccordionHeader>
          <AccordionBody>HackRPI will take place in the Darrin Communications Center (DCC) on the RPI Campus in Troy, NY. Exact directions can be found <a href="https://www.google.com/maps/place/Darrin+Communications+Center/@42.7293552,-73.6821407,17z/data=!3m1!4b1!4m6!3m5!1s0x89de0f0a7e6fd845:0xb802c916a2bdf3c3!8m2!3d42.7293552!4d-73.6795658!16s%2Fg%2F1tg7s_yx">here</a>.</AccordionBody>
        </AccordionItem>

        <AccordionItem eventKey='2'>
          <AccordionHeader>What could I win?</AccordionHeader>
          <AccordionBody>Our prizes are to be determined! There will be overall winners, and specific prize categories you can compete in! Have ideas for prizes you’d want to see? Let us know in our <a href='https://discord.gg/QHhRQ8CTcP'>discord</a>.</AccordionBody>
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

export default FAQPage;

import React from 'react';
import Container from 'react-bootstrap/Container';
import { Accordion, AccordionItem } from 'react-sanfona';

const faqs = [
  {
    title: 'Question 1?',
    content:
      'answer 1'
  },
  {
    title: 'Question 2?',
    content:
      'Answer 2'
  },
  {
    title: 'Very good question #3?',
    content:
      'Answer 3'
  },
  {
    title: 'Question 4?',
    content:
      'Engaging answer 4'
  }
];


const FAQPage = () => {
  return (
    <Container fluid style={{ backgroundColor: "#8B0000", minHeight: "100vh" }}>
      <h2 id="faq" style={{ paddingTop: "1rem", textAlign: "center", color: "white" }}>FAQ</h2>

      <div>
      <h1>FAQ</h1>
      
      <Accordion>
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            title={faq.title}
            expanded={index === 0} 
          >
            <p>{faq.content}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </div>

    </Container>
  );
};

export default FAQPage;


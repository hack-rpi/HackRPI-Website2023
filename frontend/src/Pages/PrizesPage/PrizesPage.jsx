import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
// import Accordion from 'react-bootstrap/Accordion';
// import AccordionItem from 'react-bootstrap/esm/AccordionItem';
// import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
// import AccordionBody from 'react-bootstrap/esm/AccordionBody';

const subPrizes = [
  { title: 'Best AI Hack',
    cash: true,
    cost: 400,
    content: "",
  },
  { title: 'Best Education Hack',
    cash: true,
    cost: 400,
    content: "",
  },
  { title: 'Cyber Security Hack',
    cash: true,
    cost: 400,
    content: "",
  },
  { title: 'Best Sustainaibility Hack',
    cash: false,
    cost: 200,
    content: "",
  },
  { title: 'Best Mobile Hack',
    cash: false,
    cost: 200,
    content: "",
  },
  { title: 'Best Data Science',
    cash: false,
    cost: 100,
    content: "",
  },
  { title: 'Best Startup (Severino)',
    cash: false,
    cost: 200,
    content: "",
  },
  { title: 'Best First Time',
    cash: false,
    cost: 100,
    content: "",
  },
  { title: 'Raffle Prize',
    cash: false,
    cost: 0, // to be decided, un clear on provided information
    content: "",
  },
];

const sponsorPrize = [
  { title: 'Best in Patient Safety Tech',
    cash: true,
    cost: 1000,
    sponsor: "PRHI",
    content: "",
  },
  { title: 'Web3',
    cash: true,
    cost: 500,
    sponsor: "TBD",
    content: "",
  },
  { title: 'The Wolfram Award',
    cash: false,
    cost: 375, // to be decided, unclear on provided information
    content: "Wolfram Alpha",
  },
]


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

      <section>
        
      </section>
      
    </Container>
  );
};

export default PrizesPage;
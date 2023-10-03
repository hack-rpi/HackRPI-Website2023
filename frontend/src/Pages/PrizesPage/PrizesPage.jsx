import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import styled, { keyframes } from 'styled-components';

// import Accordion from 'react-bootstrap/Accordion';
// import AccordionItem from 'react-bootstrap/esm/AccordionItem';
// import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
// import AccordionBody from 'react-bootstrap/esm/AccordionBody';
const PrizeTitle = styled.h2`
  margin: 0;
  color: #0a0a0a;
  font-size: 1.5em; // Increase font size for better visibility
  font-weight: bold; // Make it bold to stand out
`;

const PrizeAmount = styled.p`
  margin: 5px 0;
  color: #4CAF50;
  font-size: 1.2em; // Slightly larger font size for the amount
`;

const PrizeDescription = styled.p`
  color: #666; // Subtle color for less important text
  font-style: italic; // Styling to differentiate from other text
`;

const shine = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const TotalPrize = styled.h1`
  text-align: center;
  background-image: linear-gradient(45deg, #f06, #9f6);
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 2.5em;
  margin: 20px 0;
  animation: ${shine} 2s linear infinite;
`;

const topPrizes = [
  { title: "#1 Best Hack",
    cash: true,
    cost: 1500,
    content: "",
  },
  { title: "#2 Best Hack",
  cash: true,
  cost: 750,
  content: "",
  }
];

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

      <section id="PrizePage_main_body">
      <TotalPrize>$18,875 in Prizes</TotalPrize>
        <section class="first_half_prize_page">
          <div>
            {topPrizes.map((Prize, Index) => (
              <section key={Index}>
                <h2 className="topPrizes_title">{Prize.title}</h2>
                {Prize.cash && <p className="sponsor_prize_amount">{Prize.cost}</p>}
                {!Prize.cash && <p className="subPrizes_cash">{Prize.cost}</p>}

                <p className="topPrizes_description">{Prize.content}</p>
              </section>
            ))}
          </div>
          <div>
            {sponsorPrize.map((Prize, Index) => (
              <section key={Index}>
                <h2 className="sponsor_prize_title">{Prize.title}</h2>
                {Prize.cash && <p className="sponsor_prize_amount">{Prize.cost}</p>}
                {!Prize.cash && <p className="subPrizes_cash">{Prize.cost}</p>}

                <p className="sponsor_prize_description">{Prize.content}</p>
              </section>
            ))}
          </div>
        </section>
        <section class="second_half_prize_page">
          <div>
            {subPrizes.map((Prize, Index) => (
              <section key={Index}>
                <h2 className="subPrizes_title">{Prize.title}</h2>
                {Prize.cash && <p className="subPrizes_amount">{Prize.cost}</p>}
                {!Prize.cash && <p className="subPrizes_cash">{Prize.cost}</p>}

                <p className="subPrizes_description">{Prize.content}</p>
              </section>
            ))}
          </div>
        </section>

      </section>
      
    </Container>
  );
};

export default PrizesPage;
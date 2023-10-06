import React from 'react';
import styled, { keyframes } from 'styled-components';
import SpinningGear from './SpinningGear'; // Import the SpinningGear component
import Tab from './tab'; // Import the Tab component

//npm install styled-components
//npm install styled-components@latest
//npm install react-spring

const PrizeContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
`;

const shine = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const pulsate = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.85;
  }
`;

const TotalPrize = styled.h1`
  text-align: center;
  background-image: linear-gradient(45deg, #191919, #910307,#353535, #d50110);
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 8em; 
  margin: 20px -100px;
  animation: ${shine} 2s linear infinite, ${pulsate} 1.5s ease-in-out infinite;
  position: relative;
`;

const Prizes = [
  { title: '#1 Best Hack', amount: '$1,500' },
  { title: '#2 Hack', amount: '$750' },
  { title: 'Best AI Hack', amount: '$400' },
  { title: 'Best Education Hack', amount: '$400' },
  { title: 'Best Sustainability Hack', amount: '$200' },
  { title: 'Best Mobile Hack', amount: '$200' },
  { title: 'Best Data Science Hack', amount: '$100' },
  { title: 'Best Startup', amount: '$200' },
  { title: 'Best First Time Hack', amount: '$100' },
  { title: 'Best in Patient Safety Tech', amount: '$1,000' },
  { title: 'Cyber Security Hack', amount: '$400' },
  { title: 'Web3', amount: '$500' },
  { title: 'The Wolfram Award (35)', amount: '$375 in cash value per person' },
];

const TotalPrizeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0; 
  //gap: 70px; //red gear
  gap: 120px; //black gear
`;

const PrizesPage = () => {

  const bestHacksPrizes = Prizes.slice(2, 10);
  const cyber = Prizes.slice(10,11);
  const web3Prizes = Prizes.slice(11, 12);
  const wolframPrizes = Prizes.slice(12, 13);

  return (
    <PrizeContainer>
      <TotalPrizeContainer>
        <SpinningGear />
        <TotalPrize>
          $18,875&nbsp;in Prizes
        </TotalPrize>
        <SpinningGear />
      </TotalPrizeContainer>

      <div style={{ 
      display: 'flex', 
      justifyContent: 'space-evenly',  
      marginTop: '20px',
      gap: '120px',  // Add or adjust gap
    }}>
      <Tab title="Cyber Security Hack Award" prizes={cyber} />
      <Tab title="Best Hacks Prizes" prizes={bestHacksPrizes} />
      <Tab title="Web 3 Prize" prizes={web3Prizes} />
      <Tab title="Wolfram Alfa Award" prizes={wolframPrizes} />
    </div>
    </PrizeContainer>
  );
};

export default PrizesPage;

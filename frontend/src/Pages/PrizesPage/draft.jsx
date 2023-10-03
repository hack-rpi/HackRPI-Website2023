import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const Trophy = styled.div`
  border: 5px solid #d4af37;
  border-bottom: none;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: #f9c646;
  padding: 20px;
  position: relative;
  margin-bottom: 30px;
  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: -15px;
    width: 30px;
    height: 15px;
    border-bottom: 5px solid #d4af37;
    border-left: 5px solid #d4af37;
    border-right: 5px solid #d4af37;
  }
  &:before {
    left: 10px;
  }
  &:after {
    right: 10px;
  }
`;

const PrizeTitle = styled.h2`
  margin: 0;
  color: #0a0a0a;
`;

const PrizeAmount = styled.p`
  margin: 5px 0;
  color: #4CAF50;
`;

const Prizes = [
  { title: '#1 Best Hack', amount: '$1,500' },
  { title: '#2 Hack', amount: '$750' },
  { title: 'Best AI Hack', amount: '$400' },
  { title: 'Best Education Hack', amount: '$400' },
  { title: 'Cyber Security Hack', amount: '$400' },
  { title: 'Best Sustainability Hack', amount: '$200' },
  { title: 'Best Mobile Hack', amount: '$200' },
  { title: 'Best Data Science Hack', amount: '$100' },
  { title: 'Best Startup', amount: '$200' },
  { title: 'Best First Time Hack', amount: '$100' },
  { title: 'Best in Patient Safety Tech', amount: '$1,000' },
  { title: 'Web3', amount: '$500' },
  { title: 'The Wolfram Award (35)', amount: '$375 in cash value per person' },
];

const PrizesPage = () => {
  return (
    <PrizeContainer>
      <TotalPrize>$18,875 in Prizes</TotalPrize>
      {Prizes.map((prize, index) => (
        <Trophy key={index}>
          <PrizeTitle>{prize.title}</PrizeTitle>
          <PrizeAmount>{prize.amount}</PrizeAmount>
        </Trophy>
      ))}
    </PrizeContainer>
  );
};

export default PrizesPage;
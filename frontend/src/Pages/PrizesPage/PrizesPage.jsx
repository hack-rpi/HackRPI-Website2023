import React from 'react';
import styled, { keyframes } from 'styled-components';
import SpinningGear from './SpinningGear'; // Import the SpinningGear component
import Tab from './tab'; // Import the Tab component
import podium from './img/podium.png';
//npm install styled-components
//npm install styled-components@latest
//npm install react-spring

const Prizes = [
  { title: '#1 Best Hack', amount: '$1,500' },
  { title: '#2 Best Hack', amount: '$750' },
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

const PrizeContainer = styled.div`
  padding: 20px;
  margin: auto;
  margin-bottom: 36vh;
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
  background-image: linear-gradient(45deg, #FFC7C9, #BA292E,#D96F6F, #E50717);
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 8vw; // Responsive font size
  margin: 2vw; // Responsive margin
  animation: ${shine} 2s linear infinite, ${pulsate} 1.5s ease-in-out infinite;
  position: relative;
  overflow-wrap: break-word; // Manage word breaking
  word-wrap: break-word; // Manage word breaking
  user-select: none; 

  @media (min-width: 1200px) {
    font-size: 8vw;
  }

  @media (max-width: 600px) {
    font-size: 13vw; 
  }

  @media (max-width: 400px) {
    font-size: 13vw; 
  }
`;

const TotalPrizeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 100px; 
  //gap: 70px; //red gear
  gap: 10px; 
  user-select: none; 

  
  @media (max-width: 600px) {
    gap: 20px; 
  }

  @media (max-width: 400px) {
    gap: 10px; 
  }
`;

const TopPrizeContainer = styled.section`
  margin: auto;
  margin-top: 18vh;
  margin-bottom: 140px;
  display: flex;
  justify-content: center; /*align to center*/
  gap: 20px;
  text-align: center;
  max-width: 1200px; /* Updated from width */
  
  @media (max-width: 850px) {
    transform: scale(0.80);
    margin-top: 8vh;

    flex-direction: row; /* Stack items vertically on smaller screens */
    align-items: center; /* Center items vertically */
  }

  @media (max-width: 750px) {
    margin-top: 0vh;
    transform: scale(0.66);
    flex-direction: row; /* Stack items vertically on even smaller screens */
    align-items: center; /* Center items vertically */
  }
`;

const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const shineLight = keyframes`
  0% {
    opacity: 0.5;
    transform: translateY(0) scaleY(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-150px) scaleY(1.5);
  }
`;


const Podium = styled.div`
  background-image: url(${podium});
  width: 360px;
  height: 150px;
  position: relative;
  margin: 150px auto 3vh auto;

  &:before {
    content: "";
    position: absolute;
    bottom: 65%;
    left: 50%;
    transform-origin: bottom center;
    transform: translateX(-50%);
    width: 250px; 
    height: 280px; 
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%); // White light
    //background: linear-gradient(0deg, rgba(145, 3, 7, 0.3) 0%, rgba(145, 3, 0, 0) 100%); //red light
    clip-path: polygon(25% 100%, 75% 100%, 100% 0%, 0% 0%);
    animation: ${shineLight};
    z-index: 0;
  }
`;

const PrizeTitle= styled.h3`
  position: absolute;
  bottom: 150%;
  left: 32%; // Adjusted left value
  transform: translate(-50%, 50%);  // Centered vertically and horizontally
  animation: ${moveUpDown} 2s ease-in-out infinite;
  color: gold;
  //color:white; 
  font-size: 40px; 
  z-index: 1;
  font-family: 'Mokoto', sans-serif;
  text-shadow: 0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700, 0 0 40px #FFD700; //yellow shadow
  //text-shadow: 0 0 10px #FFFFFF, 0 0 20px #FFFFFF, 0 0 30px #FFFFFF, 0 0 40px #FFFFFF; //white shadow
  text-align: center;  
  width: 130px;  
`;

const PrizeAmount = styled.h2`
  margin-top: -10px; 
  color: white; 
  font-size: 30px; 
  text-align: center; 
  font-family: 'Mokoto', sans-serif;
  transform: translate(-50%, 50%);  // Centered vertically and horizontally
  animation: ${moveUpDown} 2s ease-in-out infinite;
  color: white;
  text-shadow: 0 0 10px silver, 0 0 20px silver, 0 0 30px silver, 0 0 40px silver;
`;

const Top_Prize = styled.section`
  position: relative;
  width: 45%; /* Adjust the width as needed for two items on the same line */
  text-align: center;
  
  @media (max-width: 850px) {
    width: 100%; /* Take full width on smaller screens to stack items */
  }

  @media (max-width: 750px) {
    width: 100%; /* Take full width on even smaller screens to stack items */
  }
`;

const sparkle = keyframes`
  0%, 100% {
    transform: translateY(0) scale(0);
    opacity: 0;
  }
  50% {
    transform: translateY(-200px) scale(1);  // Adjusted to move up higher
    opacity: 1;
  }
  75% {
    transform: translateY(-250px) scale(0.5);  // Adjusted to move up higher
    opacity: 0.5;
  }
`;

const Sparkle = styled.div`
  position: absolute;
  bottom: ${props => props.bottom || '65%'};
  left: ${props => props.left || '50%'};
  width: 20px;
  height: 20px;
  background-color: #fff;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  animation: ${sparkle} 4s linear infinite;
  animation-delay: ${props => props.delay || '0s'};
  opacity: 0;
`;

const PrizeDescription = styled.section`
    margin-top: 3vh;
    height: 500px;
`;

const OtherPrizeContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const PrizesPage = () => {

  const bestHacksPrizes = Prizes.slice(2, 10);
  const cyber = Prizes.slice(10,11);
  const web3Prizes = Prizes.slice(11, 12);
  const wolframPrizes = Prizes.slice(12, 13);
  const topPrizes = Prizes.slice(0, 2);

  const prizesColumns = [
    { title: 'Cyber Security Hack', prizes: cyber },
    { title: 'Best Hacks Prizes', prizes: bestHacksPrizes },
    { title: 'Web 3 Prize', prizes: web3Prizes },
    { title: 'Wolfram Alfa Award', prizes: wolframPrizes },
  ];

  return (
    <PrizeContainer>
      <TotalPrizeContainer>
        <SpinningGear/>
        <TotalPrize>
          $18,875&nbsp;in Prizes
        </TotalPrize>
        <SpinningGear/>
      </TotalPrizeContainer>

      <TopPrizeContainer>
        {topPrizes.map((Prize, Index) => (
          <Top_Prize key={Index} className={Prize.code}>
            <Podium>
              <Sparkle bottom="65%" left="45%" delay="-5s" />
              <Sparkle bottom="70%" left="50%" delay="-2s" />
              <Sparkle bottom="75%" left="55%" delay="-4s" />
              <Sparkle bottom="80%" left="60%" delay="-2.5s" />
              <Sparkle bottom="85%" left="65%" delay="-1s" />
              <Sparkle bottom="85%" left="35%" delay="-6s" />
              <Sparkle bottom="90%" left="30%" delay="-3s" />
              <PrizeDescription>
                <PrizeTitle>{Prize.title}</PrizeTitle>
                <PrizeAmount>{Prize.amount}</PrizeAmount>
              </PrizeDescription>
            </Podium>
          </Top_Prize>
        ))}
      </TopPrizeContainer>
      
      <OtherPrizeContainer>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-evenly',  
          marginTop: '-100px',
          marginBottom: '20px',
          gap: '30px', 
          fontFamily: 'Mokoto',
          color: '#FFFFFF', 
        }}>
          <Tab title="Cyber Security Hack" prizes={cyber} />
          <Tab title="Best Hacks Prizes" prizes={bestHacksPrizes} />
          <Tab title="Web 3 Prize" prizes={web3Prizes} />
          <Tab title="Wolfram Alfa Award" prizes={wolframPrizes} />
        </div>
      </OtherPrizeContainer>

    </PrizeContainer>
  );
};

export default PrizesPage;

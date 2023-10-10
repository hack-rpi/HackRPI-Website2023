import React from 'react';
import styled, { keyframes } from 'styled-components';
import SpinningGear from './SpinningGear'; // Import the SpinningGear component
import Tab from './tab'; // Import the Tab component
import best_hackTrophy from './img/trophy1.png';
import podiumImage from './podium.png';

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
  margin-top: 8vh; // Make some space against the title
  margin-bottom: 140px; // Make some space against other prizes
  display: flex; // Use flex display
  flex-direction: row; // Arrange prizes horizontally
  flex-wrap: wrap; // Allow prizes to wrap to the next line if necessary
  justify-content: space-between; // Distribute space between prizes
  gap: 20px; // Adjust the gap between prizes
  height: fit-content;
  text-align: center;
  width: 1200px;
`;

const Top_Prize = styled.section`
  position: relative; /* Set relative positioning for the container */
  width: 500px;
  height: 500px; /* Adjust the height as needed */

  .topPrizes_image {
    position: absolute; // Set absolute positioning for the image, so the descriptions 
                        // can show above
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${best_hackTrophy});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 0;
  }

  /* Adjust the styles for the text and other elements as needed */
  h2.topPrizes_title, h3.prize_amount, p.prize_description {
    position: relative; /* Set relative positioning for text elements */
    z-index: 1;
    transform: rotate(-15deg); /* Rotate the h2 element by 45 degrees */
    padding-top: 320px;
    width: 500px;
    text-align: center;
    margin-botton: 0px;
    margin-left: -35px; /* Move the elements to the left by 15 pixels */

  }
  h3.prize_amount {
    margin-top: 20px;
    margin-top: 0px;
    padding-top: 0px;
    text-align: center;
    margin-left: 0px;
  }


`;

const Podium = styled.div`
  position: relative;
  width: 200px;
  height: 400px;
  background-image: url(${podiumImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 20px;
`;


const PrizeInfo = styled.div`
  position: absolute;
  top: 10px; // Adjust as needed
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  animation: float 2s ease-in-out infinite;

  @keyframes float {
    0%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-50%) translateY(-10px);
    }
  }
`;

const LightEffect = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(255,255,255,0.8), transparent);
  transform: translateX(-50%);
  animation: shine 3s ease-in-out infinite;

  @keyframes shine {
    0%, 100% {
      opacity: 0.8;
    }
    50% {
      opacity: 0.5;
    }
  }
`;


const PrizesPage = () => {

  const bestHacksPrizes = Prizes.slice(2, 10);
  const cyber = Prizes.slice(10,11);
  const web3Prizes = Prizes.slice(11, 12);
  const wolframPrizes = Prizes.slice(12, 13);
  const topPrizes = Prizes.slice(0, 2);

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
          <Podium key={Index}>
            <LightEffect />
            <PrizeInfo>
              <h2>{Prize.title}</h2>
              <p>{Prize.amount}</p>
            </PrizeInfo>
          </Podium>
        ))}
      </TopPrizeContainer>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-evenly',  
        marginTop: '20px',
        gap: '30px', 
        fontFamily: 'Mokoto',
        color: '#FFFFFF', 
      }}>
        <Tab title="Cyber Security Hack" prizes={cyber} />
        <Tab title="Best Hacks Prizes" prizes={bestHacksPrizes} />
        <Tab title="Web 3 Prize" prizes={web3Prizes} />
        <Tab title="Wolfram Alfa Award" prizes={wolframPrizes} />
      </div>

    </PrizeContainer>
      
  );
};

export default PrizesPage;

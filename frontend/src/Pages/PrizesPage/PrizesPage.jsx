import React from 'react';
import styled, { keyframes } from 'styled-components';
import SpinningGear from './SpinningGear'; // Import the SpinningGear component
import SpinningGearReverse from './SpinningGearReverse';
import Tab from './tab'; // Import the Tab component
import podium from './img/podium.png';
import './style/style.css';
//npm install styled-components
//npm install styled-components@latest
//npm install react-spring

const PrizeContainer = styled.div`
  margin: auto;
  margin-bottom: 8vh;
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
  background-image: linear-gradient(45deg, #ffc7c9, #ba292e, #d96f6f, #e50717);
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 8vw;
  margin: 1vw;
  animation:
    ${shine} 4s linear infinite,
    ${pulsate} 1.5s ease-in-out infinite;
  position: relative;
  overflow-wrap: break-word;
  word-wrap: break-word;
  user-select: none;
`;

const TotalPrizeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 5vw;
  gap: 2vw;
  user-select: none;
`;

const TopPrizeContainer = styled.section`
  margin: auto;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  flex-wrap:wrap;
  text-align: center;
  max-width: 1200px; /* Updated from width */
  width: 100%;
  
  @media (max-width: 850px) {
    width:
    margin-top: 8vh;
    flex-direction: row; /* Stack items vertically on smaller screens */
    align-items: space-evenly; /* Center items vertically */
  }

  @media (max-width: 750px) {
    margin-top: 0vh;
    flex-direction: row; /* Stack items vertically on even smaller screens */
    align-items: space-evenly; /* Center items vertically */
  }

  @media (max-width: 436px) {
    margin-top: 0vh;
    flex-direction: row; /* Stack items vertically on even smaller screens */
    align-items: space-evenly; /* Center items vertically */
    width: 100%;
  }

  @media (max-width: 400px) {
    margin-top: 0vh;
    flex-direction: row; /* Stack items vertically on even smaller screens */
    align-items: space-evenly; /* Center items vertically */
    width: 100%;
  }
  @media (max-width: 390px) {
    flex-direction: row; 
    width: 100vw;
    align-items: space-between; /* Center items vertically */
    display: flex;
    align-items: stretch;
    justify-content-evenly;
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
  width: 350px;
  height: 150px;
  position: relative;
  margin: 150px auto 3vh auto;

  &:before {
    content: '';
    position: absolute;
    bottom: 65%;
    left: 50%;
    transform-origin: bottom center;
    transform: translateX(-50%);
    width: 250px;
    height: 280px;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 100%
    ); // White light
    //background: linear-gradient(0deg, rgba(145, 3, 7, 0.3) 0%, rgba(145, 3, 0, 0) 100%); //red light
    clip-path: polygon(25% 100%, 75% 100%, 100% 0%, 0% 0%);
    animation: ${shineLight};
    z-index: 0;
  }
`;

const PrizeTitle = styled.h3`
  position: absolute;
  bottom: 150%;
  left: 32%; // Adjusted left value
  transform: translate(-50%, 50%); // Centered vertically and horizontally
  animation: ${moveUpDown} 2s ease-in-out infinite;
  color: gold;
  //color:white;
  font-size: 30px;
  z-index: 1;
  font-family: 'Mokoto', sans-serif;
  text-shadow:
    0 0 20px #ffd700,
    0 0 30px #ffd700; //yellow shadow
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
  transform: translate(-50%, 50%); // Centered vertically and horizontally
  animation: ${moveUpDown} 2s ease-in-out infinite;
  color: white;
  text-shadow:
    0 0 10px silver,
    0 0 20px silver,
    0 0 30px silver,
    0 0 40px silver;
`;

const Top_Prize = styled.section`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;

  @media (max-width: 850px) {
    width: 100%;
  }

  @media (max-width: 750px) {
    width: 100%;
    align-items: center;
    transform: scale(0.66);
  }
  @media (max-width: 390px) {
    width: fit-content;
    align-items: center;
    margin: 20px;
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
  bottom: ${(props) => props.bottom || '65%'};
  left: ${(props) => props.left || '50%'};
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
  animation-delay: ${(props) => props.delay || '0s'};
  opacity: 0;
`;

const PrizeDescription = styled.section`
  margin-top: 3vh;
  z-index: -1;
  @media (max-width: 436px) {
    height: 200px;
  }
`;

const PrizesPage = () => {
  const prizeTracks = [
    { title: 'Best AI Hack', amount: '$400' },
    { title: 'Best Education Hack', amount: '$400' },
    { title: 'Cyber Security Hack', amount: '$400' },
  ];
  const smallPrize1 = [
    { title: 'Best Mobile Hack', amount: 'Wireless Earbuds' },
    { title: 'Best Startup', amount: 'Mini Projector' },
    { title: 'Best Sustainability Hack', amount: 'Reusable Notepad' },
    { title: 'Best Data Science Hack', amount: 'Anker Battery Pack' },
		{ title: "Best Game", amount: "$20 Gift Card + Misc Game Dev Prizes"}
  ];
  const smallPrize2 = [
    { title: 'Best First Time Hack', amount: 'JBL Go 3 (Fire Speaker)' },
    { title: 'Ugliest Code Competition', amount: '$50' },
  ];
  const sponsorPrizes = [
    // { title: 'Web3', amount: '$500' },
    {
      title: 'The Wolfram Award (35)',
      amount: '$375 in cash value per person',
    },
    {
      title: 'Google Cloud Credit',
      amount: '$25 Credit',
    },
    {
      title: 'Best Use of Google Cloud',
      amount: 'Google Cloud Backpack',
    },
    {
      title: 'Best Use of MongoDB Atlas',
      amount: 'M5GO IoT starter kit',
    },
    {
      title: 'Most Creative Use of GitHub',
      amount: 'GitHub Swag',
    },
    {
      title: 'Best Domain Name from GoDaddy Registry',
      amount: 'Hack from Home Kit',
    },
    {
      title: 'Best Use of MATLAB',
      amount: 'Wireless YoYo Speaker',
    },
    {
      title: 'Best Use of AI in Education',
      amount: 'TickTime Pomodoro Timer',
    },
    {
      title: 'Best Use of TinyMCE',
      amount: '3D Printing Pen',
    },
    {
      title: 'Best Use of Soroban',
      amount: 'Power Bank',
    },
    {
      title: 'Echo3D',
      amount: '1 Month Business Free Trial',
    },
  ];
  const topPrizes = [
    { title: '#2 Best Hack', amount: '$750' },
    { title: '#1 Best Hack', amount: '$1,500' },
    { title: 'Best in Patient Safety', amount: '$1,000' },
  ];

  return (
    <PrizeContainer>
      <TotalPrizeContainer>
        <SpinningGear />
        <TotalPrize>$18,875&nbsp;in Prizes</TotalPrize>
        <SpinningGearReverse />
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
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="otherprizes"
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            width: '90%',
            marginTop: '-50px',
            marginBottom: '20px',
            gap: '40px',
            fontFamily: 'Mokoto',
            color: '#FFFFFF',
          }}
          className="Tab"
        >
          <Tab title="Major Prize Tracks" prizes={prizeTracks} />
          <Tab title="Minor Prize Tracks" prizes={smallPrize1} />
          <Tab title="Beginner Prizes" prizes={smallPrize2} />
          <Tab title="Sponsor Prizes" prizes={sponsorPrizes} />
        </div>
      </div>
      <h2 style={{ textAlign: 'center', margin: '0px 20px' }}>
        ... and a Raffle Prize of an Event Banner and Amazon Echo Dot Speaker!
      </h2>
    </PrizeContainer>
  );
};

export default PrizesPage;

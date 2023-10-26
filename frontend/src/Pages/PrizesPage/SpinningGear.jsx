import React from 'react';
import { animated, useSpring } from 'react-spring';
import gearImage from './img/gear2.png';
import styled from 'styled-components';

const SpinningGearImg = styled(animated.img)`
  width: 20vw;
  height: auto;
  @media (max-width: 700px) {
    display: none;
  }
`;

const SpinningGear = () => {
  const props = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
    loop: true,
    config: { duration: 5000 }, // Adjust duration as needed
  });

  return (
    <SpinningGearImg style={props} src={gearImage} alt="Spinning Gear" /> //black gear
    //<animated.img style={props} src={gearImage} alt="Spinning Gear" width="400" height="400" /> //red gear
  );
};

export default SpinningGear;

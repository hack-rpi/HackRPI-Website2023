import React, { useState } from 'react';
//import styled, { keyframes } from 'styled-components';
import styled, { keyframes, css } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  font-size: 20px; 
  user-select: none; 
  
`;

const Gear = styled.div`
  font-size: 32px;
  margin-right: 10px;
  animation: ${props => (props.spinning ? css`${spin} 2s linear infinite` : 'none')};
  user-select: none; 
`;


const Dropdown = styled.div`
  display: ${props => (props.open ? 'block' : 'none')};
  background-color: #353535;  
  border: 1px solid #ccc;
  position: absolute;
  z-index: 1;
  top: 50px;
  width: 200px;  // Fixed width
`;

const Prize = styled.div`
  padding: 8px 16px;
  color: red;  // Red text
`;

const Tab = ({ title, prizes }) => {
  const [open, setOpen] = useState(false);
  const [spinning, setSpinning] = useState(false);

  const handleGearClick = () => {
    setSpinning(true);
    setOpen(!open);
    setTimeout(() => setSpinning(false), 2000); // Stop spinning after 2s
  };

  return (
    <div style={{ position: 'relative', marginRight: '40px' }}>  {/* Increase marginRight */}
    <TabContainer onClick={handleGearClick}>
      <Gear spinning={spinning}>⚙️</Gear>
      {title}
    </TabContainer>
    <Dropdown open={open}>
      {prizes.map((prize, index) => (
        <Prize key={index}>{prize.title}: {prize.amount}</Prize>
      ))}
    </Dropdown>
  </div>
  );
};

export default Tab;

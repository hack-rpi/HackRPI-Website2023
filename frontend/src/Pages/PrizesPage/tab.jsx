import styled, { keyframes, css } from 'styled-components';
import React, { useState } from 'react';

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
  flex-direction: row; // changed from column to row
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  font-size: 20px; 
  user-select: none; 
`;

const Gear = styled.div`
  font-size: 32px;
  // Removed margin-bottom as it's not needed anymore
  animation: ${props => (props.spinning ? css`${spin} 2s linear infinite` : 'none')};
  user-select: none; 
`;

const Dropdown = styled.div`
  background-color: #353535;  
  border: 1px solid #ccc;
  z-index: 1;
  width: 250px; 
  max-height: ${props => (props.open ? '500px' : '0')}; 
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  border: none;
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
    setTimeout(() => setSpinning(false), 2000); 
  };

  return (
    <div style={{ marginRight: '40px' }}>
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
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
const Gear = styled.div`
  font-size: 32px;
  // Removed margin-bottom as it's not needed anymore
  animation: ${props => (props.spinning ? css`${spin} 2s linear infinite` : 'none')};
  user-select: none; 
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: row; // changed from column to row
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  font-size: 20px; 
  user-select: none; 
  &:hover {
    background-color: #888;
    color: #fff;
    border-radius: 18px; 
    & > ${Gear} {
      animation: ${css`${spin} 2s linear infinite`};
    }
  }
`;


const Dropdown = styled.div`
  background-color: #353535;
  border: 1px solid #ccc;
  z-index: 1;
  width: 250px;
  max-height: ${props => (props.open ? '500px' : '0')};
  overflow-y: auto; 
  transition: max-height 0.5s ease-in-out;
  border: none;
  display: block;
  min-height: fit-content;
`;

const Prize = styled.div`
  padding: 8px 16px;
  color: red;
  white-space: normal; 
`;

const Tab = ({ title, prizes }) => {
  const [open, setOpen] = useState(true);
  const [spinning, setSpinning] = useState(false);

  const handleGearClick = () => {
    setSpinning(true);
    setOpen(!open);
    setTimeout(() => setSpinning(false), 2000); 
  };

  return (
    <div style={{ marginRight: '40px' }}>
      <TabContainer onClick={handleGearClick} className="TabContainer">
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
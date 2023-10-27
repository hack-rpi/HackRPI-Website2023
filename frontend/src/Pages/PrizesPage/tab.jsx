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
  animation: ${(props) =>
    props.spinning
      ? css`
          ${spin} 2s linear infinite
        `
      : 'none'};
  user-select: none;
`;

const TabContainer = styled.div`
  display: flex;
  z-index: 10;
  position: relative;
  text-align: ${(props) => (props.centerTitle ? 'center' : 'left')};
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => (props.centerTitle ? 'center' : 'flex-start')}; /* Conditionally set justification */
  cursor: pointer;
  white-space: nowrap;
  font-size: 20px;
  user-select: none;
  width: 100%; /* Added a fixed width for consistency */
`;

const Dropdown = styled.div`
  background-color: #353535;
	border-radius: 10px;
  border: 1px solid #ccc;
  z-index: 1;
  width: 350px;
  height: ${(props) => (props.open ? '225px' : '0')};
  overflow-y: hidden;
  transition: height 0.5s ease-in-out;
  border: none;
  display: block;
  min-height: fit-content;
`;

const Prize = styled.div`
  padding: 4px 16px;
  color: white;
  white-space: normal;
  font-family: 'Poppins', 'Arial';
  font-size: large;
  align-items: inline;

  p {
    display: inline; 
    margin: 0; 
  }
  .Prize_Amount {
    color: red;
  }
`;

const Tab = ({ title, prizes }) => {
  const [open, setOpen] = useState(true);
  const [spinning, setSpinning] = useState(false);
  const handleGearClick = () => {
    setSpinning(true);
    setOpen(!open);
    setTimeout(() => setSpinning(false), 1000);
  };
  return (
    <div>
      <TabContainer onClick={handleGearClick} className="TabContainer" centerTitle="center">
        <Gear spinning={spinning}>⚙️</Gear>
        <h3 style={{marginBottom:'0', fontFamily:'Mokoto', fontSize: '25px', marginLeft:'8px'}}>{title}</h3>
      </TabContainer>
      <Dropdown open={open}>
        {prizes.map((prize, index) => (
          <Prize key={index}>
            <p>• {prize.title}: </p>
            <p className='Prize_Amount'>{prize.amount} </p>
          </Prize>
        ))}
      </Dropdown>
    </div>
  );
};

export default Tab;

//import styled, { keyframes } from 'styled-components';
import styled, { keyframes, css } from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';

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
  background-color: #353535;  
  border: 1px solid #ccc;
  position: absolute;
  z-index: 1;
  top: 50px;
  width: 250px; 
  max-height: ${props => (props.open ? '500px' : '0')}; 
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  border: none;

  height: ${props => (props.open ? `${props.height}px` : '0')};
  transition: height 0.5s ease-in-out;
`;

const Prize = styled.div`
  padding: 8px 16px;
  color: red;  // Red text
`;

const Tab = ({ title, prizes }) => {
  const [open, setOpen] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (open && dropdownRef.current) {
      setDropdownHeight(dropdownRef.current.getBoundingClientRect().height);
    } else {
      setDropdownHeight(0);
    }
  }, [open]);

  const handleGearClick = () => {
    setSpinning(true);
    setOpen(!open);
    setTimeout(() => setSpinning(false), 2000); 
  };

  return (
    <div style={{ 
      position: 'relative', 
      marginRight: '40px',
      marginBottom: `${dropdownHeight}px` 
    }}>
      <TabContainer onClick={handleGearClick}>
        <Gear spinning={spinning}>⚙️</Gear>
        {title}
      </TabContainer>
      <Dropdown ref={dropdownRef} open={open}>
        {prizes.map((prize, index) => (
          <Prize key={index}>{prize.title}: {prize.amount}</Prize>
        ))}
      </Dropdown>
    </div>
  );
};

export default Tab;

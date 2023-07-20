import React, { useState, useEffect, useRef } from 'react';

const GlitchEffect = ({ children, style }) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '1234567890';
  const [glitchedText, setGlitchedText] = useState('');
  const [originalText, setOriginalText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const h1Ref = useRef(null);

  useEffect(() => {
    const handleMouseOver = () => {
      setIsAnimating(true);
      setOriginalText(children);
      let iteration = -2;
      const interval = setInterval(() => {
        setGlitchedText(() =>
          originalText
            .split('')
            .map((letter, index) => {
              if (index < iteration || letter === ' ') {
                return originalText[index];
              }
              const grey = Math.floor(Math.random() * 256);
              const color = `rgb(${grey}, ${grey}, ${grey})`;
              if (originalText[index] == 'X') {
                return `<span style="color: ${color}; font-family: 'Mokoto'; font-size: 1em;">${numbers[Math.floor(Math.random() * 9)]}</span>`;
              }
              return `<span style="color: ${color}; font-family: 'Mokoto'; font-size: 1em;">${letters[Math.floor(Math.random() * 26)]}</span>`;
            })
            .join(''),
        );

        if (iteration >= originalText.length) {
          clearInterval(interval);
          setIsAnimating(false);
        }

        iteration += 1 / 15;
      }, 10);
    };

    const handleMouseOut = () => {
      if (!isAnimating) {
        setGlitchedText('');
      }
    };

    const h1Element = h1Ref.current;
    h1Element.addEventListener('mouseover', handleMouseOver);
    h1Element.addEventListener('mouseout', handleMouseOut);

    return () => {
      h1Element.removeEventListener('mouseover', handleMouseOver);
      h1Element.removeEventListener('mouseout', handleMouseOut);
    };
  }, [children, originalText, isAnimating]);

  return <h1 style={{...style, fontFamily: 'Mokoto'}} ref={h1Ref} dangerouslySetInnerHTML={{ __html: glitchedText || children }}></h1>;
};

export default GlitchEffect;
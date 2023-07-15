import React, { useState, useEffect } from 'react';

const GlitchEffect = ({ children, style }) => {
  const letters = 'ABCDEFGHIJKLNOPQRSTUVXYZ';
  const numbers = '1234567890';
  const [glitchedText, setGlitchedText] = useState('');
  const [originalText, setOriginalText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleMouseOver = () => {
      setIsAnimating(true);
      setOriginalText(children);
      let iteration = -2;
      const interval = setInterval(() => {
        setGlitchedText((prevText) =>
          originalText
            .split('')
            .map((letter, index) => {
              if (index < iteration || letter === ' ') {
                return originalText[index];
              }
              if (originalText[index] == 'X') {
                return numbers[Math.floor(Math.random() * 9)];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join(''),
        );

        if (iteration >= originalText.length) {
          clearInterval(interval);
          setIsAnimating(false);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const handleMouseOut = () => {
      if (!isAnimating) {
        setGlitchedText('');
      }
    };

    const h1Element = document.querySelector('h1');
    h1Element.addEventListener('mouseover', handleMouseOver);
    h1Element.addEventListener('mouseout', handleMouseOut);

    return () => {
      h1Element.removeEventListener('mouseover', handleMouseOver);
      h1Element.removeEventListener('mouseout', handleMouseOut);
    };
  }, [children, originalText, isAnimating]);

  return <h1 style={style}>{glitchedText || children}</h1>;
};

export default GlitchEffect;

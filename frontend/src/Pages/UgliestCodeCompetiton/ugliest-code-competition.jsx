import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CodePopup from './CodePopup'; // Import the CodePopup component

const UgliestCodeCompetition = () => {
  const prizes = [
    { place: 'First Place Award', prize: 'An iPhone 15 Pro' },
    { place: 'Second Place Award', prize: 'An AirPods Max' },
    { place: 'Third Place Award', prize: 'An Apple Watch Series 9' },
  ];

  const ugliestCodeArray = [
    {
      title: 'Ugliest Code 1',
      code: `public class Square 
      {
          public static void main(String args[]) 
          {
              System.out.println("*"+"*"+"*"+"*"+"*"); 
              System.out.println("*"+"*"+"*"+"*"+"*"); 
              System.out.println("*"+"*"+"*"+"*"+"*"); 
              System.out.println("*"+"*"+"*"+"*"+"*"); 
              System.out.println("*"+"*"+"*"+"*"+"*"); 
          } 
      }`,
    },
    {
        title: 'Ugliest Code 2',
        code: `int dow(int y, int m, int d) { 
          static int t[] = {0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4}; 
          y -= m < 3; 
          return (y + y/4 - y/100 + y/400 + t[m-1] + d) % 7; 
        }`,
    },
    {
      title: 'Ugliest Code 3',
      code: `function S1E23(){
        document.getElementById("Season3div").style.display="none";
        // ... (rest of the code)
      }
    }`,
    },
  ];

  const [selectedPrizeIndex, setSelectedPrizeIndex] = useState(null);
  const [showWindows, setShowWindows] = useState(Array(ugliestCodeArray.length).fill(false));

  const sectionStyle = {
    // ... (unchanged)
  };

  // ... (unchanged)

  const toggleWindow = (index) => {
    setShowWindows((prevShowWindows) => {
      const newShowWindows = [...prevShowWindows];
      newShowWindows[index] = !newShowWindows[index];
      return newShowWindows;
    });

    setSelectedPrizeIndex(index);
  };

  return (
    <section id="ugliest-code-competition" style={sectionStyle}>
      {/* ... (unchanged) */}
      {showWindows.map((showWindow, index) => (
        showWindow && (
          <CodePopup
            key={index}
            title={ugliestCodeArray[selectedPrizeIndex].title}
            onClose={() => toggleWindow(index)}
            code={ugliestCodeArray[selectedPrizeIndex].code}
          />
        )
      ))}
    </section>
  );
};

export default UgliestCodeCompetition;

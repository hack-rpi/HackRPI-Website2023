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

  const [showWindows, setShowWindows] = useState(Array(ugliestCodeArray.length).fill(false));
  const [selectedPrize, setSelectedPrize] = useState({});

  const sectionStyle = {
    padding: '20px',
    background: 'url("unset") no-repeat center center',
    backgroundSize: 'cover',
    textAlign: 'center',
    position: 'relative',
    maxWidth: '800px', 
    margin: '0 auto', 
  };
  
  const h1Style = {
    color: '#f50057',
    fontSize: '2.5em',
    marginBottom: '10px', 
  };
  
  const pStyle = {
    fontSize: '1.2em',
    color: 'gray', 
    maxWidth: '600px', 
    margin: '0 auto', 
    lineHeight: '1.5',
  };
    
  
  const buttonStyle = {
    backgroundColor: 'white',
    color: 'rgb(145, 3, 7)',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
    borderRadius: '5px',
  };

  const awardsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  };

  const articleStyle = {
    flex: 1,
    marginRight: '10px',
    border: '1px solid #eee',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const h2Style = {
    color: '#f50057',
    marginBottom: '10px',
  };

  const toggleWindow = (index) => {
    setShowWindows((prevShowWindows) => {
      const newShowWindows = [...prevShowWindows];
      newShowWindows[index] = !newShowWindows[index];
      return newShowWindows;
    });
    
    setSelectedPrize(ugliestCodeArray[index]);
  };
  

  return (
    <section id="ugliest-code-competition" style={sectionStyle}>
      <h1 style={h1Style}>UGLIEST CODE COMPETITION</h1>
      <p style={pStyle}>
        An "Ugliest Code Competition" is a humorous contest where programmers intentionally create
        the most convoluted and poorly written code.
      </p>
      <button style={buttonStyle} onClick={() => toggleWindow(0)}>
        Join now
      </button>
      <div className="awards" style={awardsStyle}>
        {prizes.map((prize, index) => (
          <article key={index} style={articleStyle} onClick={() => toggleWindow(index)}>
            <h2 style={h2Style}>{prize.place}</h2>
            <p>{prize.prize}</p>
          </article>
        ))}
      </div>

      {showWindows.map((showWindow, index) => (
        showWindow && (
          <CodePopup
            key={index + selectedPrize.title} // Use a dynamic key to ensure uniqueness
            title={selectedPrize.title}
            onClose={() => toggleWindow(index)}
            code={selectedPrize.code}
          />
        )
      ))}
    </section>
  );
};


export default UgliestCodeCompetition;

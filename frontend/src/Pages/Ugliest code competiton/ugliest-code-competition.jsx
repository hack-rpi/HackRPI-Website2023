import React, { useState } from 'react';

const UgliestCodeCompetition = () => {
  const prizes = [
    { place: 'First Place Award', prize: 'An iPhone 15 Pro' },
    { place: 'Second Place Award', prize: 'An AirPods Max' },
    { place: 'Third Place Award', prize: 'An Apple Watch Series 9' },
  ];

  const [showWindow, setShowWindow] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState({});

  const sectionStyle = {
    padding: '20px',
    background: 'url("unset") no-repeat center center',
    backgroundSize: 'cover',
    textAlign: 'center',
    position: 'relative',
  };

  const h1Style = {
    color: '#f50057',
    fontSize: '2.5em',
  };

  const buttonStyle = {
    backgroundColor: '#f50057',
    color: '#fff',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
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

  const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
    zIndex: 9999, // Highest priority
  };

  const h2Style = {
    color: '#f50057',
    marginBottom: '10px',
  };

  const toggleWindow = (prize) => {
    setShowWindow(!showWindow);
    setSelectedPrize(prize);
  };

  return (
    <section id="ugliest-code-competition" style={sectionStyle}>
      <h1 style={h1Style}>UGLIEST CODE COMPETITION</h1>
      <p>An "Ugliest Code Competition" is a humorous contest where programmers intentionally create the most convoluted and poorly written code.</p>
      <button style={buttonStyle} onClick={() => toggleWindow({})}>
        Join now
      </button>
      <div className="awards" style={awardsStyle}>
        {prizes.map((prize, index) => (
          <article key={index} style={articleStyle} onClick={() => toggleWindow(prize)}>
            <h2 style={h2Style}>{prize.place}</h2>
            <p>{prize.prize}</p>
          </article>
        ))}
      </div>
      {showWindow && (
        <div style={popupStyle}>
          <h2>{selectedPrize.place}</h2>
          <p>{selectedPrize.prize}</p>
          <button onClick={() => setShowWindow(false)}>Close</button>
        </div>
      )}
    </section>
  );
};

export default UgliestCodeCompetition;
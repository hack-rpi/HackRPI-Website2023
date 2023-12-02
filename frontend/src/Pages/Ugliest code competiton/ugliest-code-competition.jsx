import React from 'react';
import './styles.css'

const UgliestCodeCompetition = () => {
  // Define prizes as a JSON object
  const prizes = [
    { place: 'First Place Award', prize: 'An iPhone 15pro' },
    { place: 'Second Place Award', prize: 'An AirPods Max' },
    { place: 'Third Place Award', prize: 'An Apple Watch Series 9' },
  ];

  return (

      <section id="ugliest-code-competition" style={{ padding: '20px' }}>
        <h1 style={{ color: '#f50057' }}>UGLIEST CODE COMPETITION</h1>
        <p>An "Ugliest Code Competition" is a humorous contest where programmers intentionally create the most convoluted and poorly written code.</p>
        <button style={{ backgroundColor: '#f50057', color: '#fff', padding: '10px', border: 'none', cursor: 'pointer' }}>Join now</button>
        {/* Dynamically render prizes */}
        <div className="awards" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          {prizes.map((prize, index) => (
            <article key={index} style={{ flex: 1, marginRight: '10px' }}>
              <h2 style={{ color: '#f50057' }}>{prize.place}</h2>
              <p>{prize.prize}</p>
            </article>
          ))}
        </div>
      </section>
  );
};

export default UgliestCodeCompetition;

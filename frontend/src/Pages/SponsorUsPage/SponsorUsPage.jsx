import React from 'react';

function SponsorUsPage() {
  return (
    <div>
      <h2 
      style={{ 
        textAlign: 'center', 
        fontFamily: 'Mokoto',
        fontWeight: '400',
        color: 'white',
        fontSize: '3rem',
        marginTop: '50px'
    }}
    >
      Sponsor Us!
    </h2>
      <div style={{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        columnGap: '10%', 
        padding: '2% 10%'
      }}>
        <iframe 
        src="https://drive.google.com/file/d/17z1LSpUkCeY-AO3tYG5PfMv0U2FngzD_/preview"
        width="50%" 
        height="550" 
        allow="autoplay"
        ></iframe>
        <iframe 
        src="https://drive.google.com/file/d/17GguOFdq5aU5NuFXnHyLxxsXSzxryHQc/preview"
        width="50%" 
        height="550" 
        allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
}
export default SponsorUsPage;

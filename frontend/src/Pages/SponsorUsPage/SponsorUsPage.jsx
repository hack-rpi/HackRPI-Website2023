import React from 'react';

function SponsorUsPage() {
  return (
    <div>
      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        columnGap: '10%', padding: '2% 10%'
      }}>
        <iframe src="https://drive.google.com/file/d/17z1LSpUkCeY-AO3tYG5PfMv0U2FngzD_/preview"
                width="35%" height="480" allow="autoplay"></iframe>
        <iframe src="https://drive.google.com/file/d/17GguOFdq5aU5NuFXnHyLxxsXSzxryHQc/preview"
                width="35%" height="480" allow="autoplay"></iframe>
      </div>
    </div>
  );
}
export default SponsorUsPage;

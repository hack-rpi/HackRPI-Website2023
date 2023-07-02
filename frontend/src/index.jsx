import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar.jsx';
// import Timer from './Components/Timer/Timer.jsx';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import LandingPageMobile from './Pages/LandingPage/LandingPageMobile.jsx';
import FAQPage from './Pages/FAQPage/FAQPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts.css';
// import AboutPage from './Pages/AboutPage/aboutPage.jsx';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize(); // Check initial screen size

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#191919',
        overflow: 'hidden',
      }}
    >
      <NavBar />
      {/* <LandingPage /> */}
      {/* currently swapped for testming, swap back before commiting */}
      {isMobile ? <LandingPageMobile /> : <LandingPage />}
      {/* re-add if timer is fixed for both mobile and web */}
      {/* <Timer /> */}
      {/* <AboutPage /> */}
      <FAQPage />
    </div>
  );
}

export default App;

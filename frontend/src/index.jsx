import React from 'react';
import NavBar from './Components/NavBar/NavBar.jsx';
import Timer from './Components/Timer/Timer.jsx';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import FAQPage from './Pages/FAQPage/FAQPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts.css';
import AboutPage from './Pages/AboutPage/aboutPage.jsx';

function App() {
  return (
    <div style={{ backgroundColor: "#191919", overflow: "none", overscrollBehavior: "none"}}>
      <NavBar />
      <LandingPage />
      <Timer />
      <AboutPage />
      <FAQPage />
    </div>
  );
}

export default App;

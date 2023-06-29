import React from 'react';
import NavBar from './Components/NavBar/NavBar.jsx';
import Timer from './Components/Timer/Timer.jsx';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import FAQPage from './Pages/FAQPage/FAQPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts.css';

function App() {
  return (
    <div style={{overscrollBehavior: "none", overflow: "hidden", backgroundColor: "#191919"}}>
      <NavBar />
      <LandingPage />
      <Timer />
      <FAQPage />
    </div>
  );
}

export default App;

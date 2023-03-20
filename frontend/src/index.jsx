import React from 'react';
import NavBar from './Components/NavBar/NavBar.jsx';
import Timer from './Components/Timer/Timer.jsx';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import FAQPage from './Pages/FAQPage/FAQPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return(
        <>
            <NavBar/>
            <LandingPage/>
            <Timer/>
            <FAQPage/>
        </>
    );
}

export default App;

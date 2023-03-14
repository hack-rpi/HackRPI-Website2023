import React from 'react';
import NavBar from './Components/NavBar/NavBar.jsx';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import FAQPage from './Pages/FAQPage/FAQPage.jsx';

function App() {
    return(
        <>
            <NavBar/>
            <LandingPage/>
            <FAQPage />
        </>
    );
}

export default App;

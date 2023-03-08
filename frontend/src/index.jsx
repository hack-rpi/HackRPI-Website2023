import React from 'react';
import NavBar from './Components/NavBar/NavBar.jsx';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Container';
function App() {
    return(
        <>
            <NavBar/>
            <LandingPage/>
        </>
    );
}

export default App;

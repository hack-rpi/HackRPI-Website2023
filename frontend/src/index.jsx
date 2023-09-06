import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar.jsx';
// import Timer from './Components/Timer/Timer.jsx';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import LandingPageMobile from './Pages/LandingPage/LandingPageMobile.jsx';
import FAQPage from './Pages/FAQPage/FAQPage.jsx';
import AboutPage from './Pages/AboutPage/AboutPage.jsx';
import Footer from './Components/Footer/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import SponsorPage from './Pages/SponsorPage/SponsorPage.jsx';
// import './fonts.css';
import StylePage from './style.jsx';

function App() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 900);
		};

		handleResize(); // Check initial screen size

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div>
      <StylePage />
			<NavBar />
			{/* <LandingPage /> */}
			{/* currently swapped for testming, swap back before commiting */}
			{isMobile ? <LandingPageMobile /> : <LandingPage />}
			{/* re-add if timer is fixed for both mobile and web */}
			{/* <Timer /> */}
			<AboutPage />
			<FAQPage />
			<SponsorPage/>
			<Footer />
		</div>
	);
}

export default App;

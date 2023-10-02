import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar.jsx';
// import Timer from './Components/Timer/Timer.jsx';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import LandingPageMobile from './Pages/LandingPage/LandingPageMobile.jsx';
import FAQPage from './Pages/FAQPage/FAQPage.jsx';
import AboutPage from './Pages/AboutPage/AboutPage.jsx';
import PrizesPage from './Pages/Prizes/prizes.jsx';
import Footer from './Components/Footer/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import SponsorPage from './Pages/SponsorPage/SponsorPage.jsx';
import './style.css';
import { Routes, Route, Outlet } from 'react-router-dom';
// import './fonts.css';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';



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
			<Routes>
				<Route path="/" element={<Layout />}>
					{isMobile ?
						<Route index element={<LandingPageMobile />} />
							: <Route index element={<LandingPage />} />
					}
					{/* Landing Pages are the default route (as they should be) */}

					<Route path="about" element={<AboutPage />} />
					<Route path="faq" element={<FAQPage />} />
					<Route path="sponsors" element={<SponsorPage />} />


					<Route path="*" element={<ErrorPage />} />
					{/*Added in case someone goes to random nonexistent route...*/}

				</Route>
			</Routes>
		</div>
	);
}

function Layout() {
	return (
		<div>
			<NavBar/>
			<Outlet /> {/* Outlet = Current Route */}
			<Footer />
		</div>
	)
}

export default App;

import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar.jsx';
// import Timer from './Components/Timer/Timer.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import HomePageMobile from './Pages/HomePage/HomePageMobile.jsx';
import LandingPageMobile from './Pages/LandingPage/LandingPageMobile.jsx';
import FAQPage from './Pages/FAQPage/FAQPage.jsx';
import AboutPage from './Pages/AboutPage/AboutPage.jsx';
import Footer from './Components/Footer/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import SponsorPage from './Pages/SponsorPage/SponsorPage.jsx';
import './style.css';
import { Outlet } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import { createHashRouter, RouterProvider, } from "react-router-dom";


const router = createHashRouter([
	{
	  path: "/",
	  element: <Layout/>,
	  children: [
		{
		  index: true,
		  element:<HomePage />,
		},
		{
			path: "home",
			element: <HomePage />,
		},
		{
		  path: "faq",
		  element: <FAQPage/>,
		},
		{
		  path: "*",
		  element: <ErrorPage/>,
		},
	  ],
	},
  ]);
  

const mobileRouter = createHashRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <MobilePage />,
			},
			{
				path: '*',
				element: <ErrorPage />,
			},
		]
	},
]);

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
			{isMobile ? <RouterProvider router={mobileRouter} />
				: <RouterProvider router={router} />
			}
		</div>
	);
}

function MobilePage() {
	return (
		<div>
			<HomePageMobile />
			<FAQPage />
		</div>
	)
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

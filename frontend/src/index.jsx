import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar.jsx';
import MobileNavBar from './Components/NavBar/MobileNavBar.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import HomePageMobile from './Pages/HomePage/HomePageMobile.jsx';
import FAQPage from './Pages/FAQPage/FAQPage.jsx';
import PrizesPage from './Pages/PrizesPage/PrizesPage.jsx';
import MiniEventPage from './Pages/MiniEventPage/MiniEventPage.jsx';
import Footer from './Components/Footer/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import MeetTheTeamPage from './Pages/MeetTheTeamPage/MeetTheTeamPage.jsx';
import SponsorUsPage from './Pages/SponsorUsPage/SponsorUsPage.jsx';
import WorkshopPage from './Pages/WorkshopPage/WorkshopPage.jsx';
import './style.css';
import SchedulePage from './Pages/SchedulePage/SchedulePage.jsx';
import { Outlet } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import MapsPage from './Pages/MapsPage/MapsPage.jsx';

const router = createHashRouter([
  {
    path: '/',
    element: (
      <div>
        <NavBar />
        <Layout />
      </div>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'faq',
        element: <FAQPage />,
      },
      {
        path: 'schedule',
        element: <SchedulePage />,
      },
      {
        path: 'sponsor-us',
        element: <SponsorUsPage />,
      },
      {
        path: 'prizes',
        element: <PrizesPage />,
      },
      {
        path: 'maps',
        element: <MapsPage />,
      },
      {
        path: 'team',
        element: <MeetTheTeamPage />,
      },
      {
        path: 'workshops',
        element: <WorkshopPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

const mobileRouter = createHashRouter([
  {
    path: '/',
    element: (
      <div>
        <MobileNavBar />
        <Layout />
      </div>
    ),
    children: [
      {
        index: true,
        element: <HomePageMobile />,
      },
      {
        path: 'home',
        element: <HomePageMobile />,
      },
      {
        path: 'faq',
        element: <FAQPage />,
      },
      {
        path: 'schedule',
        element: <SchedulePage />,
      },
      {
        path: 'sponsor-us',
        element: <SponsorUsPage />,
      },
      {
        path: 'prizes',
        element: <PrizesPage />,
      },
      {
        path: 'maps',
        element: <MapsPage />,
      },
      {
        path: 'team',
        element: <MeetTheTeamPage />,
      },
      {
        path: 'workshops',
        element: <WorkshopPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
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
      {isMobile ? (
        <RouterProvider router={mobileRouter}>
          <Layout />
        </RouterProvider>
      ) : (
        <RouterProvider router={router}>
          <Layout />
        </RouterProvider>
      )}
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Outlet /> {/* Outlet = Current Route */}
      <Footer />
    </div>
  );
}

export default App;

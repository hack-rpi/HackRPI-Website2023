import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar.jsx';
import ThankYouNavBar from './Components/NavBar/ThankYouNavBar.jsx';
import ThankYouMobileNavBar from './Components/NavBar/ThankYouMobileNavBar.jsx';
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
import ThankYouPage from './Pages/ThankYouPage/ThankYouPage.jsx';
import ThankYouFooter from './Components/Footer/ThankYouFooter.jsx';
import UgliestCodeCompetition from './Pages/UgliestCodeCompetition/UgliestCodeCompetition.jsx';

const router = createHashRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: (
          <div>
            <ThankYouNavBar />
            <ThankYouPage />
            {/*<LayoutThankYou />*/}
          </div>
        ),
      },
      {
        path: 'thank-you',
        element: (
          <div>
            <ThankYouNavBar />
            <ThankYouPage />
            {/*<LayoutThankYou />*/}
          </div>
        ),
      },
      {
        path: 'home',
        element: (
          <div>
            <NavBar />
            <HomePage />
            <Layout />
          </div>
        ),
      },
      {
        path: 'faq',
        element: (
          <div>
            <NavBar />
            <FAQPage />
            <Layout />
          </div>
        ),
      },
      {
        path: 'schedule',
        element: (
          <div>
            <NavBar />
            <SchedulePage />
            <Layout />
          </div>
        ),
      },
      {
        path: 'sponsor-us',
        element: (
          <div>
            <NavBar />
            <SponsorUsPage />
            <Layout />
          </div>
        ),
      },
      {
        path: 'prizes',
        element: (
          <div>
            <NavBar />
            <PrizesPage />
            <Layout />
          </div>
        ),
      },
      {
        path: 'maps',
        element: (
          <div>
            <NavBar />
            <MapsPage />
            <Layout />
          </div>
        ),
      },
      {
        path: 'team',
        element: (
          <div>
            <NavBar />
            <MeetTheTeamPage />
            <Layout />
          </div>
        ),
      },
      {
        path: 'workshops',
        element: (
          <div>
            <NavBar />
            <WorkshopPage />
            <Layout />
          </div>
        ),
      },
      {
        path: 'ugliest-code-competition',
        element: (
          <div>
            <NavBar /> {/* Replace with your actual NavBar component */}
            <UgliestCodeCompetition />
            <Layout /> {/* Replace with your actual Footer component */}
          </div>
        ),
      },
      {
        path: '*',
        element: (
          <div>
            <ThankYouNavBar />
            <ErrorPage />
            <LayoutThankYou />
          </div>
        ),
      },
    ],
  },
]);

const mobileRouter = createHashRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: (
          <div>
            <ThankYouMobileNavBar />
            <ThankYouPage />
            {/*<LayoutThankYou />*/}
          </div>
        ),
      },
      {
        path: 'thank-you',
        element: (
          <div>
            <ThankYouMobileNavBar />
            <ThankYouPage />
            {/*<LayoutThankYou />*/}
          </div>
        ),
      },
      {
        path: 'home',
        element: (
          <div>
            <MobileNavBar />
            <HomePageMobile />
            <Layout />
          </div>
        ),
      },
      {
        path: 'faq',
        element: (
          <div>
            <MobileNavBar />
            <FAQPage />
            <Layout />
          </div>
        ),
      },
      {
        path: 'schedule',
        element: (
          <div>
            <MobileNavBar />
            <SchedulePage />
            <Layout />
          </div>
        ),
      },
      {
        path: 'sponsor-us',
        element: (
          <div>
            <MobileNavBar />
            <SponsorUsPage />
            <Layout />
          </div>
        ),
      },
      {
        path: 'prizes',
        element: (
          <div>
            <MobileNavBar />
            <PrizesPage />
            <Layout />
          </div>
        ),
      },
      {
        path: 'maps',
        element: (
          <div>
            <MobileNavBar />
            <MapsPage />
            <Layout />
          </div>
        ),
      },
      {
        path: 'team',
        element: (
          <div>
            <MobileNavBar />
            <MeetTheTeamPage />
            <Layout />
          </div>
        ),
      },
      {
        path: 'workshops',
        element: (
          <div>
            <MobileNavBar />
            <WorkshopPage />
            <Layout />
          </div>
        ),
      },
      {
        path: 'ugliest-code-competition',
        element: (
          <div>
            <MobileNavBar />
            <UgliestCodeCompetition />
            <Layout />
          </div>
        ),
      },
      {
        path: '*',
        element: (
          <div>
            <ThankYouMobileNavBar />
            <ErrorPage />
            <LayoutThankYou />
          </div>
        ),
        
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

function LayoutThankYou() {
  return (
    <div>
      <Outlet />
      <ThankYouFooter />
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

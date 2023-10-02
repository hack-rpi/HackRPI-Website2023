import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './index.jsx';
import './fonts.css';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode> {/* might not be necessary, was in tutorial tho */}
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </React.StrictMode>
);

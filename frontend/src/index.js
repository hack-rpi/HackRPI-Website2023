import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './index.jsx';
import './fonts.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode> {/* might not be necessary, was in tutorial tho */}
       <App />
    </React.StrictMode>
);

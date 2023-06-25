import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './index.jsx';
import {BrowserRouter} from "react-router-dom";
import styles from './fonts.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </>
);

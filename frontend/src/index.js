import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './index.jsx';
import {BrowserRouter} from "react-router-dom";
import './fonts.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <div style={{ overscrollBehavior: "none", overflow: "hidden", backgroundColor: "#191919"}}>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </div>
);

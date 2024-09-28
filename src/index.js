import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import Header from './templates/Header';
import Footer from './templates/Footer';
import About from './templates/About';
import Projects from './templates/Projects';
import Menu from './templates/Menu';
import NotFound from './templates/NotFound';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter basename="/aaron.wang">
            <Routes>
                <Route index exact path="/" element={<About />}/>
                <Route path="projects" element={<Projects />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);

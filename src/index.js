import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Bpp from './Bpp';
import About from './templates/About';
import NotFound from './NotFound';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter basename="/aaron.wang">
            <Header />
            <Routes>
                <Route index exact path="/" element={<About />}/>
                <Route path="about" element={<Bpp />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);

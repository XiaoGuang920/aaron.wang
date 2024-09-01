import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './templates/Header';
import Footer from './templates/Footer';
import About from './templates/About';
import Projects from './templates/Projects';
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
                <Route path="projects" element={<Projects />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);

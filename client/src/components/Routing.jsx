import React from "react";
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import LandingPage from "./LandingPage";
import Contact from './Contact';

export default function Routing() {
    return (
        <>
        <div id="routing">
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
        </>
    )
}
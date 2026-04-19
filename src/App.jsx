import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Skills" element={<Skills />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/contact" element={<ContactUs />}/>
      </Routes>
      <Footer />
    </div>
  )
}

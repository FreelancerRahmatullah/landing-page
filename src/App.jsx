import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Services from './pages/Services';
import Footer from './components/Footer';
import ProjectGallery from './pages/ProjectGallery';
import UserList from './pages/UserList';
import ShoppingCart from './pages/ShoppingCart';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Skills" element={<Skills />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/project-gallery" element={<ProjectGallery />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/users" element={<UserList />}/>
        <Route path="/shop" element={<ShoppingCart />}/>
      </Routes>
      <Footer />
    </div>
  )
}

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './pages/header'; 
import Footer from './pages/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Legal from './pages/mentions-legales';
import About from './pages/About';
import MentionsLegales from './pages/mentions-legales';


function App() {
  return (
    <>
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/about" element={<About />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
      <Footer/ >
    </>
  );
}

export default App;

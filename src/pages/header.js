import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="logo">JOHN DOE</div>
      
      {/* Menu  desktop */}
      <nav className="nav-menu">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/Portfolio">Réalisations</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Me contacter</Link></li>
        </ul>
      </nav>

      {/*  menu burger  mobile */}
      <div className="burger-menu" onClick={toggleMobileMenu}>
        <i className="fas fa-bars"></i>
        
      </div>

     
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMobileMenu}>Accueil</Link>
        <Link to="/services" onClick={toggleMobileMenu}>Services</Link>
        <Link to="/Portfolio" onClick={toggleMobileMenu}>Réalisations</Link>
        <Link to="/blog" onClick={toggleMobileMenu}>Blog</Link>
        <Link to="/contact" onClick={toggleMobileMenu}>Me contacter</Link>
      </div>
    </header>
  );
}

export default Header;

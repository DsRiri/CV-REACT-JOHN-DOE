import React from 'react';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import '../pages/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>John Doe</h3>
          <p>40 Rue Laure Diebold<br />69009 Lyon, France<br />Téléphone : 06 20 30 40 50</p>
        </div>

        <div className="footer-column">
          <h3>Liens utiles</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/contact">Me contacter</a></li>
            <li><a href="/mentions-legales">Mentions légales</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Mes dernières réalisations</h3>
          <ul>
            <li><a href="/portfolio">Fresh food</a></li>
            <li><a href="/portfolio">Restaurant Akira</a></li>
            <li><a href="/portfolio">Espace bien-être</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Mes derniers articles</h3>
          <ul>
            <li><a href="/Blog">Coder son site en HTML/CSS</a></li>
            <li><a href="/Blog">Vendre ses produits sur le web</a></li>
            <li><a href="/Blog">Se positionner sur Google</a></li>
          </ul>
        </div>
      </div>

      <div className="icon-container">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="https://github.com/github-john-doe" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

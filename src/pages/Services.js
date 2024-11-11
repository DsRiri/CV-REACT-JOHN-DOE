import React from 'react';
import { FaLaptop, FaCode, FaChartLine } from 'react-icons/fa';  // Importa le icone da Font Awesome
import '../index.css';
import Banner from './banner'; 


const Services = () => {
  return (
    <section className="services-section">
      <Banner />
      <div className="services-header">
        <h1>MON OFFRE DE SERVICES</h1>
        <p>Voici les prestations sur lesquelles je peux intervenir.</p>
        <hr className="underline" />
      </div>

      <div className="services-grid">
        {/* UX Design */}
        <div className="service-card">
          <div className="service-icon">
            <FaLaptop /> {/* Icona per UX Design */}
          </div>
          <h3>UX DESIGN</h3>
          <p>
            L'UX Design est une méthode de conception centrée sur l’utilisateur. Son but est d'offrir une expérience de navigation optimale à l’internaute.
          </p>
        </div>

        {/* Développement Web */}
        <div className="service-card">
          <div className="service-icon">
            <FaCode /> {/* Icona per Développement Web */}
          </div>
          <h3>DÉVELOPPEMENT WEB</h3>
          <p>
            Le développement de sites web repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.
          </p>
        </div>

        {/* Référencement */}
        <div className="service-card">
          <div className="service-icon">
            <FaChartLine /> {/* Icona per Référencement */}
          </div>
          <h3>RÉFÉRENCEMENT</h3>
          <p>
            Le référencement naturel d’un site, aussi appelé SEO, consiste à mettre des techniques en œuvre pour améliorer sa position dans les résultats des moteurs de recherche.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

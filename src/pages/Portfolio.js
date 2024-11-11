import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/index.css';
import freshFoodImage from '../../src/assets/img/portfolio/fresh-food.jpg';
import restaurantAkiraImage from '../../src/assets/img/portfolio/restaurant-japonais.jpg';
import espaceBienEtreImage from '../../src/assets/img/portfolio/espace-bien-etre.jpg';
import Banner from './banner'; 

function Portfolio() {
  const projects = [
    {
      title: 'Fresh food',
      description: 'Réalisation d\'un site avec commande en ligne.',
      imageUrl: freshFoodImage,
      demoLink: 'https://example.com/project1',
      tech: 'Site réalisé avec PHP et MySQL',
    },
    {
      title: 'Restaurant Akira',
      description: 'Réalisation d\'un site vitrine.',
      imageUrl: restaurantAkiraImage,
      demoLink: 'https://example.com/project2',
      tech: 'Site réalisé avec WordPress',
    },
    {
      title: 'Espace bien-être',
      description: 'Réalisation d\'un site vitrine pour un praticien de bien-être.',
      imageUrl: espaceBienEtreImage,
      demoLink: 'https://example.com/project3',
      tech: 'Site réalisé en HTML/CSS',
    },
  ];

  return (
    
    <section className='portfolio-section'>
      <Banner /> 
      <div className="container my-5">
        <h1 className="text-center mb-4">Mes Réalisations</h1>
        <p>Voici quelques-unes de mes réalisations.</p>
        <hr className="underline" />
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100">
                <img src={project.imageUrl} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.demoLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Voir</a>
                  <small className="d-block mt-2 text-muted">{project.tech}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src';
import Coder from '../assets/img/blog/coder.jpg';
import Croissance from '../assets/img/blog/croissance.jpg';
import Google from '../assets/img/blog/google.jpg';
import Screens from '../assets/img/blog/screens.jpg';
import Seo from '../assets/img/blog/seo.jpg';
import Technos from '../assets/img/blog/technos.png';
import Banner from './banner'; 



const Blog = () => {
  const articles = [
    {
      title: 'Coder son site en HTML/CSS',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imageUrl: Coder,
      date: '22 août 2022'
    },
    {
      title: 'Vendre ses produits sur le web',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imageUrl: Croissance,
      date: '20 août 2022'
    },
    {
      title: 'Se positionner sur Google',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imageUrl: Google,
      date: '1 août 2022'
    },
    {
      title: 'Coder en responsive design',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imageUrl: Screens,
      date: '31 juillet 2022'
    },
    {
      title: 'Techniques de référencement',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imageUrl: Seo,
      date: '30 juillet 2022'
    },
    {
      title: 'Apprendre à coder',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imageUrl: Technos,
      date: '12 juillet 2022'
    },
  ];

  return (
    <div className="blog-section">
<Banner />
    <div className="container mt-5">

      <h1 className="text-center mb-4">BLOG</h1>
      <p className="text-center mb-5">Retrouvez ici quelques articles sur le développement web.</p>
      <hr className="underline" />
      <div className="row">
        {articles.map((article, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card className="h-100">
              <Card.Img variant="top" src={article.imageUrl} alt={article.title} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Button variant="primary">Lire la suite</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      
      </div>
    </div>
  );
}

export default Blog;

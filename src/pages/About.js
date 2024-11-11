import React from 'react';
import '../../src'; 
import profileImage from '../assets/img/john-doe-about.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
    <div className="container">
      <h3>À propos</h3>
      <div className="row">
        <div className="col-md-6">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="col-md-6">
          <img src={profileImage} alt="Portrait de John Doe" className="img-fluid" />
        </div>
      </div>

      <div className="skills mt-4">
        <h4>Mes compétences</h4>
        <div className="progress mb-2">
          <div className="progress-bar bg-success" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
            HTML 90%
          </div>
        </div>
        <div className="progress mb-2">
          <div className="progress-bar bg-info" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
            CSS 80%
          </div>
        </div>
        <div className="progress mb-2">
          <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
            JavaScript 70%
          </div>
        </div>
        <div className="progress mb-2">
          <div className="progress-bar bg-danger" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
            React 60%
          </div>
        </div> 
                   
      </div>
    </div>
    </section>
  );
}

export default About;

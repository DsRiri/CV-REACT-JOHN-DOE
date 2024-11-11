import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';

function MentionsLegales() {
    return (
        <main className="mentions-legales">
            <h2>MENTIONS LÉGALES</h2>
            <div className="card">
                <Accordion title="Éditeur du site">
                    <p><strong>John Doe</strong><br />
                    40 Rue Laure Diebold<br />
                    69009 Lyon, France<br />
                    📞 06 20 30 40 50<br />
                    <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></p>
                </Accordion>
                
                <Accordion title="Hébergeur">
                    <p><strong>Always Data</strong><br />
                    91 rue du Faubourg Saint Honoré<br />
                    75008 Paris<br />
                    <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a></p>
                </Accordion>
                
                <Accordion title="Crédits">
                    <p>Site développé par John Doe, étudiant du CEF.<br />
                    Les images libres de droit sont issues du site <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer">Pixabay</a></p>
                </Accordion>
            </div>
        </main>
    );
}


export default MentionsLegales;

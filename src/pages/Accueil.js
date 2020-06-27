import React from 'react';
import Navigation from '../components/Navigation.js';

const Accueil = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="accueilContenu">
        <div className="contenu">
          <h1>Mickael Joly</h1>
          <h2>Développement web, front-end et design</h2>
          <div>
          <a href="./media/CV.pdf" target="_blank">Télécharger le CV </a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Accueil;
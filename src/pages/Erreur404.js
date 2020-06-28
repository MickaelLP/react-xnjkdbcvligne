import React from 'react';
import Navigation from '../components/Navigation.js';
import {NavLink} from 'react-router-dom';

const Erreur404 = () => {
  return (
    <>


    {/* <Navigation />
     <h1>Erreur 404 : Désolé nous ne trouvons pas votre page.</h1> 
     <a href="./">Clique ici pour revenir à la page d'accueil</a>. // Ne marche pas en react, on utilise les NavLinks
    */}

    <div className="notFound">
      <div className="notFoundContent">
        <h3>Erreur 404 : Désolé nous ne trouvons pas votre page.</h3>
        <NavLink exact to="/">
          <i className="fas fa-home"></i>
          <span>Accueil </span>
        </NavLink>
      </div>
    </div>
    </>
  );
}

export default Erreur404;
import React from 'react';
import Navigation from '../components/Navigation.js';

const Erreur404 = () => {
  return (
    <>
    <Navigation />
    <h1>Erreur 404 : Désolé nous ne trouvons pas votre page.</h1>
    {/* <a href="./">Clique ici pour revenir à la page d'accueil</a>. // Ne marche pas en react, on utilise les NavLinks */}
    </>
  );
}

export default Erreur404;
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Accueil from './pages/Accueil.js';
import Competences from './pages/Connaissances.js';
import Contact from './pages/Contact.js';
import Erreur404 from './pages/Erreur404.js';
import Portefolio from './pages/Portefolio.js';

// Exemple de fonction félchée

const App = () => {
  return (
    // JSX : C'est du code html dans du code react.
    // Toute l'application va être contenu dans le browserRouter. C'est quoi exactement ? Il sert à la nagigation. 
    <BrowserRouter> 

      <Switch> {/* Le switch me permet de Naviguer entre les différentes pages, et me servir de l'érreur 404 */}

        {/* Route : Si le chemin est juste "/" (Page d'accueil), alors on sera redirigé vers Accueil.js. */}
        <Route path="/" exact component={Accueil} /> {/* L'attribut exact permet d'afficher la page d'accueil uniquement lorsqu'on est sur / */}

        <Route path="/competences" component={Competences} /> 

        <Route path="/portefolio" component={Portefolio} /> 

        <Route path="/contact" component={Contact} /> 

        <Route component={Erreur404} /> 

      </Switch>

    </BrowserRouter>

  );
} 

export default App;
//export default ({ name }) => <h1>Hello {name}!</h1>; // Ligne du début. 
